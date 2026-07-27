import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Tags } from "lucide-react";
import { ArticleContent } from "@/components/ArticleContent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { blogArticles, getBlogArticle } from "@/data/blog";
import { profile } from "@/data/profile";
import { extendedSeoKeywords } from "@/data/seo";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    return {
      title: "Kai Cheng Research Blog Article",
      description: "Research blog article by Kai Cheng."
    };
  }

  return {
    title: `${article.titleEn} - Kai Cheng 程凯 Research Blog`,
    description: `${article.abstract} Kai Cheng / 程凯 writes about Control Science and Engineering, Mobile Robot Localization, Multisensor Fusion, Factor Graph Optimization and SLAM.`,
    keywords: [
      ...extendedSeoKeywords,
      ...article.keywords
    ],
    alternates: {
      canonical: `/blog/${article.slug}/`
    },
    openGraph: {
      title: `${article.titleEn} - Kai Cheng 程凯 Research Blog`,
      description: `${article.abstract} Kai Cheng / 程凯 research note on Control Science and Engineering, Mobile Robot Localization, Multisensor Fusion and SLAM.`,
      url: `${profile.siteUrl}/blog/${article.slug}/`,
      siteName: "Kai Cheng Research Homepage",
      locale: "zh_CN",
      type: "article",
      publishedTime: article.date,
      authors: ["Kai Cheng"]
    }
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    alternativeHeadline: article.titleEn,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: "Kai Cheng",
      alternateName: "程凯"
    },
    publisher: {
      "@type": "Person",
      name: "Kai Cheng",
      alternateName: "程凯"
    },
    description: article.abstract,
    keywords: [
      "Factor Graph",
      "SLAM",
      "Robot Localization",
      "Multisensor Fusion",
      ...article.keywords
    ],
    mainEntityOfPage: `${profile.siteUrl}/blog/${article.slug}/`
  };

  return (
    <>
      <Header />
      <main className="bg-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />

        <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,.13),transparent_32rem),radial-gradient(circle_at_82%_20%,rgba(52,211,153,.10),transparent_28rem),linear-gradient(135deg,#08111f,#101827_58%,#07131b)]" />
          <div className="noise-layer absolute inset-0 opacity-70" />
          <div className="relative mx-auto w-full max-w-5xl">
            <a href="/blog/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-cyanline">
              <ArrowLeft size={16} aria-hidden="true" />
              Back to Research Blog
            </a>
            <p className="mb-5 inline-flex rounded-md border border-cyanline/30 bg-cyanline/10 px-3 py-2 text-sm font-semibold text-cyanline">
              Kai Cheng Research Blog
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-normal text-white sm:text-6xl">
              {article.title}
            </h1>
            <p className="mt-5 text-2xl font-semibold leading-9 text-cyanline">
              {article.titleEn}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span className="rounded-md border border-labgreen/30 bg-labgreen/10 px-3 py-2 font-semibold text-labgreen">
                {article.category}
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={16} aria-hidden="true" />
                {article.date}
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-2" aria-label={`${article.titleEn} keywords`}>
              {article.keywords.map((keyword) => (
                <span key={keyword} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[.07] px-3 py-2 text-sm text-slate-200">
                  <Tags size={15} className="text-cyanline" aria-hidden="true" />
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-t border-white/10 bg-ink px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto w-full max-w-5xl">
            <ArticleContent article={article} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
