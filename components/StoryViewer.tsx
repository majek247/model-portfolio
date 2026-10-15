'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Photo } from '@/lib/portfolio';
import ShareButton from '@/components/ShareButton';

type Props = {
  photos: Photo[];
  shareTitle: string;
  nextHref?: string;
};

const pad = (n: number) => String(n).padStart(2, '0');

export default function StoryViewer({ photos, shareTitle, nextHref }: Props) {
  const [i, setI] = useState(0);
  const total = photos.length;
  const current = photos[i];
  const isLast = i === total - 1;

  return (
    <section className="story">
      <div className="story-progress" aria-hidden="true">
        <span>{pad(i + 1)}</span>
        <div className="story-progress-track">
          <div
            className="story-progress-fill"
            style={{ height: `${((i + 1) / total) * 100}%` }}
          />
        </div>
        <span>{pad(total)}</span>
      </div>

      <div className="story-thumbs">
        {photos.map((p, idx) => (
          <button
            key={p.src}
            type="button"
            className={`story-thumb ${idx === i ? 'active' : ''}`}
            onClick={() => setI(idx)}
            aria-label={`Show image ${idx + 1} of ${total}`}
            aria-current={idx === i}
          >
            <Image src={p.src} alt="" fill sizes="110px" quality={60} />
          </button>
        ))}
      </div>

      <div className="story-main">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          sizes="(max-width: 900px) 100vw, 60vw"
          quality={90}
          priority
        />
      </div>

      <div className="story-info">
        <div className="story-slide-text" key={i}>
          {current.title && <h2>{current.title}</h2>}
          {current.caption && <p className="story-text">{current.caption}</p>}
        </div>

        <div className="story-controls">
          <button
            type="button"
            className="story-arrow"
            onClick={() => setI(i - 1)}
            disabled={i === 0}
            aria-label="Previous image"
          >
            ←
          </button>
          <span className="story-count">
            {pad(i + 1)} / {pad(total)}
          </span>
          {isLast && nextHref ? (
            <Link href={nextHref} className="story-arrow" aria-label="Next character">
              →
            </Link>
          ) : (
            <button
              type="button"
              className="story-arrow"
              onClick={() => setI(i + 1)}
              disabled={isLast}
              aria-label="Next image"
            >
              →
            </button>
          )}
          <ShareButton
            image={current.src}
            text={`${shareTitle}: a character story by Muiz`}
          />
        </div>
      </div>
    </section>
  );
}