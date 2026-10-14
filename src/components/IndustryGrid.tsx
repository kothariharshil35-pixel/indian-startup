import React from 'react';
import { INDUSTRY_CARDS, IndustryCardData } from '../data/ecosystem';
import { ArrowRight } from 'lucide-react';
import { IndustryCategory } from '../types';

interface IndustryGridProps {
  onSelectCategory: (category: IndustryCategory) => void;
  selectedCategory?: IndustryCategory | 'all';
}

export const IndustryGrid: React.FC<IndustryGridProps> = ({
  onSelectCategory,
  selectedCategory,
}) => {
  return (
    <section className="py-12 sm:py-16 border-b border-[#E3DED4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] mb-2">
              Sectors Shaping Modern India
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#0B1F3A] tracking-tight">
              Explore Industries
            </h2>
          </div>
          <p className="text-sm text-[#525252] max-w-md">
            From financial plumbing to consumer hardware and decentralized logistics, discover how startups built moats across eight core domains.
          </p>
        </div>

        {/* 8 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRY_CARDS.map((card) => {
            const isSelected = selectedCategory === card.category;

            return (
              <div
                key={card.category}
                onClick={() => onSelectCategory(card.category)}
                className={`group flex flex-col justify-between p-6 rounded-lg border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-md'
                    : 'bg-white hover:bg-[#FAF8F5] border-[#E3DED4] hover:border-[#CCC6B8] hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl" role="img" aria-label={card.category}>
                      {card.icon}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-[#EFECE5] text-[#525252]'
                    }`}>
                      {card.storyCount} {card.storyCount === 1 ? 'Story' : 'Stories'}
                    </span>
                  </div>

                  <h3 className={`font-heading font-bold text-lg mb-2 transition-colors ${
                    isSelected ? 'text-white' : 'text-[#0B1F3A] group-hover:text-[#FF7A00]'
                  }`}>
                    {card.title}
                  </h3>

                  <p className={`text-xs leading-relaxed mb-4 ${
                    isSelected ? 'text-white/80' : 'text-[#525252]'
                  }`}>
                    {card.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAE5DA]/50 flex items-center justify-between">
                  <div className={`text-[11px] truncate max-w-[180px] ${
                    isSelected ? 'text-white/70' : 'text-[#737373]'
                  }`}>
                    {card.examples.join(', ')}
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-1 ${
                    isSelected ? 'text-[#FF7A00]' : 'text-[#0B1F3A]'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
