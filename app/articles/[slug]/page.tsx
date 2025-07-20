import { notFound } from "next/navigation";
import GeometricBackground from "@/components/geometric-background";
import Navigation from "@/components/navigation";
import { getArticleBySlug, getAllArticleSlugs } from "@/lib/mdx";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Article({ params }: PageProps) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <GeometricBackground />
      <main className="relative min-h-screen text-neutral-900 dark:text-white">
        <article className="first-section-container">
          <div className="w-full max-w-3xl">
            <div className="space-y-8">
              {/* Breadcrumb */}
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/articles">Articles</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <span className="text-neutral-900 dark:text-neutral-50">{article.title}</span>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              {/* Article Header */}
              <header className="space-y-4">
                <div className="space-y-6">
                  <h1 className="heading-primary">{article.title}</h1>
                  <time className="date-text" dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className="w-24 h-px bg-neutral-300 dark:bg-neutral-700"></div>
              </header>

              {/* Article Content */}
              {article.content ? (
                <div className="max-w-none">
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => (
                        <h1 className="heading-primary mb-6">{children}</h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="heading-secondary mb-4 mt-8">{children}</h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-xl font-semibold mb-3 mt-6 text-neutral-900 dark:text-neutral-50">{children}</h3>
                      ),
                      p: ({ children }) => (
                        <p className="text-muted leading-relaxed mb-4">{children}</p>
                      ),
                      a: ({ children, href }) => (
                        <a 
                          href={href}
                          className="text-neutral-900 dark:text-neutral-100 underline decoration-neutral-400 hover:decoration-neutral-600 transition-colors"
                          target={href?.startsWith('http') ? '_blank' : undefined}
                          rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {children}
                        </a>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
                      ),
                      li: ({ children }) => (
                        <li className="text-muted">{children}</li>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-700 pl-4 my-6 italic text-muted">
                          {children}
                        </blockquote>
                      ),
                      code: ({ children }) => (
                        <code className="bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded text-sm font-mono">
                          {children}
                        </code>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-semibold text-neutral-900 dark:text-neutral-100">{children}</strong>
                      ),
                      img: ({ src, alt }) => (
                        <figure className="my-8">
                          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                            <Image
                              src={src || ""}
                              alt={alt || ""}
                              fill
                              className="object-cover object-top"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                          {alt && (
                            <figcaption className="text-sm text-muted text-center mt-2 italic">
                              {alt}
                            </figcaption>
                          )}
                        </figure>
                      ),
                    }}
                  >
                    {article.content}
                  </ReactMarkdown>
                </div>
              ) : (
                <p>Content not available</p>
              )}

              {/* Back to Articles */}
              <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
                <Link
                  href="/articles"
                  className="inline-flex items-center text-sm text-muted hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors font-mono uppercase"
                >
                  ← Back to Articles
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

// Generate static params for all articles
export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each article
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.summary,
  };
}