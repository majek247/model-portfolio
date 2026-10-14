import { notFound } from 'next/navigation';
import Link from 'next/link';
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
  return {
    title: item ? `${item.title} · ${parent?.title}` : 'Not found',
    description: item?.description,
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
  const next = list[(list.indexOf(item) + 1) % list.length];

  return (
    <main id="main" className="shell inner">
      <Link href={`/work/${parent.slug}`} className="text-link">
        ← {parent.title}
      </Link>

      <header className="page-heading">
        <p className="eyebrow">{parent.title}</p>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
      </header>

      <div className={`series-gallery ${item.images.length === 1 ? 'single' : ''}`}>
        {item.images.map((photo, i) => (
          <div className="series-photo" key={i}>
            <Photo photo={photo} priority={i === 0} />
          </div>
        ))}
      </div>

      <div className="series-end">
        {next !== item && (
          <Link href={`/work/${parent.slug}/${next.slug}`}>
            Next concept: {next.title} ↗
          </Link>
        )}
        <Link href="/#booking">Enquire about a shoot →</Link>
      </div>
    </main>
  );
}