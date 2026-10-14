import React, { useState } from 'react';
import { Mail, Check, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { ActiveTab } from './Navbar';

interface FooterProps {
  onNavigate: (tab: ActiveTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0B1F3A] text-white pt-16 pb-12 border-t border-[#15345D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Callout — Section 23 Requirement */}
        <div className="bg-[#102A4E] border border-white/10 rounded-xl p-8 sm:p-10 mb-16 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block mb-2">
                Editorial Dispatch
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                Get the Startup Story of the Week
              </h3>
              <p className="mt-2 text-sm text-white/80 leading-relaxed max-w-xl">
                Every Sunday morning: One deeply researched, zero-hype breakdown of an Indian startup&apos;s business model, customer acquisition strategy, and verified unit economics.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-4 bg-[#138A4B]/20 border border-[#138A4B]/40 rounded-lg flex items-center gap-3 text-white">
                  <Check className="w-5 h-5 text-[#138A4B] shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold block">You are subscribed!</span>
                    Check your inbox this Sunday for our upcoming case study.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your college or work email..."
                    required
                    className="flex-1 px-4 py-3 text-xs bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:border-[#FF7A00]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 bg-[#FF7A00] hover:bg-[#E56E00] text-white text-xs font-bold rounded-md transition-colors whitespace-nowrap cursor-pointer shadow-xs inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
              <div className="mt-2 text-[11px] text-white/50">
                Zero spam. No sponsor promotions. Unsubscribe at any time.
              </div>
            </div>
          </div>
        </div>

        {/* Links & Brand Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-sm bg-[#FF7A00] text-[#0B1F3A] font-bold flex items-center justify-center text-sm font-serif">
                IS
              </div>
              <span className="font-heading font-extrabold text-lg text-white">
                Indian Startup Stories
              </span>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Real Founders. Real Journeys. Real Stories.
            </p>
            <p className="mt-3 text-xs text-white/60 leading-relaxed">
              An independent editorial magazine documenting the decisions, business models, and people behind India&apos;s entrepreneurial movement.
            </p>
          </div>

          {/* Core Sections */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Editorial Sections
            </div>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <button onClick={() => onNavigate('stories')} className="hover:text-white transition-colors">
                  10 Launch Startup Stories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('founders')} className="hover:text-white transition-colors">
                  Meet the Founders Directory
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('industries')} className="hover:text-white transition-colors">
                  Explore 8 Industry Sectors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('marketing')} className="hover:text-white transition-colors">
                  Marketing & Brand Strategy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('funding')} className="hover:text-white transition-colors">
                  Startup Funding Tracker
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('failures')} className="hover:text-white transition-colors">
                  Startup Lessons From Failure
                </button>
              </li>
            </ul>
          </div>

          {/* Academic & Student Focus */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Academic Curricula
            </div>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li><span className="hover:text-white">MBA Case Studies & Syllabi</span></li>
              <li><span className="hover:text-white">BBA Entrepreneurship Papers</span></li>
              <li><span className="hover:text-white">Digital Marketing Frameworks</span></li>
              <li><span className="hover:text-white">Unit Economics & Margins</span></li>
              <li><span className="hover:text-white">DPIIT & Startup India Policies</span></li>
            </ul>
          </div>

          {/* Editorial Standards & Social */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Standards & Channels
            </div>
            <ul className="space-y-2.5 text-xs text-white/70 mb-5">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  Editorial Verification Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  Citations & Sources Standard
                </button>
              </li>
            </ul>

            <div className="text-xs font-bold uppercase tracking-wider text-white mb-2">
              Community Channels
            </div>
            <div className="flex items-center gap-3 text-xs text-white/70">
              <span className="hover:text-[#FF7A00] cursor-pointer">LinkedIn</span>
              <span>·</span>
              <span className="hover:text-[#FF7A00] cursor-pointer">YouTube</span>
              <span>·</span>
              <span className="hover:text-[#FF7A00] cursor-pointer">Instagram</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} Indian Startup Stories. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Primary Sources Cited</span>
            <span>·</span>
            <span>Non-partisan Editorial Rigor</span>
            <span>·</span>
            <span>Crafted for Indian Innovators</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
