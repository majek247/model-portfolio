import Link from 'next/link';
import { site } from '@/lib/site';
export function Availability(){return <span className="availability"><i aria-hidden="true"/>{site.availability}</span>}
export default function Header(){return <header className="header"><Link className="wordmark" href="/" aria-label="Muiz homepage">MUIZ</Link><nav aria-label="Main navigation"><Link href="/#work">Work</Link><Link href="/#about">About</Link><Link href="/#booking">Booking</Link></nav><a className="header-status" href="/#booking"><Availability/></a></header>}
