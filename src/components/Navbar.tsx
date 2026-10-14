import React, { useState } from 'react';
import { Search, Menu, X, Bookmark, ChevronRight } from 'lucide-react';

export type ActiveTab = 
  | 'home' 
  | 'stories' 
  | 'founders' 
  | 'industries' 
  | 'marketing' 
  | 'funding' 
  | 'failures' 
  | 'about' 
  | 'bookmarks';

interface NavbarProps {
  activeTab: ActiveTab;
  onNavigate: (tab: ActiveTab, params?: { slug?: string; category?: string }) => void;
  onOpenSearch: () => void;
  bookmarkedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onNavigate,
  onOpenSearch,
  bookmarkedCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: ActiveTab) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#E3DED4] transition-colors">
      {/* Top Bar strictly adheres to 3-Zone Contract: 1 Brand, 4-5 Links, 1 Action Zone */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark in display face */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className="group text-left flex items-center gap-3 focus:outline-none"
            aria-label="Indian Startup Stories Homepage"
          >
            <div className="w-8 h-8 rounded-sm bg-[#0B1F3A] flex items-center justify-center text-white font-serif font-bold text-lg tracking-tight shadow-xs">
              IS
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl tracking-tight text-[#0B1F3A] whitespace-nowrap">
                Indian Startup Stories
              </span>
              <span className="hidden sm:block text-[10px] tracking-wider uppercase text-[#138A4B] font-semibold">
                Real Founders · Real Journeys · Real Stories
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#404040]">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors whitespace-nowrap hover:text-[#0B1F3A] relative py-1 ${
              activeTab === 'home' ? 'text-[#0B1F3A] font-semibold' : ''
            }`}
          >
            Home
            {activeTab === 'home' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF7A00]" />
            )}
          </button>

          <button
            onClick={() => handleNavClick('stories')}
            className={`transition-colors whitespace-nowrap hover:text-[#0B1F3A] relative py-1 ${
              activeTab === 'stories' ? 'text-[#0B1F3A] font-semibold' : ''
            }`}
          >
            Startup Stories
            {activeTab === 'stories' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF7A00]" />
            )}
          </button>

          <button
            onClick={() => handleNavClick('founders')}
            className={`transition-colors whitespace-nowrap hover:text-[#0B1F3A] relative py-1 ${
              activeTab === 'founders' ? 'text-[#0B1F3A] font-semibold' : ''
            }`}
          >
            Founders
            {activeTab === 'founders' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF7A00]" />
            )}
          </button>

          <button
            onClick={() => handleNavClick('industries')}
            className={`transition-colors whitespace-nowrap hover:text-[#0B1F3A] relative py-1 ${
              activeTab === 'industries' ? 'text-[#0B1F3A] font-semibold' : ''
            }`}
          >
            Industries
            {activeTab === 'industries' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF7A00]" />
            )}
          </button>

          <button
            onClick={() => handleNavClick('marketing')}
            className={`transition-colors whitespace-nowrap hover:text-[#0B1F3A] relative py-1 ${
              activeTab === 'marketing' ? 'text-[#0B1F3A] font-semibold' : ''
            }`}
          >
            Marketing
            {activeTab === 'marketing' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF7A00]" />
            )}
          </button>

          <button
            onClick={() => handleNavClick('funding')}
            className={`transition-colors whitespace-nowrap hover:text-[#0B1F3A] relative py-1 ${
              activeTab === 'funding' ? 'text-[#0B1F3A] font-semibold' : ''
            }`}
          >
            Funding
            {activeTab === 'funding' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF7A00]" />
            )}
          </button>

          <button
            onClick={() => handleNavClick('failures')}
            className={`transition-colors whitespace-nowrap hover:text-[#0B1F3A] relative py-1 ${
              activeTab === 'failures' ? 'text-[#0B1F3A] font-semibold' : ''
            }`}
          >
            Failure Stories
            {activeTab === 'failures' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF7A00]" />
            )}
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`transition-colors whitespace-nowrap hover:text-[#0B1F3A] relative py-1 ${
              activeTab === 'about' ? 'text-[#0B1F3A] font-semibold' : ''
            }`}
          >
            About
            {activeTab === 'about' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF7A00]" />
            )}
          </button>
        </nav>

        {/* Zone 3: Interactive Action Zone (Search affordance, Bookmarks, Mobile trigger) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[#404040] bg-[#EFECE5] hover:bg-[#E5E0D6] border border-[#DDD8CD] rounded-md transition-colors"
            title="Search startups, founders, industries (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5 text-[#0B1F3A]" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden md:inline text-[10px] bg-white px-1.5 py-0.5 rounded border border-[#CCC6B8] text-[#737373]">
              ⌘K
            </kbd>
          </button>

          {/* Reading List / Bookmarks */}
          <button
            onClick={() => handleNavClick('bookmarks')}
            className={`relative p-2 rounded-md transition-colors ${
              activeTab === 'bookmarks'
                ? 'bg-[#0B1F3A] text-white'
                : 'text-[#404040] hover:bg-[#EFECE5]'
            }`}
            title="Saved Reading List"
            aria-label="Saved Reading List"
          >
            <Bookmark className="w-4 h-4" />
            {bookmarkedCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF7A00] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {bookmarkedCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0B1F3A] hover:bg-[#EFECE5] rounded-md transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F5F0] border-b border-[#E3DED4] px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`flex items-center justify-between px-3 py-2 text-sm rounded-md text-left ${
                activeTab === 'home' ? 'bg-[#0B1F3A] text-white font-medium' : 'text-[#171717] hover:bg-[#EFECE5]'
              }`}
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
            <button
              onClick={() => handleNavClick('stories')}
              className={`flex items-center justify-between px-3 py-2 text-sm rounded-md text-left ${
                activeTab === 'stories' ? 'bg-[#0B1F3A] text-white font-medium' : 'text-[#171717] hover:bg-[#EFECE5]'
              }`}
            >
              <span>Startup Stories (10 Launch Articles)</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
            <button
              onClick={() => handleNavClick('founders')}
              className={`flex items-center justify-between px-3 py-2 text-sm rounded-md text-left ${
                activeTab === 'founders' ? 'bg-[#0B1F3A] text-white font-medium' : 'text-[#171717] hover:bg-[#EFECE5]'
              }`}
            >
              <span>Meet the Founders</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
            <button
              onClick={() => handleNavClick('industries')}
              className={`flex items-center justify-between px-3 py-2 text-sm rounded-md text-left ${
                activeTab === 'industries' ? 'bg-[#0B1F3A] text-white font-medium' : 'text-[#171717] hover:bg-[#EFECE5]'
              }`}
            >
              <span>Explore Industries</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
            <button
              onClick={() => handleNavClick('marketing')}
              className={`flex items-center justify-between px-3 py-2 text-sm rounded-md text-left ${
                activeTab === 'marketing' ? 'bg-[#0B1F3A] text-white font-medium' : 'text-[#171717] hover:bg-[#EFECE5]'
              }`}
            >
              <span>Marketing Case Studies</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
            <button
              onClick={() => handleNavClick('funding')}
              className={`flex items-center justify-between px-3 py-2 text-sm rounded-md text-left ${
                activeTab === 'funding' ? 'bg-[#0B1F3A] text-white font-medium' : 'text-[#171717] hover:bg-[#EFECE5]'
              }`}
            >
              <span>Startup Funding Tracker</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
            <button
              onClick={() => handleNavClick('failures')}
              className={`flex items-center justify-between px-3 py-2 text-sm rounded-md text-left ${
                activeTab === 'failures' ? 'bg-[#0B1F3A] text-white font-medium' : 'text-[#171717] hover:bg-[#EFECE5]'
              }`}
            >
              <span>Startup Lessons From Failure</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`flex items-center justify-between px-3 py-2 text-sm rounded-md text-left ${
                activeTab === 'about' ? 'bg-[#0B1F3A] text-white font-medium' : 'text-[#171717] hover:bg-[#EFECE5]'
              }`}
            >
              <span>About & Editorial Policy</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
