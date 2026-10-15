import Link from 'next/link';
import { Availability } from './Header';

export default function Footer() {
  return (
    <footer className="footer shell">
      <div className="footer-top">
        <Link href="/" className="footer-logo">
          MUIZ
        </Link>

        <nav aria-label="Footer navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#about">About</Link>
          <Link href="/#booking">Booking</Link>
          <Link href="/journal">Journal</Link>
        </nav>

        <a className="footer-status" href="/#booking">
          <Availability />
        </a>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} MUIZ. All rights reserved.</span>
      </div>
    </footer>
  );
}