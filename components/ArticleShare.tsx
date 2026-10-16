'use client';

import { useEffect, useState } from 'react';

export default function ArticleShare({ title }: { title: string }) {
  const [url, setUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => setUrl(window.location.href), []);

  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const icon = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  return (
    <div className="post-share">
      <p className="post-side-label">Share this article</p>
      <div className="post-share-row">
        <button type="button" onClick={copy} aria-label="Copy link" title={copied ? 'Copied!' : 'Copy link'}>
          <svg {...icon}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
        </button>
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${u}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
          <svg {...icon}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
        </a>
        <a href={`https://twitter.com/intent/tweet?url=${u}&text=${t}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
        </a>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${u}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
          <svg {...icon}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
        </a>
      </div>
      {copied && <p className="post-copied">Link copied</p>}
    </div>
  );
}
