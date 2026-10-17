import Link from 'next/link';
import {getPosts} from '@/lib/posts';

export const metadata = {
  title: 'Journal',
  description: 'A few thoughts on the industry, the awkward bits of booking, and what really happens on set.'
};

export default function Journal() {
const posts = getPosts();

  return (
    <main id="main" className="shell inner journal">
      <header className="page-heading">
        <p className="eyebrow">Notes & perspectives</p>
        <h1>While We’re Here.</h1>
<p style={{ maxWidth: '1500px !important' } as React.CSSProperties}>
  A few thoughts on the industry, the awkward bits of booking, and what really happens on set.
</p>
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