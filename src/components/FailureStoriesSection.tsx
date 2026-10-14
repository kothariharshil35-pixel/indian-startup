import React from 'react';
import { FAILURE_STORIES } from '../data/failures';
import { AlertCircle, BookOpen, Compass, Scale, CheckCircle2 } from 'lucide-react';

export const FailureStoriesSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pb-6 mb-10 border-b border-[#E3DED4]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF7A00] mb-2">
            <Scale className="w-4 h-4 text-[#0B1F3A]" />
            <span>Factual Post-Mortem & Rigorous Business Analysis</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#0B1F3A] tracking-tight">
            Startup Lessons From Failure
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#525252] max-w-3xl leading-relaxed">
            Entrepreneurship carries inherent risk. Instead of celebrating only triumphant headlines, this section analyzes failed unit economics, scaling bottlenecks, governance lapses, and premature pivots. Our editorial tone remains strictly analytical, factual, and respectful of the founders who dared to build.
          </p>
        </div>

        {/* Analytical Stories Grid */}
        <div className="space-y-10">
          {FAILURE_STORIES.map((story) => (
            <article
              key={story.id}
              className="bg-white border border-[#E3DED4] rounded-lg p-6 sm:p-8 shadow-xs"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-5 border-b border-[#EAE5DA]">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#737373] mb-1.5 font-medium">
                    <span className="text-[#FF7A00] font-semibold">{story.sector}</span>
                    <span>·</span>
                    <span>{story.yearsActive}</span>
                  </div>
                  <h2 className="font-heading font-extrabold text-2xl text-[#0B1F3A]">
                    {story.company}
                  </h2>
                </div>

                <div className="text-xs bg-[#FAF8F5] px-3.5 py-2 rounded border border-[#EAE5DA] text-[#525252] max-w-md">
                  <span className="font-bold text-[#0B1F3A]">Peak Footprint: </span>
                  {story.peakMilestone}
                </div>
              </div>

              {/* Factual Context */}
              <div className="mt-5 text-sm text-[#404040] leading-relaxed">
                <p>{story.whatHappened}</p>
              </div>

              {/* Root Causes & Takeaways Split */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 pt-5 border-t border-[#EAE5DA]">
                
                {/* Root Structural Causes */}
                <div className="bg-[#FAF8F5] p-5 rounded-lg border border-[#EAE5DA]">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] flex items-center gap-1.5 mb-3">
                    <AlertCircle className="w-3.5 h-3.5 text-[#FF7A00]" />
                    <span>Contributing Structural Causes</span>
                  </h3>
                  <ul className="space-y-2">
                    {story.rootCauses.map((cause, cIdx) => (
                      <li key={cIdx} className="text-xs text-[#525252] flex items-start gap-2">
                        <span className="text-[#FF7A00] font-bold text-xs shrink-0">•</span>
                        <span>{cause}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Objective Lessons for Founders */}
                <div className="bg-[#FAF8F5] p-5 rounded-lg border border-[#EAE5DA]">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] flex items-center gap-1.5 mb-3">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#138A4B]" />
                    <span>Essential Lessons for Next Founders</span>
                  </h3>
                  <ul className="space-y-2">
                    {story.objectiveLessons.map((lesson, lIdx) => (
                      <li key={lIdx} className="text-xs text-[#404040] flex items-start gap-2">
                        <span className="text-[#138A4B] font-bold text-xs shrink-0">✓</span>
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Verified Sources */}
              <div className="mt-5 pt-4 border-t border-[#EAE5DA] flex flex-wrap items-center justify-between text-[11px] text-[#737373] gap-2">
                <span>Verified Independent Sources: {story.sources.join(' · ')}</span>
                <span className="italic">Analytical Case Study</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
