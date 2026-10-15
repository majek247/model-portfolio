'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  image: string;
  text: string;
};

export default function ShareButton({ image, text }: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  async function onShare() {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch && typeof navigator.share === 'function') {
      try {
        await navigator.share({ title: text, text, url: window.location.href });
      } catch {
        /* user closed the share sheet */
      }
      return;
    }
    setOpen((o) => !o);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setOpen(false);
      }, 1400);
    } catch {
      /* clipboard blocked */
    }
  }

  function go(kind: 'whatsapp' | 'pinterest' | 'x') {
    const url = encodeURIComponent(window.location.href);
    const msg = encodeURIComponent(text);
    const media = encodeURIComponent(window.location.origin + image);
    const href = {
      whatsapp: `https://wa.me/?text=${msg}%20${url}`,
      pinterest: `https://pinterest.com/pin/create/button/?url=${url}&media=${media}&description=${msg}`,
      x: `https://twitter.com/intent/tweet?text=${msg}&url=${url}`,
    }[kind];
    window.open(href, '_blank', 'noopener,noreferrer');
    setOpen(false);
  }

  return (
    <div className="share" ref={ref}>
      <button
        type="button"
        className="story-arrow"
        onClick={onShare}
        aria-label="Share"
        aria-expanded={open}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 15V3" />
          <path d="M7 8l5-5 5 5" />
          <path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
        </svg>
      </button>

      {open && (
        <div className="share-menu" role="menu">
          <button type="button" role="menuitem" onClick={copy}>
            {copied ? 'Link copied ✓' : 'Copy link'}
          </button>
          <button type="button" role="menuitem" onClick={() => go('whatsapp')}>
            WhatsApp
          </button>
          <button type="button" role="menuitem" onClick={() => go('pinterest')}>
            Pinterest
          </button>
          <button type="button" role="menuitem" onClick={() => go('x')}>
            X
          </button>
        </div>
      )}
    </div>
  );
}