import React from 'react';
import { ECOSYSTEM_STATS } from '../data/ecosystem';
import { Award, Building2, MapPin, ExternalLink, Calendar } from 'lucide-react';

export const StartupEcosystemStats: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#0B1F3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Verification Context */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/15">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF7A00] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#138A4B]" />
              <span>Official Government & Ecosystem Registry</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl tracking-tight text-white">
              India&apos;s Startup Ecosystem in Numbers
            </h2>
          </div>

          <div className="text-xs text-white/70 flex items-center gap-1.5 shrink-0">
            <Calendar className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>Updated: National Startup Day (January 2026)</span>
          </div>
        </div>

        {/* 3 Major Statistics with Oversized Typography */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {ECOSYSTEM_STATS.map((stat, idx) => (
            <div 
              key={idx}
              className="flex flex-col justify-between p-6 rounded-lg bg-white/5 border border-white/10 hover:border-[#FF7A00]/40 transition-colors"
            >
              <div>
                <div className="font-heading font-extrabold text-5xl sm:text-6xl text-[#FF7A00] tracking-tight tabular-nums">
                  {stat.value}
                </div>
                <div className="mt-2 font-heading font-bold text-lg sm:text-xl text-white">
                  {stat.label}
                </div>
                <p className="mt-2 text-xs text-white/70 leading-relaxed">
                  {stat.subtitle}
                </p>
              </div>

              {/* Source & Date Citation - Critical requirement */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
                <span>Source: {stat.source}</span>
                <span className="text-[#138A4B] font-semibold">{stat.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Explanatory Policy Footnote */}
        <div className="mt-8 text-center text-xs text-white/50">
          Startup statistics fluctuate as new entities receive official certification. Startup India publishes quarterly registries verified under Department for Promotion of Industry and Internal Trade (DPIIT) guidelines.
        </div>
      </div>
    </section>
  );
};
