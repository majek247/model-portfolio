import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const error = (message: string, status: number) =>
  NextResponse.json({ error: message }, { status });

// Slack treats &, < and > as control characters. Escaping them stops visitors
// from injecting mentions (<!channel>) or links into your notification.
const slackEscape = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function POST(request: Request) {
  // Same-origin browser requests only. Configure rate limiting at your host
  // for production; an in-memory counter does not protect distributed deployments.
  const origin = request.headers.get('origin');

  if (origin && origin !== new URL(request.url).origin) {
    return error('This request could not be accepted.', 403);
  }

  if (!request.headers.get('content-type')?.includes('application/json')) {
    return error('Expected a JSON request.', 415);
  }

  if (Number(request.headers.get('content-length') || 0) > 12000) {
    return error('Your enquiry is too long.', 413);
  }

  let data: Record<string, unknown>;

  try {
    const raw = await request.text();

    if (raw.length > 12000) {
      return error('Your enquiry is too long.', 413);
    }

    const parsed: unknown = JSON.parse(raw);

    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return error('Please check the enquiry fields.', 400);
    }

    data = parsed as Record<string, unknown>;
  } catch {
    return error('Please check the enquiry fields.', 400);
  }

  // Honeypot: bots fill this, humans never see it. Fake success so bots move on.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const fields = [
    'name',
    'email',
    'project',
    'location',
    'budget',
    'usage',
  ] as const;

  const values: Record<string, string> = {};

  for (const key of fields) {
    if (typeof data[key] !== 'string') {
      return error('Please complete every field.', 400);
    }

    values[key] = (data[key] as string).trim();

    const maxLength =
      key === 'project' ? 3000 : key === 'email' ? 254 : 150;

    if (!values[key] || values[key].length > maxLength) {
      return error('Please check the length of your enquiry fields.', 400);
    }
  }

  if (!emailPattern.test(values.email) || /[\r\n]/.test(values.email)) {
    return error('Please enter a valid email address.', 400);
  }

  const { RESEND_API_KEY, ENQUIRY_TO, ENQUIRY_FROM, SLACK_WEBHOOK_URL } =
    process.env;

  const emailConfigured = Boolean(RESEND_API_KEY && ENQUIRY_TO && ENQUIRY_FROM);
  const slackConfigured = Boolean(
    SLACK_WEBHOOK_URL?.startsWith('https://hooks.slack.com/')
  );

  if (!emailConfigured && !slackConfigured) {
    return error(
      'Online enquiries are not available yet. Please try again later.',
      503
    );
  }

  const sendEmail = async (): Promise<boolean> => {
    if (!emailConfigured) return false;

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: ENQUIRY_FROM,
          to: [ENQUIRY_TO],
          reply_to: values.email,
          subject: `New MUIZ enquiry: ${values.name.replace(/[\r\n]+/g, ' ')}`,
          text: fields
            .map((key) => `${key.toUpperCase()}\n${values[key]}`)
            .join('\n\n'),
        }),
        signal: AbortSignal.timeout(12000),
      });

      return response.ok;
    } catch {
      return false;
    }
  };

  const sendSlack = async (): Promise<boolean> => {
    if (!slackConfigured) return false;

    try {
      const text = [
        '*New MUIZ enquiry*',
        `*Name:* ${slackEscape(values.name)}`,
        `*Email:* ${slackEscape(values.email)}`,
        `*Location:* ${slackEscape(values.location)}`,
        `*Budget:* ${slackEscape(values.budget)}`,
        `*Usage:* ${slackEscape(values.usage)}`,
        `*Project:*\n${slackEscape(values.project)}`,
      ].join('\n');

      const response = await fetch(SLACK_WEBHOOK_URL as string, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
        signal: AbortSignal.timeout(8000),
      });

      return response.ok;
    } catch {
      return false;
    }
  };

  // Send both at the same time. Each one catches its own errors, so a Slack
  // outage never blocks the email and an email outage never blocks Slack.
  const [emailOk, slackOk] = await Promise.all([sendEmail(), sendSlack()]);

  // The visitor sees success if at least one channel reached you.
  if (!emailOk && !slackOk) {
    return error(
      'Your message could not be delivered. Please try again later.',
      502
    );
  }

  return NextResponse.json({ ok: true });
}