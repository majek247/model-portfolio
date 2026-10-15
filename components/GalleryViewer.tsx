'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import Image from 'next/image';
import type { Photo } from '@/lib/portfolio';

import SocialShare from '@/components/SocialShare';

type Props = {
  photos: Photo[];
  eyebrow: string;
  title: string;
  description: string;
};

const pad = (n: number) => String(n).padStart(2, '0');

export default function GalleryViewer({ photos, eyebrow, title, description }: Props) {
  const [i, setI] = useState(0);
  const total = photos.length;
  const touchX = useRef<number | null>(null);

  const go = (n: number) => setI(Math.max(0, Math.min(total - 1, n)));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setI((v) => Math.min(total - 1, v + 1));
      if (e.key === 'ArrowLeft') setI((v) => Math.max(0, v - 1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [total]);

  return (
    <section className="gal">
      <div className="gal-info">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="gal-desc">{description}</p>

        <div className="gal-controls">
          <span className="story-count">
            {pad(i + 1)} / {pad(total)}
          </span>
          <div className="gal-line" aria-hidden="true">
            <div
              className="gal-line-fill"
              style={{ width: `${((i + 1) / total) * 100}%` }}
            />
          </div>
          <button
            type="button"
            className="story-arrow"
            onClick={() => go(i - 1)}
            disabled={i === 0}
            aria-label="Previous photo"
          >
            ←
          </button>
          <button
            type="button"
            className="story-arrow"
            onClick={() => go(i + 1)}
            disabled={i === total - 1}
            aria-label="Next photo"
          >
            →
          </button>
 
        </div>
           <SocialShare
          image={photos[i].src}
          text={`${title}: a photo series by Muiz`}
        />
      </div>

      <div
        className="gal-stage"
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? i + 1 : i - 1);
          touchX.current = null;
        }}
      >
        <div className="gal-track" style={{ '--i': i } as CSSProperties}>
          {photos.map((p, idx) => (
            <button
              key={p.src}
              type="button"
              className={`gal-slide ${idx === i ? 'active' : ''}`}
              onClick={() => go(idx)}
              aria-label={`Show photo ${idx + 1} of ${total}`}
              aria-current={idx === i}
              tabIndex={idx === i ? -1 : 0}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 900px) 80vw, 40vw"
                quality={90}
                priority={idx === 0}
                loading={idx === 0 ? undefined : 'eager'}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}


