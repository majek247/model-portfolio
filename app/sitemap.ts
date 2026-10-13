import type {MetadataRoute} from 'next';
import {siteUrl} from '@/lib/site';
import {series} from '@/lib/portfolio';
import {getPosts} from '@/lib/posts';
export default function sitemap():MetadataRoute.Sitemap{if(!siteUrl)return [];return ['','/journal',...series.map(s=>`/work/${s.slug}`),...getPosts().map(p=>`/journal/${p.slug}`)].map(route=>({url:`${siteUrl}${route}`}))}
