import Link from "next/link";
import Image from "next/image";
import type { BlogArticle } from "@/config/blog";

export function RelatedArticles({ articles, title = "Artigos relacionados" }: { articles: BlogArticle[]; title?: string }) {
  if (!articles.length) return null;
  return (
    <section className="section related-articles" aria-labelledby="related-articles-title">
      <div className="container">
        <div className="section-head section-head-row">
          <h2 id="related-articles-title">{title}</h2>
          <Link className="text-link" href="/blog/">Ver todos os artigos</Link>
        </div>
        <div className="latest-grid">
          {articles.map((a) => (
            <Link className="post-card" href={a.slug} key={a.slug}>
              <Image src={a.image} alt="" width={640} height={360} sizes="(max-width: 700px) 100vw, 33vw" />
              <strong>{a.title}</strong>
              <span>{a.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
