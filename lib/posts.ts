import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
};

const directory = path.join(process.cwd(), 'content/posts');

export function getPosts(): Post[] {
  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(directory, file);
      const source = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(source);

      return {
        slug: file.replace(/\.md$/, ''),
        title: String(data.title || ''),
        date: String(data.date || ''),
        excerpt: String(data.excerpt || ''),
        body: content,
        draft: data.draft === true,
      };
    })
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(slug: string) {
  const post = getPosts().find((post) => post.slug === slug);

  if (!post) {
    return null;
  }

  const rendered = await remark()
    .use(html, { sanitize: true })
    .process(post.body);

  return {
    ...post,
    html: rendered.toString(),
  };
}