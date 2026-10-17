import Link from 'next/link';
import { site } from '@/lib/site';

export function Availability() {
  return (
    <span className="availability">
      <i aria-hidden="true" />
      {site.availability}
    </span>
  );
}

export default function Header() {
  return (
    <header className="header">
      <Link
        className="wordmark"
        href="/"
        aria-label="Muiz homepage"
      >
        MUIZ
      </Link>

      <nav aria-label="Main navigation">
        <Link href="/#work">Portfolio</Link>
        <Link href="/#about">Profile</Link>
          <Link href="/journal">Journal</Link>
      </nav>

      <Link className="header-enquire" href="/#booking">
        Enquire
        <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}