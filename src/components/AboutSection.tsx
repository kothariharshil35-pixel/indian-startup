import React from 'react';
import { ShieldCheck, CheckCircle2, RefreshCw, BookOpen, AlertCircle, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pb-8 mb-10 border-b border-[#E3DED4]">
          <div className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] mb-2">
            Institutional Mission & Standards
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#0B1F3A] tracking-tight">
            About Indian Startup Stories
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#525252] leading-relaxed">
            Real Founders. Real Journeys. Real Stories. A content-driven editorial publication documenting the decisions that built modern Indian entrepreneurship.
          </p>
        </div>

        {/* Section 19: Our Mission */}
        <div className="bg-white border border-[#E3DED4] rounded-lg p-6 sm:p-8 mb-10 shadow-xs">
          <h2 className="font-heading font-extrabold text-2xl text-[#0B1F3A] mb-4">
            Our Mission
          </h2>
          <div className="text-base sm:text-lg text-[#333] leading-relaxed space-y-4">
            <p>
              Indian Startup Stories exists to document the people, ideas and decisions behind India&apos;s startup ecosystem.
            </p>
            <p>
              We believe that startup stories should be more than breathless success headlines or speculative funding announcements. Behind every company are:
            </p>
          </div>

          {/* Core Elements Grid */}
          <div className="my-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Ideas', desc: 'First-principles hypotheses' },
              { label: 'Experiments', desc: 'Testing market appetite' },
              { label: 'Failures', desc: 'The discarded prototypes' },
              { label: 'Pivots', desc: 'Survival-driven direction changes' },
              { label: 'People', desc: 'Founders, teams, delivery partners' },
              { label: 'Decisions', desc: 'High-stakes capital allocation' },
            ].map((item) => (
              <div key={item.label} className="p-4 bg-[#FAF8F5] rounded border border-[#EAE5DA]">
                <div className="font-heading font-bold text-base text-[#0B1F3A]">{item.label}.</div>
                <div className="text-xs text-[#737373] mt-0.5">{item.desc}</div>
              </div>
            ))}
          </div>

          <p className="text-sm sm:text-base text-[#404040] leading-relaxed">
            Our goal is to make those journeys accessible and actionable to college students (studying BBA, MBA, Digital Marketing, Finance, and Entrepreneurship), aspiring founders, business researchers, and curious readers nationwide.
          </p>
        </div>

        {/* Section 20: Editorial Policy */}
        <div className="bg-white border border-[#E3DED4] rounded-lg p-6 sm:p-8 shadow-xs">
          <div className="pb-4 mb-6 border-b border-[#EAE5DA]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#138A4B] mb-1">
              <ShieldCheck className="w-4 h-4 text-[#138A4B]" />
              <span>Rigorous Fact-Checking Constitution</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl text-[#0B1F3A]">
              Our Editorial Policy: What We Believe
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-[#FAF8F5] border border-[#EAE5DA]">
              <div className="w-7 h-7 rounded-full bg-[#0B1F3A] text-white flex items-center justify-center font-bold text-xs shrink-0">
                1
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-[#0B1F3A]">
                  We verify.
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#525252] leading-relaxed">
                  Important claims must be checked against reliable sources, government records, and regulatory filings. We avoid presenting rumors or unsupported statistics as facts.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-[#FAF8F5] border border-[#EAE5DA]">
              <div className="w-7 h-7 rounded-full bg-[#0B1F3A] text-white flex items-center justify-center font-bold text-xs shrink-0">
                2
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-[#0B1F3A]">
                  We cite.
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#525252] leading-relaxed">
                  Readers should be able to clearly understand where information originated. Every article lists both primary sources and independent reputable reporting.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-[#FAF8F5] border border-[#EAE5DA]">
              <div className="w-7 h-7 rounded-full bg-[#0B1F3A] text-white flex items-center justify-center font-bold text-xs shrink-0">
                3
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-[#0B1F3A]">
                  We update.
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#525252] leading-relaxed">
                  Startup metrics, valuations, and employee numbers change over time. Time-sensitive information carries an explicit updated date so readers know the context.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-[#FAF8F5] border border-[#EAE5DA]">
              <div className="w-7 h-7 rounded-full bg-[#0B1F3A] text-white flex items-center justify-center font-bold text-xs shrink-0">
                4
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-[#0B1F3A]">
                  We distinguish fact from analysis.
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#525252] leading-relaxed">
                  Company PR claims and editorial interpretation are not the same thing. We clearly separate verified business facts from analytical commentary and strategic lessons.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-[#FAF8F5] border border-[#EAE5DA]">
              <div className="w-7 h-7 rounded-full bg-[#0B1F3A] text-white flex items-center justify-center font-bold text-xs shrink-0">
                5
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-[#0B1F3A]">
                  We correct.
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#525252] leading-relaxed">
                  If a factual error is discovered or brought to our attention by readers or company representatives, the article is updated promptly with transparent correction logging.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
