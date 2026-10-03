import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { GUIDES, GuideArticle } from "@/lib/content/guidesData";
import { getSiteUrl } from "@/lib/config/site";
import { ArrowLeft, Clock, Calendar, User, ShieldAlert, Sparkles, HelpCircle, ArrowRight } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

const DEDICATED_GUIDE_SLUGS = [
  "intermittent-fasting-for-beginners",
  "how-to-choose-a-fasting-window",
  "what-breaks-a-fast",
  "what-can-you-drink-while-fasting",
  "exercise-while-fasting",
  "how-does-intermittent-fasting-work",
  "16-8-intermittent-fasting-guide",
  "14-10-intermittent-fasting-guide",
  "18-6-intermittent-fasting-guide",
];

export function generateStaticParams() {
  return GUIDES.filter((g) => !DEDICATED_GUIDE_SLUGS.includes(g.slug)).map((g) => ({
    slug: g.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (DEDICATED_GUIDE_SLUGS.includes(params.slug)) {
    return { title: "Guide Not Found" };
  }
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

function renderParagraphWithLinks(text: string) {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const elements = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      elements.push(text.substring(lastIndex, match.index));
    }
    const [_, label, href] = match;
    elements.push(
      <Link
        key={`${match.index}-${href}`}
        href={href}
        className="text-primary font-medium hover:text-primary-container underline underline-offset-2 transition-colors"
      >
        {label}
      </Link>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return elements.length > 0 ? elements : text;
}

export default function GuideDetailPage({ params }: Props) {
  if (DEDICATED_GUIDE_SLUGS.includes(params.slug)) {
    notFound();
  }
  const guide = GUIDES.find((g) => g.slug === params.slug);
  if (!guide) {
    notFound();
  }

  const siteUrl = getSiteUrl();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.shortDescription,
    author: {
      "@type": "Person",
      name: guide.author,
    },
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    publisher: {
      "@type": "Organization",
      name: "FastTrack",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/guides/${guide.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guides",
        item: `${siteUrl}/guides`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item: `${siteUrl}/guides/${guide.slug}`,
      },
    ],
  };

  const faqJsonLd =
    guide.content.faqs && guide.content.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: guide.content.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <article className="max-w-4xl mx-auto px-4 md:px-8 py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

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
        {renderParagraphWithLinks(guide.content.leadParagraph)}
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
                {renderParagraphWithLinks(p)}
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

      {/* Optional Table */}
      {guide.content.table && (
        <div className="mt-10 overflow-x-auto rounded-xl border border-surface-container bg-surface-container-lowest shadow-sm">
          {guide.content.table.caption && (
            <div className="p-4 bg-surface-container-low border-b border-surface-container font-headline text-sm font-bold text-on-surface">
              {guide.content.table.caption}
            </div>
          )}
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-surface-container font-headline text-xs font-bold uppercase tracking-wider text-on-surface">
                {guide.content.table.headers.map((h, hIdx) => (
                  <th key={hIdx} className="py-3 px-4">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container font-body-sm text-on-surface-variant">
              {guide.content.table.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-surface-container-low/40 transition-colors">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="py-3 px-4">
                      {renderParagraphWithLinks(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Frequently Asked Questions */}
      {guide.content.faqs && guide.content.faqs.length > 0 && (
        <section className="mt-12 pt-8 border-t border-surface-container">
          <h2 className="font-headline text-2xl font-bold text-primary tracking-tight mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {guide.content.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm"
              >
                <h3 className="font-headline text-base font-bold text-on-surface mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                  {renderParagraphWithLinks(faq.answer)}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

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

      {/* Related Protocols Grid */}
      {guide.content.relatedProtocols && guide.content.relatedProtocols.length > 0 && (
        <section className="mt-12 pt-8 border-t border-surface-container">
          <h3 className="font-headline text-xl font-bold text-on-surface mb-4">
            Compatible Fasting Protocols
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {guide.content.relatedProtocols.map((rp) => (
              <Link
                key={rp.id}
                href={`/fasting-methods/${rp.id}`}
                className="p-4 rounded-xl bg-surface-container-low border border-surface-container hover:border-surface-container-high transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="font-headline text-base font-bold text-on-surface group-hover:text-primary transition-colors block">
                    {rp.name}
                  </span>
                  <p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                    {rp.relation}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-3">
                  <span>View Protocol &amp; Calculator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>
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
