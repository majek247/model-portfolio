import Link from 'next/link';
import Photo from '@/components/Photo';
import BookingForm from '@/components/BookingForm';
import { Availability } from '@/components/Header';
import { cat, series } from '@/lib/portfolio';
import { site } from '@/lib/site';

export default function Home() {
  return (
    <main id="main">

      <section
        className="hero"
        aria-labelledby="hero-heading"
      >
        <Photo
          photo={cat}
          priority
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">
            Model | Visual Storyteller
          </p>
          <h1 id="hero-heading">
            Presence,
            <br />
            in every frame.
          </h1>
          <a
            className="explore"
            href="#work"
          >
            Explore the work <span aria-hidden="true">↓</span>
          </a>
          <span
            className="long-arrow"
            aria-hidden="true"
          >
            ↓
          </span>
        </div>
      </section>

      <section
        id="work"
        className="work shell"
      >
        <div className="section-heading">
          <h2 className="eyebrow">
            01 / Work
          </h2>
        
        </div>
        <div className="work-grid">
          {series.map((item, index) => (
            <Link
              href={`/work/${item.slug}`}
              key={item.slug}
              className={`work-card ${index < 2 ? 'feature' : ''}`}
            >
              <Photo photo={item.cover} />
              <div className="card-shade" />
              <div className="card-caption">
                <h3>{item.title}</h3>
                <span>
                  View series <span aria-hidden="true">↗</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="about shell"
      >
        <div className="comp">
          <div className="comp-left">
            <h2 className="eyebrow section-rule">
              02 / Profile
            </h2>
            <p className="comp-name">
              MUIZ
            </p>
            <p className="comp-sub">
              Portraits &amp; measurements
            </p>

            <div className="comp-height">
              <span className="comp-label">Height</span>
              <strong>5’11”</strong>
              <em>180 cm</em>
            </div>

            <div className="comp-row"><span>Eyes</span><span>Brown</span></div>
               <div className="comp-row"><span>Chest</span><span>40” · 102 cm</span></div>
            <div className="comp-row"><span>Waist</span><span>34” · 86 cm</span></div>    
            <div className="comp-row"><span>Suit</span><span>40R</span></div>
            <div className="comp-row"><span>Shoes</span><span>UK 9 · EU 43</span></div>

          </div>

          <div className="comp-right">
            <h3 className="comp-title">Digitals.</h3>
          <p className="comp-kicker">Current · Oct 2026</p>
            <div className="comp-grid">
              <figure>
                <div className="comp-shot">
                  <Photo photo={{ src: '/images/newcomp1.png', alt: 'Headshot of Muiz' }} />
                </div>
                <figcaption>01 / Headshot</figcaption>
              </figure>
              <figure>
                <div className="comp-shot">
                  <Photo photo={{ src: '/images/newcomp2.png', alt: 'Side profile of Muiz' }} />
                </div>
                <figcaption>02 / Side profile</figcaption>
              </figure>
              <figure>
                <div className="comp-shot">
                  <Photo photo={{ src: '/images/newcomp3.png', alt: 'Waist-up portrait of Muiz' }} />
                </div>
                <figcaption>03 / Waist-up</figcaption>
              </figure>
              <figure>
                <div className="comp-shot">
                  <Photo photo={{ src: '/images/newcomp4.png', alt: 'Full-length portrait of Muiz' }} />
                </div>
                <figcaption>04 / Full length</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section
        id="booking"
        className="booking"
      >
        <div className="shell booking-grid">
          <div className="booking-copy">
            <h2 className="eyebrow section-rule">
              03 / Booking
            </h2>
            <h3>
              Have something
              <br />
              in <em>mind?</em>
            </h3>
            <p className="lead">
              Tell me what you’re making, where it’s happening
              <br />
              and when. I’d love to hear the idea.
            </p>
            <div className="booking-note">
         <p className="eyebrow">Location and travel</p>
              <h4>
                Based in Nigeria.
                <br />
                Available for UK and international shoots.
              </h4>
            </div>
            <div className="booking-fees">
              <p className="rate">
                {site.rate}
              </p>
              <p className="rate-note">
                {site.rateNote}
              </p>
              <Availability />
            </div>
          </div>
          <div className="booking-right">
            <h2 className="eyebrow section-rule">
              01
            </h2>
            <h3 className="form-title">
              Tell me about the project.
            </h3>
            <BookingForm />
          </div>
        </div>
      </section>

    </main>
  );
}