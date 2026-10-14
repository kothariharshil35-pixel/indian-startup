import React, { useState } from 'react';
import { FOUNDERS_DATA } from '../data/founders';
import { ArrowRight, Quote, GraduationCap, Building2 } from 'lucide-react';
import { IndustryCategory } from '../types';

interface FounderDirectoryProps {
  onSelectFounderStory: (companySlug: string) => void;
}

export const FounderDirectory: React.FC<FounderDirectoryProps> = ({
  onSelectFounderStory,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const industries = ['all', 'FinTech', 'FoodTech', 'E-commerce', 'EdTech', 'Consumer Tech', 'Hospitality'];

  const filteredFounders = selectedIndustry === 'all'
    ? FOUNDERS_DATA
    : FOUNDERS_DATA.filter((f) => f.industry === selectedIndustry);

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#E3DED4]">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] mb-2">
              Leadership & Visionaries
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#0B1F3A] tracking-tight">
              Meet the Founders
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[#525252] max-w-2xl">
              The builders who navigated uncertainty, skepticism, and severe capital constraints to shape Indian consumer and enterprise markets.
            </p>
          </div>

          {/* Industry Filter Buttons (Interactive Segmented Controls - Allowed by frontend constitution) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EFECE5] rounded-lg border border-[#DDD8CD]">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer capitalize ${
                  selectedIndustry === ind
                    ? 'bg-[#0B1F3A] text-white shadow-xs'
                    : 'text-[#525252] hover:text-[#0B1F3A] hover:bg-[#E5E0D6]'
                }`}
              >
                {ind === 'all' ? 'All Sectors' : ind}
              </button>
            ))}
          </div>
        </div>

        {/* Founders Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFounders.map((founder) => (
            <div
              key={founder.id}
              className="group bg-white border border-[#E3DED4] rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Visual Header with Portrait */}
                <div className="relative aspect-4/3 bg-[#EFECE5] overflow-hidden">
                  <img
                    src={founder.portrait}
                    alt={founder.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF7A00] block">
                      {founder.industry} · Founded {founder.foundedYear}
                    </span>
                    <h3 className="font-heading font-extrabold text-xl text-white">
                      {founder.name}
                    </h3>
                    <div className="text-xs text-white/90 font-medium">
                      {founder.role}, {founder.company}
                    </div>
                  </div>
                </div>

                {/* Biography & Key Facts */}
                <div className="p-6">
                  {/* Education / Alma Mater */}
                  <div className="flex items-center gap-2 text-xs text-[#737373] mb-3">
                    <GraduationCap className="w-4 h-4 text-[#FF7A00] shrink-0" />
                    <span className="truncate">{founder.education}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#525252] leading-relaxed line-clamp-3">
                    {founder.bio}
                  </p>

                  {/* Pull Quote */}
                  <div className="mt-4 p-3.5 bg-[#FAF8F5] rounded border border-[#EAE5DA] text-xs italic text-[#404040]">
                    &ldquo;{founder.quote}&rdquo;
                  </div>

                  {/* Core Founder Takeaways */}
                  <div className="mt-4 pt-3 border-t border-[#EAE5DA]">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#0B1F3A] mb-2">
                      Core Principle
                    </div>
                    <ul className="space-y-1.5">
                      {founder.lessons.slice(0, 2).map((lesson, idx) => (
                        <li key={idx} className="text-xs text-[#525252] flex items-start gap-2">
                          <span className="text-[#138A4B] font-bold text-xs shrink-0">✓</span>
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 border-t border-[#EAE5DA]/50 mt-4">
                <button
                  onClick={() => onSelectFounderStory(founder.companySlug)}
                  className="w-full py-2.5 px-4 bg-[#EFECE5] group-hover:bg-[#0B1F3A] group-hover:text-white text-[#0B1F3A] text-xs font-bold rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Founder Story →</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
