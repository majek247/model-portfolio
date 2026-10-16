'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import ArticleShare from './ArticleShare';
import InstagramBanner from './InstagramBanner';

type TocItem = { id: string; label: string };

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'section';

export default function PostLayout({
  title,
  excerpt,
  date,
  heroImage = '/images/chess1.png',
  readTime,
  children,
}: {
  title: string;
  excerpt: string;
  date: string;
  heroImage?: string;
  readTime?: number;
  children: ReactNode;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [toc, setToc] = useState<TocItem[]>([]);
  const [active, setActive] = useState('');
  const [minutes, setMinutes] = useState<number | null>(readTime ?? null);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;

    // TOC: every h2 in the body. Add data-toc="Short label" to an h2 to shorten its TOC text.
    const heads = Array.from(body.querySelectorAll<HTMLElement>('h2'));
    const used = new Set<string>();
    const items = heads.map((h) => {
      const label = h.dataset.toc || h.textContent || '';
      let id = h.id || slugify(label);
      while (used.has(id)) id += '-2';
      used.add(id);
      h.id = id;
      return { id, label };
    });
    setToc(items);

    if (readTime == null) {
      const words = (body.textContent || '').trim().split(/\s+/).length;
      setMinutes(Math.max(1, Math.round(words / 220)));
    }

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive((e.target as HTMLElement).id)),
      { rootMargin: '-15% 0px -75% 0px' }
    );
    heads.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, [readTime, children]);

  return (
    <main id="main" className="post-page">
      <header className="post-hero">
        <Image src={heroImage} alt="" fill priority sizes="100vw" className="post-hero-img" />
        <div className="post-wrap">
        <div className="post-hero-inner">
          <Link href="/journal" className="post-eyebrow">Journal</Link>
          <p className="post-meta">
            <time dateTime={date}>{date}</time>
            {minutes ? <> &nbsp;•&nbsp; {minutes} min read</> : null}
          </p>
          <h1>{title}</h1>
          <p className="post-excerpt">{excerpt}</p>
        </div>
        </div>
      </header>

      <div className="post-layout post-wrap">
        <aside className="post-side">
          <div className="post-side-inner">
            <p className="post-side-label">On this page</p>
            <ol className="post-toc">
              {toc.map((t, i) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className={active === t.id ? 'is-active' : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      const el =
                        document.getElementById(t.id) ??
                        bodyRef.current?.querySelectorAll<HTMLElement>('h2')[i];
                      if (!el) return;
                      const top = el.getBoundingClientRect().top + window.scrollY - 110;
                      window.scrollTo({ top, behavior: 'smooth' });
                      history.replaceState(null, '', `#${t.id}`);
                      setActive(t.id);
                    }}
                  >
                    {i + 1}. {t.label}
                  </a>
                </li>
              ))}
            </ol>
            <ArticleShare title={title} />
          </div>
        </aside>

        <div className="post-content">
          <div ref={bodyRef} className="post-body prose">{children}</div>
          <InstagramBanner />
        </div>
      </div>
    </main>
  );
}
