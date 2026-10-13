import Link from 'next/link';
import Photo from '@/components/Photo';
import BookingForm from '@/components/BookingForm';
import {Availability} from '@/components/Header';
import {cat,series,details} from '@/lib/portfolio';
import {site} from '@/lib/site';
export default function Home(){return <main id="main">
 <section className="hero" aria-labelledby="hero-heading"><Photo photo={cat} priority/><div className="hero-shade"/><div className="hero-copy"><p className="eyebrow">Model · Selected portfolio</p><h1 id="hero-heading">Presence,<br/>in every frame.</h1><a className="explore" href="#work">Explore the work <span aria-hidden="true">↓</span></a><span className="long-arrow" aria-hidden="true">↓</span></div></section>
 <section id="work" className="work shell"><div className="section-heading"><h2 className="eyebrow">01 / Selected stories</h2><p>A portfolio of tailoring, movement<br/>and expressive character work.</p></div><div className="work-grid">{series.map((item,index)=><Link href={`/work/${item.slug}`} key={item.slug} className={`work-card ${index<2?'feature':''}`}><Photo photo={item.cover}/><div className="card-shade"/><div className="card-caption"><h3>{item.title}</h3><p>{item.tagline}</p><span>View series <span aria-hidden="true">↗</span></span></div></Link>)}</div></section>
 <section id="about" className="about shell"><div className="detail-strip">{details.map((photo,i)=><Photo photo={photo} key={i}/>)}</div><div className="about-content"><div><h2 className="eyebrow section-rule">02 / About</h2><p className="about-name">MUIZ</p></div><div className="about-copy"><h3>Fashion. Beauty. Movement. Character.</h3><p>{site.about}</p><span className="eyebrow disclosure">{site.disclosure}</span></div></div></section>
 <section id="booking" className="booking"><div className="shell booking-grid"><div className="booking-copy"><h2 className="eyebrow section-rule">03 / Booking</h2><h3>Make the<br/>next image.</h3><p className="rate">{site.rate}</p><p className="rate-note">{site.rateNote}</p><Availability/></div><BookingForm/></div></section>
 </main>}
