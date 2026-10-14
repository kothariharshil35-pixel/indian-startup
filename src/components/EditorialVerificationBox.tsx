import React from 'react';
import { ShieldCheck, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { SourceReference } from '../types';

interface EditorialVerificationBoxProps {
  editorialNote: string;
  primarySources: SourceReference[];
  independentSources: SourceReference[];
  updatedDate: string;
}

export const EditorialVerificationBox: React.FC<EditorialVerificationBoxProps> = ({
  editorialNote,
  primarySources,
  independentSources,
  updatedDate,
}) => {
  return (
    <div className="my-8 bg-[#FAF8F5] border border-[#E2DDD2] rounded-lg p-6 text-[#171717] shadow-xs">
      {/* Editorial Header */}
      <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#EAE5DA]">
        <div className="flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full bg-[#138A4B] inline-block shrink-0" aria-hidden="true" />
          <span className="font-heading font-bold text-base text-[#0B1F3A] tracking-tight">
            Editorial Research & Verification Standards
          </span>
        </div>
        <div className="text-xs text-[#737373] shrink-0 tabular-nums">
          Verified: {updatedDate}
        </div>
      </div>

      {/* Explanatory Policy Copy */}
      <div className="mt-3 text-sm text-[#404040] leading-relaxed">
        <p className="font-medium text-[#171717]">
          This article was prepared using publicly available company information, regulatory filings, government gazettes, and independent investigative reporting. Time-sensitive figures are presented with their relevant verified date to avoid outdated financial claims.
        </p>
        <p className="text-xs text-[#525252] mt-1.5 italic">
          {editorialNote}
        </p>
      </div>

      {/* Sources Grid */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#EAE5DA]">
        {/* Primary Sources */}
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2.5">
            <FileText className="w-3.5 h-3.5 text-[#138A4B]" />
            <span>Primary & Regulatory Sources</span>
          </div>
          <ul className="space-y-1.5">
            {primarySources.map((source, idx) => (
              <li key={idx} className="text-xs text-[#525252] flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#138A4B] shrink-0 mt-0.5" />
                <span>
                  {source.name}
                  {source.detail && <span className="text-[#737373]"> — {source.detail}</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Independent Sources */}
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0B1F3A]" />
            <span>Independent & Market Sources</span>
          </div>
          <ul className="space-y-1.5">
            {independentSources.map((source, idx) => (
              <li key={idx} className="text-xs text-[#525252] flex items-start gap-2">
                <span className="text-[#FF7A00] font-bold text-xs shrink-0">•</span>
                <span>{source.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
