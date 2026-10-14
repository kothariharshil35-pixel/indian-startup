import React from 'react';
import { ArrowRight, Sparkles, BookOpen, Users, Compass } from 'lucide-react';
import { StartupArticle } from '../types';

interface HeroSectionProps {
  featuredStory: StartupArticle;
  onExploreStories: () => void;
  onMeetFounders: () => void;
  onReadStory: (slug: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  featuredStory,
  onExploreStories,
  onMeetFounders,
  onReadStory,
}) => {
  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-[#E3DED4]">
      {/* Editorial Header Masthead */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Kicker - Clean unboxed text */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E3DED4] text-xs font-semibold text-[#737373] uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="text-[#0B1F3A] font-bold">Vol. 1 · Launch Edition</span>
            <span>·</span>
            <span>Independent Startup Journalism</span>
          </div>
          <div className="hidden sm:block">
            <span>Bengaluru · Mumbai · Delhi NCR</span>
          </div>
        </div>

        {/* Hero Headline & Subhead */}
        <div className="max-w-4xl">
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0B1F3A] tracking-tight leading-[1.08] text-balance">
            The Stories Behind India&apos;s Boldest Startups
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-xl text-[#525252] leading-relaxed max-w-3xl">
            Discover the founders, ideas, challenges and strategies behind the companies shaping India&apos;s startup ecosystem. Grounded in primary sources and editorial rigor.
          </p>

          {/* Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              onClick={onExploreStories}
              className="px-5 py-2.5 bg-[#0B1F3A] text-white text-sm font-semibold rounded-md hover:bg-[#15345D] transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#FF7A00]" />
              <span>Explore Stories</span>
            </button>

            <button
              onClick={onMeetFounders}
              className="px-5 py-2.5 bg-white text-[#0B1F3A] text-sm font-semibold border border-[#CCC6B8] rounded-md hover:bg-[#EFECE5] transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <Users className="w-4 h-4 text-[#0B1F3A]" />
              <span>Meet the Founders</span>
            </button>
          </div>
        </div>

        {/* Professional Collage Banner & Featured Story Split */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Collage Visual Hero */}
          <div className="lg:col-span-7 relative rounded-lg overflow-hidden border border-[#E3DED4] min-h-[300px] sm:min-h-[420px] bg-[#EFECE5]">
            <img
              src="/src/assets/images/hero_indian_startups_1792012114658.jpg"
              alt="Professional collage representing India's modern startup ecosystem and tech founders"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#FF7A00] block mb-1">
                Ecosystem Spotlight
              </span>
              <p className="font-heading font-bold text-lg sm:text-xl text-white leading-snug">
                From Bengaluru Tech Parks to Bharat Tier 2/3 Innovation Hubs
              </p>
              <p className="text-xs text-white/80 mt-1">
                Editorial photography documented across India&apos;s leading venture corridors.
              </p>
            </div>
          </div>

          {/* Featured Story Callout Box */}
          <div className="lg:col-span-5 bg-white border border-[#E3DED4] rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-[#EAE5DA]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00]">
                  Featured Story
                </span>
                <span className="text-xs text-[#737373]">
                  {featuredStory.readingTime}
                </span>
              </div>

              {/* Startup Name & Category */}
              <div className="text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <span>{featuredStory.category}</span>
                <span className="text-[#CCC6B8]">·</span>
                <span className="text-[#138A4B]">Bootstrapped Pioneer</span>
              </div>

              <h2 
                onClick={() => onReadStory(featuredStory.slug)}
                className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0B1F3A] hover:text-[#FF7A00] transition-colors cursor-pointer leading-tight"
              >
                Zerodha: How Zerodha Changed Stock Broking in India
              </h2>

              <p className="mt-4 text-sm text-[#525252] leading-relaxed">
                From a small idea around reducing barriers in stock trading to becoming one of India&apos;s most recognizable financial technology companies, Zerodha&apos;s journey demonstrates the power of simplicity, technology and customer education.
              </p>

              {/* Key Highlights */}
              <div className="mt-5 space-y-2 text-xs text-[#525252] bg-[#FAF8F5] p-3.5 rounded-md border border-[#EAE5DA]">
                <div className="flex items-center justify-between">
                  <span className="text-[#737373]">Founders:</span>
                  <span className="font-semibold text-[#171717]">Nithin & Nikhil Kamath</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#737373]">Active Traders:</span>
                  <span className="font-semibold text-[#171717]">13+ Million</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#737373]">Venture Capital Raised:</span>
                  <span className="font-semibold text-[#138A4B]">$0 (100% Bootstrapped)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EAE5DA]">
              <button
                onClick={() => onReadStory(featuredStory.slug)}
                className="w-full py-2.5 px-4 bg-[#FF7A00] hover:bg-[#E56E00] text-white text-sm font-bold rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
