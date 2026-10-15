import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import './globals.css';

import Header from '@/components/Header';
import HeaderScroll from '@/components/HeaderScroll';
import Footer from '@/components/Footer';
import { site, siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: '%s | MUIZ',
  },
  description: site.description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: site.title,
    description: site.description,
    type: 'website',
    images: [
      {
        url: '/images/cat-portrait.png',
        width: 1122,
        height: 1402,
        alt: 'Muiz with a black cat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <HeaderScroll />
        {children}
        <Footer />
      </body>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}