import Image from 'next/image';
import PostLayout from '@/components/PostLayout';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

/* ---------- hero (what people see on the page) ---------- */
const TITLE = 'Budget Notes: What You Can Realistically Get When Hiring a Male Model Under £2,500';
const DESCRIPTION =
  'A practical breakdown of where a £2,500 shoot budget goes, which usage fits, what to cut first and what not to squeeze.';
const DATE = '2026-10-16';

/* ---------- SEO (what Google and link previews see) ---------- */
const SEO_TITLE = 'Hiring a Male Model Under £2,500: What You Can Get';
const SEO_DESCRIPTION =
  'Working with a £2,500 budget? See what a male model shoot can realistically include, where the money goes, and what to cut first.';

export const metadata: Metadata = {
  title: { absolute: SEO_TITLE },
  description: SEO_DESCRIPTION,
  openGraph: { title: SEO_TITLE, description: SEO_DESCRIPTION, type: 'article' },
  twitter: { card: 'summary_large_image', title: SEO_TITLE, description: SEO_DESCRIPTION },
  alternates: { canonical: '/journal/hire-a-male-model-under-2500' },
};

/* ---------- helpers ---------- */

function Fig({
  src,
  alt,
  caption,
  maxWidth = 1100,
}: {
  src: string;
  alt: string;
  caption: string;
  maxWidth?: number;
}) {
  return (
    <figure className="post-figure" style={{ maxWidth }}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={1500}
        sizes="(max-width: 900px) 100vw, 1100px"
        style={{ width: '100%', height: 'auto' }}
      />
      <figcaption className="post-caption">{caption}</figcaption>
    </figure>
  );
}

function List({ items }: { items: ReactNode[] }) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

const faqs = [
  {
    q: 'Can I hire a male model for a full campaign with £2,500?',
    a: 'Usually not a full campaign, but you can get a focused shoot. £2,500 works well for one concept, one location, two or three looks and a clear usage plan. Multi-day campaigns, several locations or wide paid advertising usually need a bigger budget.',
  },
  {
    q: 'Is the £2,500 only for the model?',
    a: 'No. Most clients forget this. The budget has to cover the photographer, retouching, styling or grooming if needed, location or studio hire, and a small contingency, as well as my fee and usage. The model is one part of the total.',
  },
  {
    q: 'What is the cheapest way to book a male model?',
    a: 'Shorter hours, fewer looks, organic social usage only and a photographer you already work with. Those four changes reduce cost more than any discount on a day rate, and they keep the images usable.',
  },
  {
    q: 'Can I run the images as paid ads on a £2,500 budget?',
    a: 'Sometimes. A short paid social licence in one territory can fit if the rest of the shoot is kept simple. Long-term, multi-country or out-of-home usage usually pushes the cost past this budget.',
  },
  {
    q: 'What should I tell you if my budget is fixed?',
    a: 'Send the number, the shoot date, where the images will run and what absolutely must be in the final set. With those four things I can tell you quickly what fits and what to trim.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/* ---------- page ---------- */

export default function BudgetHireMaleModelPost() {
  return (
    <PostLayout
      title={TITLE}
      excerpt={DESCRIPTION}
      date={DATE}
      heroImage="/images/budget-hire-male-model-hero.png"
    >
      <p>
        Most enquiries I get include a number, or at least a rough ceiling. £2,500 comes up a lot. It’s a sensible budget for a small brand, a founder-led label or a team testing new content, and it can buy a good shoot. It just won’t buy every version of a good shoot.
      </p>

      <p>
        So here’s the honest version: what £2,500 realistically covers when hiring a male model, where the money actually goes, what I’d cut first, and what I wouldn’t touch. If you’re working to a fixed budget, this should save you a few rounds of back-and-forth.
      </p>

      <h2 data-toc="The short answer">The short answer: what £2,500 can realistically cover</h2>
      <p>
        A well-planned £2,500 budget covers one clear concept: a single location, two to three looks, a few hours of shooting and usage that matches how you’ll actually use the images. It gets harder when you add several locations, a long list of looks, a large team or wide advertising rights.
      </p>

      <Fig
        src="/images/budget-hire-male-model-1.png"
        alt="Male model going through a shoot budget and shot list on a table before a photoshoot"
        caption="Planning the shoot around the budget, not the other way round."
      />

      <p><strong>Three setups that usually fit under £2,500:</strong></p>

      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>Shoot type</th>
              <th>What fits</th>
              <th>Usage that fits</th>
              <th>What to leave out</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Social content day</td>
              <td>4 to 6 hours, 2 to 3 looks, one location</td>
              <td>Organic social, 6 to 12 months</td>
              <td>Paid ads, exclusivity, extra locations</td>
            </tr>
            <tr>
              <td>Website and e-commerce refresh</td>
              <td>Half to full day, 3 to 4 looks, studio</td>
              <td>Website and email, 12 months</td>
              <td>Billboards, broadcast, long renewals</td>
            </tr>
            <tr>
              <td>Small paid social test</td>
              <td>One concept, 2 looks, simple set</td>
              <td>Paid social, 3 months, one territory</td>
              <td>Multi-country rights, a second shoot day</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ paddingTop: '15px' }}>
        These are starting points, not fixed packages. Your date, location and usage can move the numbers either way, which is why I quote after the brief.
      </p>

      <h2 data-toc="Where the money goes">Where a £2,500 budget actually goes</h2>
      <p>
        The most common mistake is treating the whole £2,500 as the model’s fee. The model is one line. Before you contact anyone, split the budget across everything the shoot needs, because the other lines are the ones people forget.
      </p>

      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>Line item</th>
              <th>Typical share</th>
              <th>Approx. amount</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Model fee and usage</td><td>30 to 35%</td><td>£750 to £875</td></tr>
            <tr><td>Photographer and retouching</td><td>35 to 40%</td><td>£875 to £1,000</td></tr>
            <tr><td>Styling and grooming</td><td>10 to 15%</td><td>£250 to £375</td></tr>
            <tr><td>Location or studio</td><td>10 to 15%</td><td>£250 to £375</td></tr>
            <tr><td>Contingency</td><td>5 to 10%</td><td>£125 to £250</td></tr>
          </tbody>
        </table>
      </div>

      <p style={{ paddingTop: '15px' }}>
        The ranges overlap, so they won’t add up to exactly 100%. Use them to see roughly how the budget divides, then adjust. If you already have a photographer or an in-house stylist, that share frees up and can go towards more usage or an extra look.
      </p>

      <p><strong>What usually gets forgotten:</strong></p>
      <List
        items={[
          <><strong>Retouching:</strong> Raw files aren’t finals. Ask what’s included and how many revisions.</>,
          <><strong>Travel and parking:</strong> Small costs that add up, especially on location.</>,
          <><strong>Wardrobe:</strong> Buying or borrowing clothes, plus returns and steaming.</>,
          <><strong>Food and breaks:</strong> A hungry set is a slow set, and slow sets run into overtime.</>,
          <><strong>Overtime:</strong> Agree the rate before the day so the last hour isn’t a negotiation.</>,
        ]}
      />

      <h2 data-toc="Usage that fits">Which image usage fits under £2,500</h2>
      <p>
        Usage is the biggest swing factor, and it’s where budgets quietly run over. The same shoot costs very different amounts depending on where the images will run, for how long and in which countries. At this budget level, narrow and short usually wins.
      </p>

      <Fig
        src="/images/budget-hire-male-model-2.png"
        alt="Male model and photographer reviewing test frames on a laptop to confirm the shot list"
        caption="Agreeing the shot list early keeps the budget intact."
      />

      <p><strong>What tends to fit and what tends to stretch the budget:</strong></p>
      <List
        items={[
          <><strong>Organic social:</strong> Usually fits comfortably, even with a 12-month term.</>,
          <><strong>Website and email:</strong> Fits well when limited to your own site and one year.</>,
          <><strong>Paid social:</strong> Can fit for a short term in one territory. Longer or wider gets expensive.</>,
          <><strong>Print and out-of-home:</strong> Rarely fits alongside a full shoot at this level.</>,
          <><strong>Broadcast and video:</strong> Usually needs its own budget.</>,
          <><strong>Exclusivity:</strong> Blocking me from working with competitors adds cost. Only ask if it matters.</>,
        ]}
      />

      <p>
        One useful trick: start with a shorter licence and a clear renewal option. It’s far easier to extend usage when a campaign performs than to overpay upfront for rights you may never use.
      </p>

      <h2 data-toc="What to cut first">What I’d cut first when the budget is tight</h2>
      <p>
        When a quote lands slightly over, there’s usually a sensible order for trimming. I’d rather go through this with you before the shoot than discover on the day that something has to give.
      </p>

      <Fig
        src="/images/budget-hire-male-model-3.png"
        alt="Male model choosing between outfits on a clothing rail during a studio shoot"
        caption="Fewer looks, done well, beat more looks done in a rush."
      />

      <p><strong>Cut in this order:</strong></p>
      <List
        items={[
          <><strong>Number of looks:</strong> Three strong looks usually beat six rushed ones.</>,
          <><strong>Extra locations:</strong> Every move costs time. One good location is enough.</>,
          <><strong>Usage length:</strong> Shorten the initial term and add a renewal clause.</>,
          <><strong>Territory:</strong> Limit to where you actually sell.</>,
          <><strong>Shoot hours:</strong> A tighter shot list can fit into fewer hours.</>,
          <><strong>Team size:</strong> Combine roles where it makes sense, such as styling and grooming.</>,
        ]}
      />

      <p><strong>What I wouldn’t cut:</strong></p>
      <List
        items={[
          <><strong>Breaks and food:</strong> Tired people produce flat frames.</>,
          <><strong>Test shots at the start:</strong> They save more time than they cost.</>,
          <><strong>The written agreement:</strong> It protects both sides, especially on usage.</>,
          <><strong>A small contingency:</strong> Weather, delays and wardrobe issues do happen.</>,
        ]}
      />

      <h2 data-toc="What won’t fit">What I wouldn’t try to fit into £2,500</h2>
      <p>
        I’d rather be upfront than let you plan around something that won’t work. If your brief includes any of these, either increase the budget or split the project into stages.
      </p>

      <Fig
        src="/images/budget-hire-male-model-4.png"
        alt="Male model standing on a simple studio set with a single backdrop and lighting"
        caption="A simple set with one backdrop keeps costs under control."
      />

      <List
        items={[
          <><strong>Multi-day shoots:</strong> A second day roughly doubles the production load.</>,
          <><strong>Several locations in one day:</strong> Travel between setups eats into shooting time.</>,
          <><strong>Wide paid advertising:</strong> Multiple countries, long terms or heavy media spend.</>,
          <><strong>Out-of-home campaigns:</strong> Billboards and bus shelters price differently.</>,
          <><strong>Large wardrobe changes:</strong> Eight looks in four hours is a shoot nobody enjoys.</>,
          <><strong>Full exclusivity:</strong> Category exclusivity changes the price meaningfully.</>,
        ]}
      />

      <p>
        If you need more than £2,500 allows, a smaller first shoot followed by a second one later is often smarter than stretching one day too far.
      </p>

      <h2 data-toc="How to enquire">How to send an enquiry that gets a useful answer</h2>
      <p>
        If your budget is fixed, say so in the first message. It’s the single most helpful detail you can send, because I can tell you straight away what fits and what doesn’t instead of quoting for something out of reach.
      </p>

      <p><strong>What to include:</strong></p>
      <List
        items={[
          <><strong>Your budget:</strong> The total, and whether it covers the whole shoot or only the model.</>,
          <><strong>Shoot date:</strong> A date or a flexible range.</>,
          <><strong>Where the images will run:</strong> Social, website, ads or print.</>,
          <><strong>The must-have shots:</strong> The images the shoot can’t end without.</>,
          <><strong>Team:</strong> Whether you already have a photographer, stylist or grooming support.</>,
          <><strong>Location:</strong> The city, and whether it’s a studio or outdoors.</>,
        ]}
      />

      <p><strong>A message that works:</strong></p>
      <p>
        “Hi Muiz, we’re planning a skincare content shoot in London on the 14th. Budget is £2,500 all in, including photographer and retouching. We need three looks for organic social and our website for 12 months. Our photographer is booked. Are you available, and does this fit?”
      </p>

      <p>
        That message tells me the budget, the date, the usage, the scope and the team. I can usually reply with a clear yes, a clear no or a small adjustment the same day.
      </p>

      <Fig
        src="/images/budget-hire-male-model-5.png"
        alt="Male model looking through final selected images on a screen after a photoshoot"
        caption="A clear budget up front leads to a better final set."
      />

      <p><strong>Before you book, check:</strong></p>
      <List
        items={[
          'Is the budget split across model, photographer, retouching, styling and location?',
          'Does the usage match where the images will really appear?',
          'Is overtime agreed in writing?',
          'Is there a small contingency left?',
          'Does the shot list fit the hours booked?',
        ]}
      />

      <h2>Frequently asked questions</h2>
      {faqs.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </PostLayout>
  );
}