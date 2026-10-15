'use client';

import { useState } from 'react';

type Props = {
  image: string;
  text: string;
};

const icon = {
  width: 17,
  height: 17,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export default function SocialShare({ image, text }: Props) {
  const [note, setNote] = useState('');

  function flash(msg: string) {
    setNote(msg);
    setTimeout(() => setNote(''), 2400);
  }

  async function copy(msg: string) {
    try {
      await navigator.clipboard.writeText(window.location.href);
      flash(msg);
    } catch {
      flash('Copy the link from the address bar');
    }
  }

  async function instagram() {
    if (typeof navigator.share === 'function') {
      try {
        await navigator.share({ title: text, text, url: window.location.href });
      } catch {
        /* share sheet closed */
      }
      return;
    }
    copy('Link copied. Paste it in Instagram.');
  }

  function open(kind: 'whatsapp' | 'pinterest' | 'x') {
    const url = encodeURIComponent(window.location.href);
    const msg = encodeURIComponent(text);
    const media = encodeURIComponent(window.location.origin + image);
    const href = {
      whatsapp: `https://wa.me/?text=${msg}%20${url}`,
      pinterest: `https://pinterest.com/pin/create/button/?url=${url}&media=${media}&description=${msg}`,
      x: `https://twitter.com/intent/tweet?text=${msg}&url=${url}`,
    }[kind];
    window.open(href, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="gal-share">
      <span className="gal-share-label">Share</span>

      <button type="button" className="gal-share-btn" onClick={instagram} aria-label="Share on Instagram">
        <svg {...icon}>
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3" />
          <path d="M16.5 7.5v.01" />
        </svg>
      </button>

      <button type="button" className="gal-share-btn" onClick={() => open('whatsapp')} aria-label="Share on WhatsApp">
        <svg {...icon}>
          <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
          <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
        </svg>
      </button>

      <button type="button" className="gal-share-btn" onClick={() => open('pinterest')} aria-label="Share on Pinterest">
        <svg {...icon}>
          <path d="M8 20l4 -9" />
          <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
        </svg>
      </button>

      <button type="button" className="gal-share-btn" onClick={() => open('x')} aria-label="Share on X">
        <svg {...icon}>
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      </button>

      <button type="button" className="gal-share-btn" onClick={() => copy('Link copied')} aria-label="Copy link">
        <svg {...icon}>
          <path d="M9 15l6 -6" />
          <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
          <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
        </svg>
      </button>

      <span className="gal-share-note" aria-live="polite">{note}</span>
    </div>
  );
}