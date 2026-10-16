import Link from 'next/link';
import {getPosts} from '@/lib/posts';

export const metadata = {
  title: 'Journal',
  description: 'Notes on image-making, style and the work behind the frame.'
};

export default function Journal() {
  const posts = [
    ...getPosts(),
    {
      slug: 'how-to-hire-a-male-model',
      title: 'How to Hire a Male Model: What Happens After You Send an Enquiry, Step by Step',
      date: '2026-10-16',
     excerpt: 'A male model\'s honest walkthrough of the booking process: enquiry, creative brief, usage rights, quote, confirmation, prep, shoot day and delivery.',
      body: ''
    }
  ].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main id="main" className="shell inner journal">
      <header className="page-heading">
        <p className="eyebrow">Notes & perspectives</p>
        <h1>Beyond the frame.</h1>
        <p>Notes on image-making, style and the work behind the frame.</p>
      </header>

      {posts.length ? (
        <div className="post-list">
          {posts.map(post => (
            <Link href={`/journal/${post.slug}`} key={post.slug}>
              <time dateTime={post.date}>
                {new Date(post.date + 'T12:00:00Z').toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  timeZone: 'UTC'
                })}
              </time>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <span>Read story ↗</span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="journal-empty">
          <p className="eyebrow">The journal is taking shape</p>
          <h2>More to come.</h2>
          <p>New stories will appear here soon.</p>
          <Link className="text-link" href="/#work">Explore the portfolio ↗</Link>
        </div>
      )}
    </main>
  );
}