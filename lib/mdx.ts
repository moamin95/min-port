import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Article {
  id: string;
  title: string;
  summary: string;
  date: string;
  slug: string;
  content?: string;
}

const contentDirectory = path.join(process.cwd(), 'content/articles');

export interface MDXArticle extends Omit<Article, 'content'> {
  content: string;
  rawContent: string;
}

export function getAllArticleSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(contentDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

export function getArticleBySlug(slug: string): MDXArticle | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      id: data.id || slug,
      title: data.title,
      summary: data.summary,
      date: data.date,
      slug: data.slug || slug,
      content: content,
      rawContent: content,
    };
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}

export function getAllArticles(): Omit<MDXArticle, 'content' | 'rawContent'>[] {
  const slugs = getAllArticleSlugs();
  
  const articles = slugs
    .map((slug) => {
      const article = getArticleBySlug(slug);
      if (!article) return null;
      
      // Return article without content for listing pages
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { content, rawContent, ...articleMeta } = article;
      return articleMeta;
    })
    .filter((article): article is Omit<MDXArticle, 'content' | 'rawContent'> => article !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return articles;
}

export function articleExists(slug: string): boolean {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);
  return fs.existsSync(fullPath);
}