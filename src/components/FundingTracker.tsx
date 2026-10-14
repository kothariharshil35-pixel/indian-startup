import React, { useState } from 'react';
import { FUNDING_RECORDS } from '../data/funding';
import { ArrowUpRight, Search, ShieldCheck, Filter } from 'lucide-react';
import { IndustryCategory } from '../types';

interface FundingTrackerProps {
  onSelectStartup: (slug: string) => void;
}

export const FundingTracker: React.FC<FundingTrackerProps> = ({
  onSelectStartup,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [stageFilter, setStageFilter] = useState<'All' | 'Bootstrapped' | 'Public' | 'Private'>('All');

  const filteredRecords = FUNDING_RECORDS.filter((rec) => {
    const matchesSearch =
      rec.startup.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.keyInvestors.some((inv) => inv.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStage = stageFilter === 'All' || rec.fundingStage === stageFilter;

    return matchesSearch && matchesStage;
  });

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pb-6 mb-8 border-b border-[#E3DED4]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF7A00] mb-2">
            <ShieldCheck className="w-4 h-4 text-[#138A4B]" />
            <span>Verified Regulatory & Corporate Database</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#0B1F3A] tracking-tight">
            Startup Funding Tracker
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#525252] max-w-3xl">
            A verified, editorial record of capital stages across India&apos;s leading tech enterprises. Per editorial policy, funding stages and milestones are cited strictly from audited ROC filings, SEBI prospectuses, or verified public disclosures.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Stage Tabs (Functional Segmented Control) */}
          <div className="flex items-center gap-1 p-1 bg-[#EFECE5] rounded-lg border border-[#DDD8CD]">
            {(['All', 'Bootstrapped', 'Public', 'Private'] as const).map((stage) => (
              <button
                key={stage}
                onClick={() => setStageFilter(stage)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  stageFilter === stage
                    ? 'bg-[#0B1F3A] text-white shadow-xs'
                    : 'text-[#525252] hover:text-[#0B1F3A]'
                }`}
              >
                {stage}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#737373] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search startup, investor, sector..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-[#DDD8CD] rounded-md text-[#171717] focus:outline-none focus:border-[#0B1F3A]"
            />
          </div>
        </div>

        {/* Verification Policy Banner */}
        <div className="mb-6 p-4 bg-[#FAF8F5] border border-[#E2DDD2] rounded-lg text-xs text-[#525252] flex items-start gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#138A4B] mt-1 shrink-0" />
          <span>
            <strong>Editorial Standard:</strong> We deliberately do not present speculative secondary valuation rumors as facts. Financial milestones are tied to verified dates and official regulatory records (SEBI, RoC, MCA).
          </span>
        </div>

        {/* Responsive Table */}
        <div className="bg-white border border-[#E3DED4] rounded-lg overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#FAF8F5] border-b border-[#E3DED4] text-[#0B1F3A] font-heading font-bold text-[11px] uppercase tracking-wider">
                  <th className="py-3.5 px-4 sm:px-6">Startup</th>
                  <th className="py-3.5 px-4">Industry</th>
                  <th className="py-3.5 px-4">Funding Stage</th>
                  <th className="py-3.5 px-4 font-mono tabular-nums">Founded</th>
                  <th className="py-3.5 px-4">Milestone / Context</th>
                  <th className="py-3.5 px-4">Verified As Of</th>
                  <th className="py-3.5 px-4">Official Source</th>
                  <th className="py-3.5 px-4 text-right">Story</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE5DA]">
                {filteredRecords.map((record) => (
                  <tr 
                    key={record.startup}
                    className="hover:bg-[#FAF8F5]/80 transition-colors"
                  >
                    {/* Startup Name */}
                    <td className="py-4 px-4 sm:px-6">
                      <div className="font-heading font-bold text-sm text-[#0B1F3A]">
                        {record.startup}
                      </div>
                      <div className="text-[11px] text-[#737373]">
                        {record.hq}
                      </div>
                    </td>

                    {/* Industry */}
                    <td className="py-4 px-4 font-medium text-[#404040]">
                      {record.industry}
                    </td>

                    {/* Funding Stage (Clean Unboxed Text with dot color) */}
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center gap-1.5 font-semibold ${
                        record.fundingStage === 'Bootstrapped' 
                          ? 'text-[#138A4B]' 
                          : record.fundingStage === 'Public'
                          ? 'text-[#0B1F3A]'
                          : 'text-[#FF7A00]'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          record.fundingStage === 'Bootstrapped' 
                            ? 'bg-[#138A4B]' 
                            : record.fundingStage === 'Public'
                            ? 'bg-[#0B1F3A]'
                            : 'bg-[#FF7A00]'
                        }`} />
                        {record.fundingStage}
                      </span>
                    </td>

                    {/* Founded Year */}
                    <td className="py-4 px-4 font-mono tabular-nums text-[#404040]">
                      {record.founded}
                    </td>

                    {/* Milestone Context */}
                    <td className="py-4 px-4 text-[#525252] max-w-xs">
                      {record.lastRoundOrMilestone}
                    </td>

                    {/* Verified Date */}
                    <td className="py-4 px-4 font-mono tabular-nums text-[#737373] whitespace-nowrap">
                      {record.verifiedDate}
                    </td>

                    {/* Source */}
                    <td className="py-4 px-4 text-[11px] text-[#737373] max-w-[140px] truncate" title={record.source}>
                      {record.source}
                    </td>

                    {/* Read Story Action */}
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => onSelectStartup(record.slug)}
                        className="p-1.5 rounded hover:bg-[#EFECE5] text-[#0B1F3A] hover:text-[#FF7A00] inline-flex items-center gap-1 font-semibold transition-colors cursor-pointer"
                        title={`Read ${record.startup} story`}
                      >
                        <span className="hidden sm:inline">Story</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredRecords.length === 0 && (
            <div className="p-8 text-center text-sm text-[#737373]">
              No startups found matching your filter criteria.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
