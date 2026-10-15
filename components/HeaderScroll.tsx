'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SECTIONS = ['work', 'about', 'booking'];

export default function HeaderScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const hero = document.querySelector('.hero');
    const header = document.querySelector('.header');

    const clear = () => {
      root.removeAttribute('data-nav-solid');
      root.removeAttribute('data-section');
    };

    // Pages without a hero already have a solid header and no sections.
    if (!hero || !header) {
      clear();
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;

      const headerHeight = header.getBoundingClientRect().height;

      // Solid black bar once the hero has scrolled out of view.
      if (hero.getBoundingClientRect().bottom <= headerHeight) {
        root.setAttribute('data-nav-solid', 'true');
      } else {
        root.removeAttribute('data-nav-solid');
      }

      // Active section: the one crossing a line 40% down the screen.
      const line = window.innerHeight * 0.4;
      let active = '';

      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= line && rect.bottom > line) active = id;
      }

      if (active) {
        root.setAttribute('data-section', active);
      } else {
        root.removeAttribute('data-section');
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
      clear();
    };
  }, [pathname]);

  return null;
}