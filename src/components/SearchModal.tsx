import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Building2, User, Tag, BookOpen, AlertCircle } from 'lucide-react';
import { STARTUP_ARTICLES } from '../data/startups';
import { FOUNDERS_DATA } from '../data/founders';
import { INDUSTRY_CARDS } from '../data/ecosystem';
import { MARKETING_STUDIES } from '../data/marketing';
import { FAILURE_STORIES } from '../data/failures';
import { IndustryCategory } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectStory: (slug: string) => void;
  onSelectFounder: (companySlug: string) => void;
  onSelectIndustry: (category: IndustryCategory) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectStory,
  onSelectFounder,
  onSelectIndustry,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  // Search Results Matching
  const matchedArticles = q
    ? STARTUP_ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.subtitle.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.founders.some((f) => f.toLowerCase().includes(q)) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      )
    : [];

  const matchedFounders = q
    ? FOUNDERS_DATA.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          f.company.toLowerCase().includes(q) ||
          f.industry.toLowerCase().includes(q) ||
          f.bio.toLowerCase().includes(q)
      )
    : [];

  const matchedIndustries = q
    ? INDUSTRY_CARDS.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.category.toLowerCase().includes(q) ||
          i.examples.some((ex) => ex.toLowerCase().includes(q))
      )
    : [];

  const matchedMarketing = q
    ? MARKETING_STUDIES.filter(
        (m) =>
          m.title.toLowerCase().includes(q) ||
          m.startup.toLowerCase().includes(q) ||
          m.summary.toLowerCase().includes(q)
      )
    : [];

  const matchedFailures = q
    ? FAILURE_STORIES.filter(
        (fail) =>
          fail.company.toLowerCase().includes(q) ||
          fail.sector.toLowerCase().includes(q) ||
          fail.whatHappened.toLowerCase().includes(q)
      )
    : [];

  const totalResults =
    matchedArticles.length +
    matchedFounders.length +
    matchedIndustries.length +
    matchedMarketing.length +
    matchedFailures.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/50 backdrop-blur-xs animate-in fade-in-0 duration-150">
      <div 
        className="w-full max-w-2xl bg-white border border-[#E3DED4] rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative border-b border-[#E3DED4] flex items-center px-4 bg-[#FAF8F5]">
          <Search className="w-5 h-5 text-[#737373] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search startups, founders, industries, topics (e.g., FinTech, Zerodha, bootstrapped)..."
            className="w-full px-3 py-4 text-sm sm:text-base text-[#171717] bg-transparent focus:outline-none placeholder:text-[#8C877D]"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#737373] hover:text-[#171717] rounded"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline text-[10px] bg-white px-2 py-0.5 rounded border border-[#CCC6B8] text-[#737373]">
              ESC
            </kbd>
          )}
        </div>

        {/* Results Container */}
        <div className="overflow-y-auto p-4 space-y-6 flex-1">
          {q === '' && (
            <div className="py-6 px-2 text-xs text-[#737373]">
              <div className="font-bold text-[#0B1F3A] uppercase tracking-wider mb-2">
                Popular Searches
              </div>
              <div className="flex flex-wrap gap-2">
                {['Zerodha', 'FinTech', 'Nithin Kamath', 'Zomato', 'E-commerce', 'CRED', 'Bootstrapped', 'EdTech'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-2.5 py-1 bg-[#EFECE5] hover:bg-[#E5E0D6] text-[#0B1F3A] font-medium rounded transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {q !== '' && totalResults === 0 && (
            <div className="py-12 text-center text-sm text-[#737373]">
              No editorial stories, founders, or industries found for &ldquo;{query}&rdquo;.
            </div>
          )}

          {/* Matched Startups */}
          {matchedArticles.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF7A00] mb-2 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                <span>Startup Stories ({matchedArticles.length})</span>
              </div>
              <div className="divide-y divide-[#EAE5DA]">
                {matchedArticles.map((story) => (
                  <div
                    key={story.id}
                    onClick={() => {
                      onSelectStory(story.slug);
                      onClose();
                    }}
                    className="py-2.5 px-3 rounded hover:bg-[#FAF8F5] cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-heading font-bold text-sm text-[#0B1F3A] group-hover:text-[#FF7A00]">
                        {story.title}
                      </div>
                      <div className="text-xs text-[#737373]">
                        {story.category} · {story.readingTime} · Founded {story.founded}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#737373] group-hover:text-[#FF7A00] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched Founders */}
          {matchedFounders.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#0B1F3A] mb-2 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                <span>Founders ({matchedFounders.length})</span>
              </div>
              <div className="divide-y divide-[#EAE5DA]">
                {matchedFounders.map((founder) => (
                  <div
                    key={founder.id}
                    onClick={() => {
                      onSelectFounder(founder.companySlug);
                      onClose();
                    }}
                    className="py-2.5 px-3 rounded hover:bg-[#FAF8F5] cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-heading font-bold text-sm text-[#0B1F3A] group-hover:text-[#FF7A00]">
                        {founder.name} — {founder.company}
                      </div>
                      <div className="text-xs text-[#737373]">
                        {founder.role} · {founder.education}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#737373] group-hover:text-[#FF7A00] transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched Industries */}
          {matchedIndustries.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#138A4B] mb-2 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5" />
                <span>Industries ({matchedIndustries.length})</span>
              </div>
              <div className="divide-y divide-[#EAE5DA]">
                {matchedIndustries.map((ind) => (
                  <div
                    key={ind.category}
                    onClick={() => {
                      onSelectIndustry(ind.category);
                      onClose();
                    }}
                    className="py-2.5 px-3 rounded hover:bg-[#FAF8F5] cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-heading font-bold text-sm text-[#0B1F3A] group-hover:text-[#FF7A00]">
                        {ind.icon} {ind.title}
                      </div>
                      <div className="text-xs text-[#737373]">
                        {ind.examples.join(', ')}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#737373] group-hover:text-[#FF7A00] transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched Marketing Case Studies */}
          {matchedMarketing.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF7A00] mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Marketing Breakdowns ({matchedMarketing.length})</span>
              </div>
              <div className="divide-y divide-[#EAE5DA]">
                {matchedMarketing.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => {
                      onSelectStory(m.slug);
                      onClose();
                    }}
                    className="py-2.5 px-3 rounded hover:bg-[#FAF8F5] cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-heading font-bold text-sm text-[#0B1F3A] group-hover:text-[#FF7A00]">
                        {m.title}
                      </div>
                      <div className="text-xs text-[#737373] line-clamp-1">
                        {m.summary}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#737373] group-hover:text-[#FF7A00] transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched Failures */}
          {matchedFailures.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#0B1F3A] mb-2 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Failure Case Studies ({matchedFailures.length})</span>
              </div>
              <div className="divide-y divide-[#EAE5DA]">
                {matchedFailures.map((f) => (
                  <div
                    key={f.id}
                    className="py-2.5 px-3 rounded bg-[#FAF8F5] flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="font-bold text-[#0B1F3A]">{f.company}: </span>
                      <span className="text-[#525252]">{f.peakMilestone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#FAF8F5] border-t border-[#E3DED4] text-xs text-[#737373] flex items-center justify-between">
          <span>Search verified against primary company filings & independent reporting</span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
};
