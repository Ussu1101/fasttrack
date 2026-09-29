import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { GUIDES, GuideArticle } from "@/lib/content/guidesData";
import { ArrowLeft, Clock, Calendar, User, ShieldAlert, Sparkles } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return GUIDES.map((g) => ({
    slug: g.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const guide = GUIDES.find((g) => g.slug === params.slug);
  if (!guide) {
    return { title: "Guide Not Found" };
  }

  return {
    title: guide.title,
    description: guide.shortDescription,
    alternates: {
      canonical: `/guides/${guide.slug}`,
    },
    openGraph: {
      title: `${guide.title} | FastTrack`,
      description: guide.shortDescription,
      type: "article",
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
      authors: [guide.author],
    },
  };
}

export default function GuideDetailPage({ params }: Props) {
  const guide = GUIDES.find((g) => g.slug === params.slug);
  if (!guide) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": guide.title,
    "description": guide.shortDescription,
    "author": {
      "@type": "Organization",
      "name": guide.author,
    },
    "datePublished": guide.publishedAt,
    "dateModified": guide.updatedAt,
    "publisher": {
      "@type": "Organization",
      "name": "FastTrack",
      "url": "https://fasttrackfasting.com",
    },
  };

  return (
    <article className="max-w-4xl mx-auto px-4 md:px-8 py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Back Link */}
      <div className="mb-6">
        <Link
          href="/guides"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-container transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Guides</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-8 pb-8 border-b border-surface-container">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-xs font-semibold">
            {guide.category}
          </span>
          <span className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{guide.readTime}</span>
          </span>
        </div>

        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight">
          {guide.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 mt-4 text-xs sm:text-sm text-on-surface-variant">
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-primary" />
            <span>{guide.author}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-secondary" />
            <span>Updated {guide.updatedAt}</span>
          </span>
        </div>
      </header>

      {/* Lead Paragraph */}
      <p className="font-body-lg text-base sm:text-xl text-on-surface font-medium leading-relaxed mb-8 p-4 sm:p-6 bg-surface-container-low/60 rounded-xl border border-surface-container">
        {guide.content.leadParagraph}
      </p>

      {/* Article Body Sections */}
      <div className="space-y-8 text-on-surface font-body-md text-base sm:text-lg leading-relaxed">
        {guide.content.sections.map((section, idx) => (
          <section key={idx} className="space-y-3">
            <h2 className="font-headline text-xl sm:text-2xl font-bold text-primary tracking-tight">
              {section.heading}
            </h2>

            {section.body.map((p, pIdx) => (
              <p key={pIdx} className="text-on-surface-variant leading-relaxed">
                {p}
              </p>
            ))}

            {section.keyTakeaway && (
              <div className="mt-3 p-3.5 sm:p-4 rounded-xl bg-surface-container border border-surface-container-high flex items-start gap-2.5 text-xs sm:text-sm">
                <Sparkles className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-on-surface">Key Rule: </span>
                  <span className="text-on-surface-variant">{section.keyTakeaway}</span>
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Clinical Safety Callout */}
      {guide.content.clinicalNotice && (
        <div className="mt-10 p-4 sm:p-5 rounded-xl bg-surface-container-low border border-surface-container flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            <strong className="text-on-surface">Medical Guidance: </strong>
            {guide.content.clinicalNotice}
          </p>
        </div>
      )}

      {/* Footer Navigation CTA */}
      <div className="mt-12 pt-8 border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/#calculator"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-on-primary font-semibold text-sm rounded-lg hover:bg-primary-container transition-all shadow-md"
        >
          Calculate Your Schedule Now
        </Link>
        <Link
          href="/guides"
          className="text-sm font-semibold text-on-surface-variant hover:text-on-surface transition-colors"
        >
          Browse All Guides →
        </Link>
      </div>
    </article>
  );
}
