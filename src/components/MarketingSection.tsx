import React from 'react';
import { MARKETING_STUDIES } from '../data/marketing';
import { ArrowUpRight, Megaphone, Target, Lightbulb, BookOpen } from 'lucide-react';

interface MarketingSectionProps {
  onSelectStartupStory: (slug: string) => void;
}

export const MarketingSection: React.FC<MarketingSectionProps> = ({
  onSelectStartupStory,
}) => {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pb-6 mb-10 border-b border-[#E3DED4]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF7A00] mb-2">
            <Megaphone className="w-4 h-4 text-[#FF7A00]" />
            <span>Digital Business & Growth Strategy Masterclasses</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#0B1F3A] tracking-tight">
            Startup Marketing & Brand Strategy
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#525252] max-w-3xl leading-relaxed">
            Curated specifically for students studying Digital Marketing, MBA, BBA, and Entrepreneurship. An analytical dissection of how India&apos;s most inventive companies acquired millions of customers without standard ad playbooks.
          </p>
        </div>

        {/* 5 Featured Deep-Dive Case Studies */}
        <div className="space-y-8">
          {MARKETING_STUDIES.map((study, idx) => (
            <article
              key={study.id}
              className="bg-white border border-[#E3DED4] rounded-lg p-6 sm:p-8 shadow-xs hover:border-[#CCC6B8] transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#EAE5DA]">
                <div className="max-w-3xl">
                  {/* Clean unboxed category kicker */}
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF7A00] mb-2">
                    <span>{study.badgeText}</span>
                    <span className="text-[#CCC6B8]">·</span>
                    <span className="text-[#138A4B]">{study.startup}</span>
                  </div>

                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0B1F3A] leading-snug">
                    {study.title}
                  </h2>

                  <p className="mt-3 text-sm sm:text-base text-[#525252] leading-relaxed">
                    {study.summary}
                  </p>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => onSelectStartupStory(study.slug)}
                    className="py-2.5 px-4 bg-[#0B1F3A] hover:bg-[#15345D] text-white text-xs font-bold rounded-md transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Read Full Startup Journey</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Core Execution Strategy */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] flex items-center gap-1.5 mb-3">
                    <Target className="w-3.5 h-3.5 text-[#FF7A00]" />
                    <span>Core Strategic Pillars</span>
                  </h3>
                  <ul className="space-y-2">
                    {study.coreStrategy.map((strat, sIdx) => (
                      <li key={sIdx} className="text-xs text-[#525252] flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0B1F3A] mt-1.5 shrink-0" />
                        <span>{strat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Analytical Takeaway Box */}
                <div className="flex flex-col justify-between bg-[#FAF8F5] p-5 rounded-lg border border-[#EAE5DA]">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] flex items-center gap-1.5 mb-2">
                      <Lightbulb className="w-3.5 h-3.5 text-[#138A4B]" />
                      <span>Marketing Law & Principle</span>
                    </h3>
                    <p className="text-xs text-[#404040] leading-relaxed italic">
                      &ldquo;{study.marketingLesson}&rdquo;
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#EAE5DA] text-xs font-medium text-[#138A4B]">
                    {study.audienceTakeaway}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
