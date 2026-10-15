import { notFound } from 'next/navigation';
import Link from 'next/link';
import StoryViewer from '@/components/StoryViewer';
import GalleryViewer from '@/components/GalleryViewer';
import Photo from '@/components/Photo';
import { series } from '@/lib/portfolio';

export function generateStaticParams() {
  return series.flatMap((s) =>
    (s.collections ?? []).map((c) => ({ slug: s.slug, collection: c.slug })),
  );
}

async function find(params: Promise<{ slug: string; collection: string }>) {
  const { slug, collection } = await params;
  const parent = series.find((s) => s.slug === slug);
  const item = parent?.collections?.find((c) => c.slug === collection);
  return { parent, item };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; collection: string }>;
}) {
  const { parent, item } = await find(params);
  if (!item) return { title: 'Not found' };

  const title = item.seoTitle ?? `${item.title} · ${parent?.title}`;
  const description = item.seoDescription ?? item.description;

  return {
    title: { absolute: title },
    description,
    openGraph: {
      title,
      description,
      images: [{ url: item.cover.src, alt: item.cover.alt }],
    },
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string; collection: string }>;
}) {
  const { parent, item } = await find(params);
  if (!parent || !item) notFound();

  const list = parent.collections!;
  const index = list.indexOf(item);
  const next = list[(index + 1) % list.length];

  return (
    <main id="main" className="shell inner">
      <Link href={`/work/${parent.slug}`} className="text-link">
        ← {parent.title}
      </Link>






      {item.layout === 'gallery' ? (
        <>
          <GalleryViewer
            photos={item.images}
            eyebrow={parent.title}
            title={item.title}
            description={item.description}
          />
        </>
      ) : (
        <>
          <header className="page-heading compact">
            <p className="eyebrow">Character {String(index + 1).padStart(2, '0')}</p>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </header>

          <StoryViewer
            photos={item.images}
            shareTitle={item.title}
            nextHref={next !== item ? `/work/${parent.slug}/${next.slug}` : undefined}
          />
        </>
      )}

      <div className="series-end">
        <Link href={`/work/${parent.slug}`}>← {parent.title}</Link>
        <Link href="/#booking">Enquire about a shoot →</Link>
      </div>
    </main>
  );
}