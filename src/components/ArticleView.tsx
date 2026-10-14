import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  Bookmark, 
  Share2, 
  Clock, 
  Calendar, 
  User, 
  Building2, 
  ExternalLink, 
  Check, 
  Sparkles,
  ShieldCheck,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { StartupArticle } from '../types';
import { EditorialVerificationBox } from './EditorialVerificationBox';
import { StoryCard } from './StoryCard';

interface ArticleViewProps {
  article: StartupArticle;
  allArticles: StartupArticle[];
  onBack: () => void;
  onSelectRelated: (slug: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (slug: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  allArticles,
  onBack,
  onSelectRelated,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const relatedArticles = allArticles.filter((item) =>
    article.relatedSlugIds.includes(item.slug)
  );

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#171717] pb-24">
      {/* Reading Progress Indicator */}
      <div 
        className="fixed top-18 left-0 h-1 bg-[#FF7A00] z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Breadcrumb Bar */}
      <div className="border-b border-[#E3DED4] bg-white/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs text-[#737373]">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 font-medium text-[#0B1F3A] hover:text-[#FF7A00] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Stories</span>
          </button>

          <div className="hidden sm:flex items-center gap-2">
            <span>Home</span>
            <ChevronRight className="w-3 h-3 text-[#CCC6B8]" />
            <span>Stories</span>
            <ChevronRight className="w-3 h-3 text-[#CCC6B8]" />
            <span className="text-[#0B1F3A] font-semibold">{article.title.split(':')[0]}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 rounded hover:bg-[#EFECE5] text-[#525252] transition-colors inline-flex items-center gap-1"
              title="Copy Story Link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#138A4B]" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="text-[11px] font-medium">{copied ? 'Link Copied' : 'Share'}</span>
            </button>

            <button
              onClick={() => onToggleBookmark(article.slug)}
              className={`p-1.5 rounded transition-colors inline-flex items-center gap-1 ${
                isBookmarked
                  ? 'text-[#FF7A00] bg-[#FFF4EB]'
                  : 'text-[#525252] hover:bg-[#EFECE5]'
              }`}
              title={isBookmarked ? 'Saved to Reading List' : 'Save Story'}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
              <span className="text-[11px] font-medium">{isBookmarked ? 'Saved' : 'Save'}</span>
            </button>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        
        {/* Section 11: Header Layout */}
        <header className="mb-8">
          {/* Unboxed Category Metadata */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF7A00] mb-3">
            <span>{article.category}</span>
            <span className="text-[#A39D90]">·</span>
            <span className="text-[#138A4B]">{article.fundingStage}</span>
            <span className="text-[#A39D90]">·</span>
            <span className="text-[#525252]">{article.readingTime}</span>
          </div>

          {/* BIG BLOG HEADLINE */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1F3A] tracking-tight leading-[1.12] text-balance">
            {article.title}
          </h1>

          {/* Short Description */}
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#525252] leading-relaxed">
            {article.subtitle}
          </p>

          {/* Author · Published · Updated */}
          <div className="mt-6 pt-5 border-t border-[#E3DED4] flex flex-wrap items-center justify-between gap-4 text-xs text-[#525252]">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full object-cover border border-[#CCC6B8]"
              />
              <div>
                <div className="font-bold text-[#0B1F3A]">{article.author.name}</div>
                <div className="text-[11px] text-[#737373]">{article.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#737373]">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Published {article.publishedDate}
              </span>
              <span>·</span>
              <span className="text-[#138A4B] font-medium">Updated {article.updatedDate}</span>
            </div>
          </div>
        </header>

        {/* Section 12: IMAGE 1 — Real Hero Image with Credit */}
        <figure className="my-8 rounded-lg overflow-hidden border border-[#E3DED4] bg-white shadow-xs">
          <div className="relative aspect-16/9 bg-[#EFECE5]">
            <img
              src={article.heroImage.url}
              alt={article.heroImage.alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="p-3.5 bg-white border-t border-[#EAE5DA] text-xs text-[#737373] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="italic text-[#525252]">{article.heroImage.caption}</span>
            <span className="text-[11px] font-medium text-[#737373] shrink-0">
              Image credit: {article.heroImage.credit}
            </span>
          </figcaption>
        </figure>

        {/* Section 11: QUICK FACTS TABLE */}
        <section className="my-8 bg-white border border-[#E3DED4] rounded-lg p-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE5DA]">
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#0B1F3A] flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#FF7A00]" />
              <span>Company Factsheet & Overview</span>
            </h3>
            <span className="text-xs text-[#138A4B] font-semibold">Verified Corporate Data</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {article.quickFacts.map((fact, idx) => (
              <div key={idx} className="p-3 bg-[#FAF8F5] rounded border border-[#EAE5DA]">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                  {fact.label}
                </div>
                <div className="mt-1 font-heading font-bold text-sm text-[#0B1F3A]">
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 13: Mandatory Trust & Verification Box */}
        <EditorialVerificationBox
          editorialNote={article.editorialNote}
          primarySources={article.primarySources}
          independentSources={article.independentSources}
          updatedDate={article.updatedDate}
        />

        {/* Overview Lead Paragraph */}
        <div className="my-8 text-base sm:text-lg text-[#171717] leading-relaxed font-serif first-letter:text-5xl first-letter:font-heading first-letter:font-extrabold first-letter:text-[#0B1F3A] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
          {article.overview}
        </div>

        {/* IMAGE 2: Founder Portrait with Authorized Credit */}
        <figure className="my-10 rounded-lg overflow-hidden border border-[#E3DED4] bg-white shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center bg-[#FAF8F5]">
            <div className="md:col-span-5 relative aspect-3/4 max-h-[380px] bg-[#EFECE5] overflow-hidden">
              <img
                src={article.founderImage.url}
                alt={article.founderImage.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-center">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] mb-1">
                Founder Spotlight
              </div>
              <h4 className="font-heading font-extrabold text-xl text-[#0B1F3A]">
                {article.founders.join(' & ')}
              </h4>
              <p className="mt-2.5 text-xs sm:text-sm text-[#525252] leading-relaxed">
                {article.founderImage.caption}
              </p>
              <div className="mt-4 pt-3 border-t border-[#EAE5DA] text-[11px] text-[#737373]">
                Image credit: {article.founderImage.credit}
              </div>
            </div>
          </div>
        </figure>

        {/* Main Article Content Sections */}
        <div className="my-10 space-y-10">
          {article.sections.map((section, idx) => (
            <section key={idx} className="pt-2">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0B1F3A] tracking-tight pb-3 border-b border-[#E3DED4]">
                {section.heading}
              </h2>

              <div className="mt-4 space-y-4 text-base sm:text-[17px] text-[#262626] leading-relaxed">
                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}

                {section.subpoints && (
                  <ul className="my-5 space-y-2.5 bg-white p-5 rounded-lg border border-[#E3DED4]">
                    {section.subpoints.map((point, ptIdx) => (
                      <li key={ptIdx} className="text-sm text-[#404040] flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] shrink-0 mt-2" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* IMAGE 3: Product / Tech / Platform Image */}
        <figure className="my-10 rounded-lg overflow-hidden border border-[#E3DED4] bg-white shadow-xs">
          <div className="relative aspect-16/9 bg-[#EFECE5]">
            <img
              src={article.productImage.url}
              alt={article.productImage.alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="p-3.5 bg-white border-t border-[#EAE5DA] text-xs text-[#737373] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="italic text-[#525252]">{article.productImage.caption}</span>
            <span className="text-[11px] font-medium text-[#737373] shrink-0">
              Image credit: {article.productImage.credit}
            </span>
          </figcaption>
        </figure>

        {/* KEY LESSONS FOR ENTREPRENEURS & STUDENTS */}
        <section className="my-12 bg-white border border-[#E3DED4] rounded-lg p-6 sm:p-8 shadow-xs">
          <div className="pb-4 mb-6 border-b border-[#EAE5DA]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block mb-1">
              Curriculum Takeaways
            </span>
            <h3 className="font-heading font-extrabold text-2xl text-[#0B1F3A]">
              Key Lessons for Aspiring Founders & MBA Students
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {article.keyLessons.map((lesson) => (
              <div 
                key={lesson.number}
                className="p-5 rounded-lg bg-[#FAF8F5] border border-[#EAE5DA] flex flex-col justify-between"
              >
                <div>
                  <div className="font-heading font-extrabold text-2xl text-[#FF7A00] mb-2 tabular-nums">
                    {lesson.number}
                  </div>
                  <h4 className="font-heading font-bold text-base text-[#0B1F3A] mb-2">
                    {lesson.title}
                  </h4>
                  <p className="text-xs text-[#525252] leading-relaxed">
                    {lesson.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Final Takeaway */}
          <div className="mt-8 p-5 bg-[#0B1F3A] text-white rounded-lg">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF7A00] block mb-1.5">
              Final Editorial Takeaway
            </span>
            <p className="font-heading font-bold text-base sm:text-lg leading-snug">
              {article.finalTakeaway}
            </p>
          </div>
        </section>

        {/* Section 11: Sources & Image Credits Table */}
        <section className="my-10 pt-6 border-t border-[#E3DED4]">
          <h3 className="font-heading font-bold text-base text-[#0B1F3A] mb-4">
            Sources, References & Photography Credits
          </h3>

          <div className="bg-white rounded-lg border border-[#E3DED4] p-5 text-xs space-y-3">
            <div>
              <span className="font-bold text-[#0B1F3A]">Primary Sources: </span>
              <span className="text-[#525252]">
                {article.primarySources.map((s) => s.name).join(', ')}
              </span>
            </div>
            <div>
              <span className="font-bold text-[#0B1F3A]">Independent Reporting: </span>
              <span className="text-[#525252]">
                {article.independentSources.map((s) => s.name).join(', ')}
              </span>
            </div>
            <div>
              <span className="font-bold text-[#0B1F3A]">Photography Credits: </span>
              <span className="text-[#525252]">
                {article.heroImage.credit} · {article.founderImage.credit} · {article.productImage.credit}
              </span>
            </div>
          </div>
        </section>

        {/* Section 11: Related Stories */}
        {relatedArticles.length > 0 && (
          <section className="my-14 pt-8 border-t border-[#E3DED4]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0B1F3A]">
                Related Startup Stories
              </h3>
              <button
                onClick={onBack}
                className="text-xs font-bold text-[#FF7A00] hover:underline"
              >
                View all 10 stories →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <StoryCard
                  key={rel.id}
                  article={rel}
                  onSelect={onSelectRelated}
                  isBookmarked={false}
                  onToggleBookmark={onToggleBookmark}
                  variant="standard"
                />
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
};
