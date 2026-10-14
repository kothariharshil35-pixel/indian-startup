import React from 'react';
import { ArrowUpRight, Bookmark, Clock } from 'lucide-react';
import { StartupArticle } from '../types';

interface StoryCardProps {
  article: StartupArticle;
  onSelect: (slug: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (slug: string) => void;
  variant?: 'featured' | 'standard' | 'compact';
}

export const StoryCard: React.FC<StoryCardProps> = ({
  article,
  onSelect,
  isBookmarked,
  onToggleBookmark,
  variant = 'standard',
}) => {
  if (variant === 'featured') {
    return (
      <article className="group bg-white border border-[#E3DED4] rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Visual Column */}
          <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[460px] bg-[#EFECE5] overflow-hidden">
            <img
              src={article.heroImage.url}
              alt={article.heroImage.alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 text-xs text-white/90 truncate pointer-events-none drop-shadow-xs">
              Photo: {article.heroImage.credit}
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between bg-white">
            <div>
              {/* Unboxed Metadata (Zero-Pill Discipline) */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF7A00] mb-3">
                <span>{article.category}</span>
                <span className="text-[#A39D90]">·</span>
                <span className="text-[#525252] font-medium">{article.readingTime}</span>
                <span className="text-[#A39D90]">·</span>
                <span className="text-[#138A4B] font-semibold">{article.fundingStage}</span>
              </div>

              <h3 
                onClick={() => onSelect(article.slug)}
                className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-3xl text-[#0B1F3A] leading-tight cursor-pointer hover:text-[#FF7A00] transition-colors"
              >
                {article.title}
              </h3>

              <p className="mt-4 text-sm sm:text-base text-[#525252] leading-relaxed line-clamp-3">
                {article.overview}
              </p>

              {/* Quick Founder Mention */}
              <div className="mt-5 pt-4 border-t border-[#EAE5DA] text-xs text-[#525252]">
                <span className="text-[#737373]">Founded by: </span>
                <span className="font-semibold text-[#171717]">{article.founders.join(' & ')}</span>
                <span className="mx-2 text-[#CCC6B8]">·</span>
                <span className="text-[#737373]">HQ: </span>
                <span className="font-semibold text-[#171717]">{article.headquarters}</span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-7 flex items-center justify-between pt-4 border-t border-[#EAE5DA]">
              <button
                onClick={() => onSelect(article.slug)}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B1F3A] group-hover:text-[#FF7A00] transition-colors"
              >
                <span>Read Full Story</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={() => onToggleBookmark(article.slug)}
                className={`p-2 rounded-md transition-colors ${
                  isBookmarked
                    ? 'text-[#FF7A00] bg-[#FFF4EB]'
                    : 'text-[#737373] hover:text-[#0B1F3A] hover:bg-[#F2EFE8]'
                }`}
                title={isBookmarked ? 'Remove from reading list' : 'Save for later'}
                aria-label="Bookmark article"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article className="group flex items-start gap-4 py-3.5 border-b border-[#EAE5DA] last:border-none">
        <div className="w-20 h-20 shrink-0 bg-[#EFECE5] rounded-md overflow-hidden relative">
          <img
            src={article.heroImage.url}
            alt={article.heroImage.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-[11px] text-[#737373] mb-1">
            <span className="font-medium text-[#FF7A00]">{article.category}</span>
            <span>·</span>
            <span>{article.readingTime}</span>
          </div>
          <h4
            onClick={() => onSelect(article.slug)}
            className="font-heading font-bold text-sm text-[#0B1F3A] group-hover:text-[#FF7A00] transition-colors leading-snug cursor-pointer line-clamp-2"
          >
            {article.title}
          </h4>
          <div className="mt-1 text-xs text-[#737373] truncate">
            {article.founders.join(', ')}
          </div>
        </div>
      </article>
    );
  }

  // Standard Card
  return (
    <article className="group flex flex-col bg-white border border-[#E3DED4] rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md">
      {/* Visual Header */}
      <div className="relative aspect-16/10 bg-[#EFECE5] overflow-hidden">
        <img
          src={article.heroImage.url}
          alt={article.heroImage.alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-2 left-3 text-[10px] text-white/80 truncate pointer-events-none">
          {article.heroImage.credit}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Clean Unboxed Metadata */}
          <div className="flex items-center gap-2 text-xs text-[#737373] mb-2 font-medium">
            <span className="text-[#FF7A00] font-semibold">{article.category}</span>
            <span>·</span>
            <span>{article.readingTime}</span>
            <span>·</span>
            <span className="text-[#138A4B]">{article.fundingStage}</span>
          </div>

          <h3
            onClick={() => onSelect(article.slug)}
            className="font-heading font-bold text-lg text-[#0B1F3A] leading-snug cursor-pointer group-hover:text-[#FF7A00] transition-colors line-clamp-2"
          >
            {article.title}
          </h3>

          <p className="mt-2.5 text-xs text-[#525252] leading-relaxed line-clamp-2">
            {article.subtitle}
          </p>

          <div className="mt-4 pt-3 border-t border-[#EAE5DA] flex items-center justify-between text-xs text-[#737373]">
            <span>Founded {article.founded}</span>
            <span>{article.headquarters.split(',')[0]}</span>
          </div>
        </div>

        {/* Footer Link & Bookmark */}
        <div className="mt-4 pt-3 border-t border-[#EAE5DA] flex items-center justify-between">
          <button
            onClick={() => onSelect(article.slug)}
            className="text-xs font-bold text-[#0B1F3A] group-hover:text-[#FF7A00] inline-flex items-center gap-1 transition-colors"
          >
            <span>Read Story</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onToggleBookmark(article.slug)}
            className={`p-1.5 rounded transition-colors ${
              isBookmarked
                ? 'text-[#FF7A00] bg-[#FFF4EB]'
                : 'text-[#737373] hover:text-[#0B1F3A] hover:bg-[#F2EFE8]'
            }`}
            title={isBookmarked ? 'Remove bookmark' : 'Bookmark story'}
            aria-label="Bookmark story"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>
    </article>
  );
};
