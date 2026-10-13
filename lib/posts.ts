import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import {remark} from 'remark';
import html from 'remark-html';
export type Post={slug:string;title:string;date:string;excerpt:string;body:string};
const directory=path.join(process.cwd(),'content/posts');
export function getPosts():Post[]{return fs.readdirSync(directory).filter(file=>file.endsWith('.md')).map(file=>{const {data,content}=matter(fs.readFileSync(path.join(directory,file),'utf8'));return {...data,slug:file.replace(/\.md$/,''),title:String(data.title||''),date:String(data.date||''),excerpt:String(data.excerpt||''),body:content,draft:data.draft===true}}).filter(post=>!post.draft).sort((a,b)=>b.date.localeCompare(a.date))}
export async function getPost(slug:string){const post=getPosts().find(p=>p.slug===slug);if(!post)return null;const rendered=await remark().use(html,{sanitize:true}).process(post.body);return {...post,html:rendered.toString()}}
