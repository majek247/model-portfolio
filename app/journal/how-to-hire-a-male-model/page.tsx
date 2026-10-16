import Image from 'next/image';
import PostLayout from '@/components/PostLayout';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const TITLE = 'How to Hire a Male Model: What Happens After You Send an Enquiry, Step by Step';
const DESCRIPTION =
  'A step-by-step walkthrough of the booking process: enquiry, creative brief, usage rights, quote, confirmation, prep, shoot day and delivery.';
const DATE = '2026-10-16';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/journal/how-to-hire-a-male-model' },
};

/* ---------- helpers: change sizes here ---------- */

function Fig({
  src,
  alt,
  caption,
  maxWidth = 1100, // <- adjust image size per figure, or change the default here
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
      <figcaption className="post-caption">
        {caption}
      </figcaption>
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
    q: 'How far in advance should I book a male model?',
    a: 'Two to three weeks lets us handle the brief, usage and preparation properly, though I’ve turned around shorter bookings when the brief was clear.',
  },
  {
    q: 'How much does it cost to hire a male model?',
    a: 'It depends on hours, looks, location and above all usage, which is why I quote after the brief rather than before it.',
  },
  {
    q: 'Do I need to pay a deposit?',
    a: 'Yes, a deposit confirms the date and releases the hold, with the balance due on the terms in the agreement.',
  },
  {
    q: 'Can I use the images anywhere I like?',
    a: 'Only within the usage agreed in the quote, and I’m glad to extend it later if your plans change.',
  },
  {
    q: 'What if my budget is small?',
    a: 'Tell me early. We can reduce hours, narrow the usage or combine looks, and a smaller shoot done well beats a big one done in a rush.',
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

export default function HireMaleModelPost() {
  return (
    <PostLayout title={TITLE} excerpt={DESCRIPTION} date={DATE} heroImage="/images/chess1.png">
          <p>
            Enquiries reach me at hours when no sensible person sends anything, and the one I remember best landed at 11:42 on a Tuesday night: three lines, no greeting, asking whether I was free on the 19th and what I charged. I stared at it the way you’d stare at someone asking “how much is a car?” without saying whether they want a Corolla or a Bentley with a sunroof, and then I did what I now do with every message like it, which is to treat the vagueness as information rather than as a flaw. Nobody who hasn’t booked a model before knows what happens on the other side of the send button, and the industry does very little to explain it, so people either over-research and send me a forty-slide deck on day one or under-research and send me three lines at midnight. Both are perfectly workable, and both get easier once the process is visible, so this is the walkthrough I wish I could hand every new client: the real sequence, the real questions, and the places where bookings quietly go wrong. I’ve added raw behind-the-scenes photos of me at each stage, because I’d rather you see what a shoot looks like at 8am on a Tuesday than a polished frame implying it all happens effortlessly.
          </p>

          <h2>The booking process at a glance</h2>
          <ol>
            <li><strong>Enquiry:</strong> you send the basics (date, location, purpose).</li>
            <li><strong>Creative brief:</strong> we align on look, mood and deliverables.</li>
            <li><strong>Scope and usage:</strong> we define where the images will run and for how long.</li>
            <li><strong>Quote:</strong> a line-item price, with usage included in the conversation.</li>
            <li><strong>Confirmation:</strong> deposit paid, agreement signed, date locked.</li>
            <li><strong>Preparation:</strong> call sheet, wardrobe, grooming and logistics.</li>
            <li><strong>Shoot day:</strong> the timeline, the etiquette, the reality.</li>
            <li><strong>Afterwards:</strong> selects, delivery, usage log and rebooking.</li>
          </ol>

          <Fig
            src="/images/rawdigi1.png"
            alt="Male model reading a client brief on his phone between setups on a shoot day"
            caption="Stage 0, the part nobody sees: reading a client’s brief on my phone between setups. Unedited frame from a shoot day."
          />

          {/* STEP 1 */}
          <h2>Step 1: The enquiry (what to send and what happens next)</h2>
          <p>
            The first thing I do with an enquiry is read it twice and then go and look at the sender, which is something models do and rarely admit to: the Instagram account with 340 followers and a link in bio to a store selling linen shirts, the agency site that hasn’t been updated since 2022, the signature that says “Founder, Creative Director, Chief Packer of Orders.” None of that disqualifies anyone, because every brand I’ve enjoyed working with began as one person and a folding table, but it tells me which version of the conversation I’m about to have, and it tells me how many questions I’ll need to ask kindly.
          </p>
          <p><strong>What a useful enquiry includes:</strong></p>
          <List
            items={[
              'The shoot date, or the date range you’re flexible within.',
              'The location, or at least the city, and whether it’s a studio or outdoors.',
              'What the images are for (website, campaign, lookbook, social, print).',
              'How many hours you expect and how many looks.',
              'Who’s on the team (photographer, stylist, grooming) and whether you’ve already booked them.',
              'A budget range, even a rough one, because it saves us both a week.',
            ]}
          />
          <p><strong>What happens on my side within 24 hours:</strong></p>
          <List
            items={[
              'I check my calendar and put a soft hold on the date.',
              'I look at your brand, past work and the photographer’s portfolio.',
              'I reply with a short set of questions, usually five, rather than a price.',
            ]}
          />
          <p>
            An enquiry that reads “Hi, are you free on the 19th? How much?” gets a reply, but an enquiry that reads “Skincare launch, two looks, studio in Lekki, web and paid social for six months, photographer booked, budget around X” gets a quote within the day. The difference isn’t politeness, it’s that the second one let me skip an entire round of back-and-forth.
          </p>

          {/* STEP 2 */}
          <h2>Step 2: The creative brief (turning adjectives into references)</h2>
          <p>
            This is the stage where most shoots are won or lost, and it’s rarely lost through disagreement; it’s lost through shared vocabulary that turns out not to be shared. A skincare founder once answered my questions with two paragraphs and a Pinterest board of forty-one images, and somewhere in the middle she wrote “honestly I didn’t know usage was a thing,” which taught me that a good brief and a good question are the same object seen from two sides. On another job a founder kept asking me to look “more aspirational,” and instead of guessing I asked what aspirational looked like to her, at which point she showed me a photo of her father in a 1980s sailing jacket, and from that moment we had something to aim at. I now ask every client for that photo, the one that holds the feeling, because adjectives are slippery and references are not.
          </p>
          <p><strong>What a good brief contains:</strong></p>
          <List
            items={[
              'Three to eight reference images, plus one line on what you like about each.',
              'The mood in a sentence (“quiet confidence, not catalogue smile”).',
              'The deliverables: how many final images, in which crops (4:5, 16:9, vertical for stories).',
              'Wardrobe direction: brand-supplied, stylist-supplied or from my own wardrobe.',
              'Hard no’s (no shirtless, no beard, no sunglasses, whatever matters to your brand).',
              'The one image that must exist by the end of the day.',
            ]}
          />
          <p><strong>What I contribute:</strong></p>
          <List
            items={[
              'Honest feedback on whether the references suit my look and range.',
              'Suggestions on poses or expressions that read well for your category (fashion, grooming, lifestyle, fitness).',
              'Flags when the shot list is too ambitious for the hours booked.',
            ]}
          />
          <Fig
            src="/images/rawdigi2.png"
            alt="Male model reviewing a client’s mood references laid out before a shoot"
            caption="Stage 2: laying out a client’s mood references before a shoot. The Pinterest board was long, the conversation about it was short, and the shoot ran more smoothly because of it."
          />

          {/* STEP 3 */}
          <h2>Step 3: Scope and usage (the part that surprises first-time clients)</h2>
          <p>
            A florist once told me she’d assumed paying for the day meant owning the images forever, in every context, which is how almost everyone assumes it works until someone explains otherwise, and I was sympathetic rather than annoyed because nobody ever teaches this. The same photograph of my face is worth very different amounts depending on whether it appears on a brand’s Instagram for three months or on a bus shelter in four cities for a year, and I’ve watched people’s eyebrows move on video calls as they realise the price includes what they’re allowed to do afterwards. So before I send a number, I pin down four variables: where it appears, for how long, in which territory, and whether it’s exclusive.
          </p>

          {/* Real table now that you're in TSX. Wrapper scrolls on mobile. */}
          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th>Usage type</th>
                  <th>Where it appears</th>
                  <th>What changes the price</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Organic social</td><td>Your own Instagram, LinkedIn, TikTok</td><td>Duration, number of images</td></tr>
                <tr><td>Paid social / digital ads</td><td>Meta, Google, YouTube placements</td><td>Budget behind the ads, duration</td></tr>
                <tr><td>Website and e-commerce</td><td>Product pages, homepage, email</td><td>Duration, number of pages</td></tr>
                <tr><td>Print and out-of-home</td><td>Billboards, bus shelters, magazines</td><td>Territory, number of placements</td></tr>
                <tr><td>Broadcast / video</td><td>TV, cinema, long-form video</td><td>Reach, duration, exclusivity</td></tr>
              </tbody>
            </table>
          </div>

          <p><strong>Questions I ask at this stage:</strong></p>
          <List
            items={[
              'Will the images appear anywhere beyond what you’ve listed?',
              'Do you need the right to renew after the first term?',
              'Do you need category exclusivity (I won’t shoot for a direct competitor during the term)?',
              'Will the photographer or agency also use the images in their own portfolio?',
            ]}
          />

          {/* STEP 4 */}
          <h2>Step 4: The quote (what’s included and what isn’t)</h2>
          <p>
            A quote is the part of the process most people picture as a number, and it’s really a small essay in disguise, because the number only makes sense next to the sentence explaining what it covers. I send mine as a line-item breakdown so nothing hides inside a lump sum, and I’ve found that clients relax visibly once they can see where each piece comes from. The conversation that follows is often the most honest one of the booking: people share the real budget, the figure they were embarrassed to put in the first email, and it turns out a budget said out loud can be worked with in a dozen ways while a budget withheld can only be guessed at.
          </p>
          <p><strong>What a quote from me typically contains:</strong></p>
          <List
            items={[
              <><strong>Day rate:</strong> for a stated number of hours, with a rate for overtime.</>,
              <><strong>Usage fee:</strong> tied to the media, duration and territory agreed in Step 3.</>,
              <><strong>Travel and accommodation:</strong> if the shoot is outside my city.</>,
              <><strong>Extras:</strong> wardrobe fitting time, extra looks, second-day work.</>,
              <><strong>Deposit:</strong> the amount due to confirm the booking.</>,
              <><strong>Validity:</strong> how long the quote stays open.</>,
            ]}
          />
          <p><strong>Where quotes go wrong:</strong></p>
          <List
            items={[
              'Usage assumed rather than stated.',
              'Overtime not agreed ahead of time, so the last hour becomes an awkward negotiation.',
              'Looks and hours not matching (eight looks in four hours is a shoot nobody enjoys).',
            ]}
          />
          <p>
            After the quote there’s a silence, and it’s the most uncomfortable stretch for both sides. A quote unanswered for four days could mean you’re comparing three models, or that an investor hasn’t signed off, or that someone’s cousin offered to do it for free with an iPhone, and I don’t get to know which, so I send one light follow-up on day five and let it go. Some of those resurface three months later with “so sorry for the delay, are you still free?” as though no time had passed.
          </p>

          {/* STEP 5 */}
          <h2>Step 5: Confirmation (deposit, agreement and a locked date)</h2>
          <p>
            A verbal yes is a mood, while a deposit and a signed agreement are a commitment, and I wish more people understood that this is the moment a booking becomes real. I send a short agreement that covers the essentials, and it protects you as much as me: I’ve been on the receiving end of a studio moving its date with two days’ notice, and I know exactly how it feels to be the person who cleared a day and now has nothing to show for it. A shoot last spring was planned for a rooftop, and at 7:15 that morning the sky did what the sky does, and because a weather clause existed we spent six minutes choosing a plan B instead of an hour renegotiating the premise of the day.
          </p>
          <p><strong>What the agreement covers:</strong></p>
          <List
            items={[
              'Date, call time, location and total hours.',
              'Usage terms (media, duration, territory, exclusivity).',
              'Fee, deposit, balance and payment deadline.',
              'Cancellation and rescheduling terms for both sides.',
              'Weather and backup plan for outdoor shoots.',
              'Image approval, retouching and delivery timeline.',
              'Credit and portfolio rights.',
            ]}
          />
          <Fig
            src="/images/rawdigi3.png"
            alt="Male model signing a booking agreement to confirm a shoot"
            caption="Stage 5: confirming a booking. The signature takes a minute; the clarity it buys lasts through the whole shoot."
          />

          {/* STEP 6 */}
          <h2>Step 6: Preparation (call sheet, wardrobe and the unglamorous work)</h2>
          <p>
            The week before a shoot is mostly logistics and a surprising amount of wardrobe diplomacy. One client told me to “wear something casual and neutral,” and I arrived in what I considered a perfectly neutral cream knit, only to learn that her entire palette was cream and I would have dissolved into the backdrop like a chameleon in oatmeal. We fixed it with a navy shirt from the brand’s own rack, but it taught me that “neutral” is a word with at least fourteen meanings, each held with total confidence by whoever is using it, and it’s why I now ask for wardrobe specifics in writing. The rest of my preparation is far less glamorous than people expect: I sleep properly, drink water as though it were a part-time job, avoid anything salty after eight, and book my haircut three or four days before rather than the day before, because a fresh cut needs time to settle.
          </p>
          <p><strong>What I ask clients to send before the day:</strong></p>
          <List
            items={[
              'A call sheet with call time, address, parking and an on-site contact number.',
              'The final shot list and the one image that must exist by the end.',
              'Wardrobe plan: what’s supplied, what I should bring, sizes and colours.',
              'Whether grooming is provided or whether I should arrive camera-ready.',
              'Meal and break plan (a hungry set is a slow set).',
            ]}
          />
          <p><strong>What I do in the 48 hours before:</strong></p>
          <List
            items={[
              'Confirm travel and arrive-by time, then add a buffer.',
              'Check sizes with the stylist and send alternates if needed.',
              'Skin routine, hydration and early sleep.',
              'Pack: grooming kit, neutral underlayers, spare shoes, a charger.',
            ]}
          />
          <Fig
            src="/images/hairgroom1.png"
            alt="Male model doing his skin care routine on the morning of a shoot"
            caption="Stage 6: the preparation nobody photographs. Skin care the morning of a shoot, which is how the final images look rested at hour nine of a ten-hour day."
          />

          {/* STEP 7 */}
          <h2>Step 7: Shoot day (what the timeline actually looks like)</h2>
          <p>
            If everything before it went well, shoot day is almost boring in the best way. I arrive ten minutes early, find the person who’s actually in charge (rarely the person who signed the emails), and watch the first twenty minutes the way a surfer watches the water before going in, because the tone of a shoot is set almost immediately: whether the photographer talks to me or at me, whether anyone has eaten, whether the client is hovering behind the monitor with the posture of someone watching their own surgery. A text that reads “6am, it’s the blue door” is a sign of how the day will run, and I’ve learned to adapt, but I’ve also learned that the shoots people remember fondly are the ones where somebody was calm at 6am.
          </p>
          <p><strong>A typical ten-hour shoot day:</strong></p>
          <List
            items={[
              <><strong>7:30</strong> Arrive, meet the team, walk the set.</>,
              <><strong>8:00</strong> Grooming and first look into wardrobe.</>,
              <><strong>9:00</strong> Test frames and light check; client reviews on the monitor.</>,
              <><strong>9:30</strong> Look one, then a short reset.</>,
              <><strong>12:00</strong> Lunch, a proper break away from the monitor.</>,
              <><strong>13:00</strong> Looks two and three, usually the most relaxed frames.</>,
              <><strong>15:30</strong> Hero shot (the one image that must exist).</>,
              <><strong>17:00</strong> Wrap, quick selects review, sign-off on the day.</>,
            ]}
          />
          <p><strong>How to get the best out of a model on set:</strong></p>
          <List
            items={[
              'Give direction as references, not adjectives (“like the sailing jacket photo,” not “more aspirational”).',
              'Keep one person giving direction; three voices make a stiff model.',
              'Show test frames early so adjustments happen in the first hour, not the last.',
              'Feed people and schedule breaks, because energy shows in the face.',
            ]}
          />
          <Fig
            src="/images/hairgroom2.png"
            alt="Male model between setups in the dressing room on a shoot day"
            caption="Stage 7: between setups in the dressing room. Most of a shoot day looks like this: waiting, adjusting, then thirty seconds of the frame everyone remembers."
          />
          <Fig
            src="/images/rawdigi4.png"
            alt="Male model on location at golden hour during a photoshoot"
            caption="Stage 7: on location at golden hour. Light dictates the schedule more than anyone admits, so the call sheet was built around it."
          />

          {/* STEP 8 */}
          <h2>Step 8: Afterwards (selects, delivery and usage log)</h2>
          <p>
            Afterwards comes the part nobody sees: the selects arriving within a few days, the “we love them!” or the “can we reshoot the third look?”, the final retouched images, the invoice, the quiet relief. I’ve also learned that the thank-you note I send after the invoice, naming one specific thing I enjoyed about the day, gets answered faster than any follow-up I’ve ever written, which suggests clients are mostly waiting to hear that it went as well as they hoped. Weeks later there’s occasionally an image I recognise on a website or a billboard, and I get a slightly absurd jolt at seeing my own face at scale, which never quite stops being strange.
          </p>
          <p><strong>What happens after the shoot:</strong></p>
          <List
            items={[
              <><strong>Selects:</strong> the photographer shares a contact sheet; you choose your finals.</>,
              <><strong>Retouching:</strong> a round of edits with an agreed limit on revisions.</>,
              <><strong>Delivery:</strong> final files in the formats and crops listed in the brief.</>,
              <><strong>Usage log:</strong> a simple record of where images run and when the term ends.</>,
              <><strong>Renewal:</strong> a reminder before the usage term expires, so nothing runs unlicensed.</>,
              <><strong>Feedback and rebooking:</strong> a short debrief while it’s fresh.</>,
            ]}
          />
          <Fig
            src="/images/hairgroom3.png"
            alt="Contact sheet of selects from a male model photoshoot"
            caption="Stage 8: the contact sheet. Hundreds of frames become a dozen finals, and the choosing is where the brief pays off."
          />

          <h2>Five things I wish every first-time client knew</h2>
          <ol>
            <li><strong>Usage is part of the price.</strong> Tell me where the images will run and I can quote in a single round.</li>
            <li><strong>A budget said out loud is workable.</strong> I can adapt looks, hours or usage to meet it.</li>
            <li><strong>References beat adjectives.</strong> One photo carries more than a paragraph of description.</li>
            <li><strong>Hold dates are soft until the deposit lands.</strong> A date isn’t mine, or yours, until it’s confirmed.</li>
            <li><strong>A fed, rested set produces better images.</strong> It’s the cheapest upgrade in the whole budget.</li>
          </ol>

          <h2>Frequently asked questions</h2>
          {faqs.map((f) => (
            <div key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}

          <h2>Back to that 11:42 message</h2>
          <p>
            I think about that three-line message often, because so much of working with other people, in any field, comes down to whether we’re willing to be a little embarrassed at the start, to send the clumsy question and let someone answer it kindly. I replied to it with five questions, and by Thursday we had a brief, a quote and a date, which is a reasonably good argument for sending the vague message at midnight and letting the process do its job. If you’re about to send one of your own, you can use the Enquire button at the top of the page, and if you’ve ever sent an enquiry like that to a model, a photographer, a plumber or a lawyer, I’d like to know what you were afraid they’d say and what actually happened when they replied.
          </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </PostLayout>
  );
}
