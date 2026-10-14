import { notFound } from 'next/navigation';
import Link from 'next/link';
import Photo from '@/components/Photo';
import { series } from '@/lib/portfolio';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return series.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = series.find((s) => s.slug === slug);

  return {
    title: item?.title ?? 'Series not found',
    description: item?.description,
  };
}

export default async function SeriesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = series.find((s) => s.slug === slug);

  if (!item) notFound();

    if (item.collections) {
    return (
      <main id="main" className="shell inner">
        <Link href="/#work" className="text-link">
          ← All selected work
        </Link>

        <header className="page-heading">
          <p className="eyebrow">Selected stories</p>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </header>

        <div className="collection-grid">
          {item.collections.map((c) => (
            <Link
              key={c.slug}
              href={`/work/${item.slug}/${c.slug}`}
              className="collection-card"
            >
              <div className="collection-card-photo">
                <Photo photo={c.cover} />
              </div>
              <h2>{c.title}</h2>
              <p>{c.description}</p>
              <span>View {c.images.length} images ↗</span>
            </Link>
          ))}
        </div>
      </main>
    );
  }

  const next = series[(series.indexOf(item) + 1) % series.length];

  return (
    <main
      id="main"
      className="shell inner"
    >
      <Link
        href="/#work"
        className="text-link"
      >
        ← All selected work
      </Link>

      <header className="page-heading">
<p className="eyebrow">Selected stories</p>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
      </header>

      <div
        className={`series-gallery ${item.images.length === 1 ? 'single' : ''}`}
      >
        {item.images.map((photo, i) => (
          <div
            className="series-photo"
            key={i}
          >
            <Photo
              photo={photo}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <div className="series-end">
        <Link href={`/work/${next.slug}`}>
          Next story: {next.title} ↗
        </Link>
        <Link href="/#booking">
          Enquire about a shoot →
        </Link>
      </div>
    </main>
  );
}