import {notFound} from 'next/navigation';
import Link from 'next/link';
import {getPosts,getPost} from '@/lib/posts';
export function generateStaticParams(){return getPosts().map(({slug})=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const post=await getPost(slug);return {title:post?.title??'Post not found',description:post?.excerpt}}
export default async function PostPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const post=await getPost(slug);if(!post)notFound();return <main id="main" className="shell inner"><article className="article"><Link href="/journal" className="text-link">← Journal</Link><header className="page-heading"><time className="eyebrow" dateTime={post.date}>{post.date}</time><h1>{post.title}</h1><p>{post.excerpt}</p></header><div className="prose" dangerouslySetInnerHTML={{__html:post.html}}/></article></main>}
