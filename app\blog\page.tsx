import type { Metadata } from "next";
import { ArrowLeft, BookOpen, Link2, Tags } from "lucide-react";
import { BlogCard } from "@/components/BlogCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionShell } from "@/components/SectionShell";
import { blogArticles, blogCategories, blogKeywords } from "@/data/blog";
import { profile } from "@/data/profile";
import { extendedSeoKeywords, siteDescription } from "@/data/seo";

export const metadata: Metadata = {
  title:
    "Kai Cheng 程凯 Research Blog - Control Science and Engineering, Mobile Robot Localization, Multisensor Fusion, Factor Graph Optimization and SLAM",
  description:
    "Research blog of Kai Cheng / 程凯 covering Control Science and Engineering, Mobile Robot Localization, Multisensor Fusion, Factor Graph Optimization, SLAM, LiDAR and IMU.",
  keywords: [
    "Kai Cheng Research Blog",
    "Computer Vision",
    ...extendedSeoKeywords
  ],
  alternates: {
    canonical: "/blog/"
  },
  openGraph: {
    title:
      "Kai Cheng 程凯 Research Blog - Control Science and Engineering, Mobile Robot Localization, Multisensor Fusion, Factor Graph Optimization and SLAM",
    description: siteDescription,
    url: `${profile.siteUrl}/blog/`,
    siteName: "Kai Cheng Research Homepage",
    locale: "zh_CN",
    type: "website"
  }
};

export default function BlogPage() {
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Kai Cheng Research Blog",
    url: `${profile.siteUrl}/blog/`,
    description:
      "Research blog of Kai Cheng covering factor graph optimization, SLAM, multisensor fusion, LiDAR, IMU and robot localization.",
    author: {
      "@type": "Person",
      name: "Kai Cheng",
      alternateName: "程凯"
    },
    keywords: blogKeywords
  };

  return (
    <>
      <Header />
      <main className="bg-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
        />

        <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,.13),transparent_32rem),radial-gradient(circle_at_82%_20%,rgba(52,211,153,.10),transparent_28rem),linear-gradient(135deg,#08111f,#101827_58%,#07131b)]" />
          <div className="noise-layer absolute inset-0 opacity-70" />
          <div className="relative mx-auto w-full max-w-7xl">
            <a href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-cyanline">
              <ArrowLeft size={16} aria-hidden="true" />
              Back to Homepage
            </a>
            <p className="mb-5 inline-flex rounded-md border border-cyanline/30 bg-cyanline/10 px-3 py-2 text-sm font-semibold text-cyanline">
              Kai Cheng Research Blog
            </p>
            <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
              <div>
                <h1 className="text-balance text-5xl font-semibold tracking-normal text-white sm:text-7xl">
                  Research Blog
                </h1>
                <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
                  Technical notes and research insights on robotics, multisensor fusion, SLAM and intelligent localization.
                </p>
                <p className="mt-4 max-w-4xl text-base leading-7 text-slate-400">
                  A research knowledge base by Kai Cheng / 程凯 for Control Science and Engineering topics including Factor Graph Optimization, Robot Localization, Multisensor Fusion, LiDAR, IMU, Computer Vision, and GTSAM.
                </p>
              </div>

              <article className="rounded-md border border-white/10 bg-slate-950/32 p-6 shadow-panel">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-cyanline/30 bg-cyanline/10 text-cyanline">
                  <BookOpen size={22} aria-hidden="true" />
                </div>
                <p className="text-sm font-bold uppercase tracking-[.16em] text-slate-500">
                  Knowledge Base
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Robotics localization notes
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Long-term technical writing connected with publications, projects, and research methods.
                </p>
              </article>
            </div>

            <div className="mt-8 flex flex-wrap gap-2" aria-label="Blog page keywords">
              {blogKeywords.map((keyword) => (
                <span key={keyword} className="rounded-md border border-white/10 bg-white/[.07] px-3 py-2 text-sm text-slate-200">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="featured-research-articles" className="relative overflow-hidden border-t border-white/10 bg-ink px-5 py-20 sm:px-8 lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(34,211,238,.08),transparent_30rem)]" />
          <div className="relative mx-auto w-full max-w-7xl">
            <div className="mb-10 grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[.18em] text-cyanline">
                  Featured Research Articles
                </p>
                <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-5xl">
                  Technical article index
                </h2>
              </div>
              <p className="max-w-3xl text-base leading-8 text-slate-300">
                Initial research notes are organized around factor graph optimization, LIO-SAM, and IMU/LiDAR/Camera multisensor fusion localization.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {blogArticles.map((article, index) => (
                <BlogCard key={article.slug} article={article} index={index} />
              ))}
            </div>
          </div>
        </section>

        <SectionShell
          id="blog-categories"
          eyebrow="Blog Categories"
          title="Research topic categories"
          description="Categories are prepared for future technical notes on robot localization, SLAM, sensor fusion, optimization, and deep learning."
        >
          <div className="flex flex-wrap gap-3">
            {blogCategories.map((category) => (
              <span key={category} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[.045] px-4 py-3 text-sm font-semibold text-slate-200">
                <Tags size={16} className="text-cyanline" aria-hidden="true" />
                {category}
              </span>
            ))}
          </div>
        </SectionShell>

        <section id="research-connection" className="relative overflow-hidden border-t border-white/10 bg-[#07101d] px-5 py-20 sm:px-8 lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(52,211,153,.09),transparent_28rem)]" />
          <div className="relative mx-auto w-full max-w-7xl">
            <div className="mb-10 grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[.18em] text-cyanline">
                  Research Connection
                </p>
                <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-5xl">
                  Research Blog to Publications
                </h2>
              </div>
              <p className="max-w-3xl text-base leading-8 text-slate-300">
                Blog articles explain technical concepts that connect with Kai Cheng&apos;s publications on multisensor fusion localization and graph optimization.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {blogArticles.map((article) => (
                <article key={article.slug} className="rounded-md border border-white/10 bg-slate-950/38 p-6 shadow-panel">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-labgreen/30 bg-labgreen/10 text-labgreen">
                    <Link2 size={20} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{article.category}</h3>
                  <p className="mt-3 text-sm font-semibold text-cyanline">{article.titleEn}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    Associated with multisensor fusion localization papers and graph optimization based robot state estimation.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
