import GeometricBackground from "@/components/geometric-background";
import Navigation from "@/components/navigation";
import { ExternalLink } from "lucide-react";
import { getAllArticles } from "@/lib/mdx";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// const articles = getAllArticles();
const articles: Array<{
  id: string;
  date: string;
  title: string;
  summary: string;
  slug: string;
}> = []


export default function Articles() {
  return (
    <>
      <Navigation />
      <GeometricBackground />
      <main className="relative min-h-screen text-neutral-900 dark:text-white">
        <section className="first-section-container">
          <div className="w-full">
            <div className="space-y-12">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <span className="text-neutral-900 dark:text-neutral-50">Articles</span>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              <div className="content-section">
                <h1 className="heading-primary">Amateur Writing</h1>
                <p className="text-muted">
                  All of my long-form thoughts on pop culture, tech, and more, collected in chronological order.
                </p>
              </div>

              <div>
                <div className="space-y-12">
                  {articles.map((article) => (
                    <div key={article.id} className="content-grid">
                      <div className="md:col-span-1">
                        <span className="date-text">
                          {new Date(article.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex flex-col md:col-span-2 gap-4">
                        <div className="space-y-2">
                          <h3 className="heading-secondary">{article.title}</h3>
                          <p className="text-muted">{article.summary}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <a
                            href={`/articles/${article.slug}`}
                            className="nav-link"
                          >
                            Read Article
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
