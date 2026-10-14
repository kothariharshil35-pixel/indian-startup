import React, { useState, useEffect } from 'react';
import { Navbar, ActiveTab } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StartupEcosystemStats } from './components/StartupEcosystemStats';
import { IndustryGrid } from './components/IndustryGrid';
import { StoryCard } from './components/StoryCard';
import { ArticleView } from './components/ArticleView';
import { FounderDirectory } from './components/FounderDirectory';
import { FundingTracker } from './components/FundingTracker';
import { MarketingSection } from './components/MarketingSection';
import { FailureStoriesSection } from './components/FailureStoriesSection';
import { AboutSection } from './components/AboutSection';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';

import { STARTUP_ARTICLES } from './data/startups';
import { FOUNDERS_DATA } from './data/founders';
import { IndustryCategory } from './types';
import { 
  ArrowRight, 
  BookOpen, 
  Filter, 
  Sparkles, 
  BookmarkCheck,
  TrendingUp,
  Award
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [activeStorySlug, setActiveStorySlug] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryCategory | 'all'>('all');
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('iss_bookmarks');
      return saved ? JSON.parse(saved) : ['zerodha', 'zomato'];
    } catch {
      return ['zerodha', 'zomato'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('iss_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarks]);

  const toggleBookmark = (slug: string) => {
    setBookmarks((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const handleSelectStory = (slug: string) => {
    setActiveStorySlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromStory = () => {
    setActiveStorySlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (tab: ActiveTab, params?: { slug?: string; category?: string }) => {
    if (params?.slug) {
      setActiveStorySlug(params.slug);
    } else {
      setActiveStorySlug(null);
    }

    if (params?.category) {
      setSelectedIndustry(params.category as IndustryCategory);
    }

    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentArticle = activeStorySlug
    ? STARTUP_ARTICLES.find((a) => a.slug === activeStorySlug)
    : null;

  const featuredStory = STARTUP_ARTICLES.find((a) => a.featured) || STARTUP_ARTICLES[0];

  const filteredStories = selectedIndustry === 'all'
    ? STARTUP_ARTICLES
    : STARTUP_ARTICLES.filter((a) => a.category === selectedIndustry);

  const bookmarkedArticles = STARTUP_ARTICLES.filter((a) =>
    bookmarks.includes(a.slug)
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#171717]">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchModalOpen(true)}
        bookmarkedCount={bookmarks.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* SINGLE ARTICLE VIEW */}
        {currentArticle ? (
          <ArticleView
            article={currentArticle}
            allArticles={STARTUP_ARTICLES}
            onBack={handleBackFromStory}
            onSelectRelated={handleSelectStory}
            isBookmarked={bookmarks.includes(currentArticle.slug)}
            onToggleBookmark={toggleBookmark}
          />
        ) : (
          <>
            {/* VIEW: HOME */}
            {activeTab === 'home' && (
              <div>
                {/* Hero Section with Indian Startup Collage & Zerodha Featured Story */}
                <HeroSection
                  featuredStory={featuredStory}
                  onExploreStories={() => handleNavigate('stories')}
                  onMeetFounders={() => handleNavigate('founders')}
                  onReadStory={handleSelectStory}
                />

                {/* 10 Launch Stories Section (Section 10 of prompt) */}
                <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E3DED4]">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#E3DED4]">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] mb-1.5">
                        Launch Collection
                      </div>
                      <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#0B1F3A] tracking-tight">
                        10 Full Startup Stories
                      </h2>
                      <p className="mt-1 text-sm text-[#525252]">
                        Complete, well-researched analyses of how India&apos;s defining consumer & enterprise brands started, scaled, and built moats.
                      </p>
                    </div>

                    <button
                      onClick={() => handleNavigate('stories')}
                      className="text-xs font-bold text-[#0B1F3A] hover:text-[#FF7A00] inline-flex items-center gap-1 self-start md:self-auto cursor-pointer"
                    >
                      <span>View All In Depth</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* 10 Startup Stories Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {STARTUP_ARTICLES.map((story) => (
                      <StoryCard
                        key={story.id}
                        article={story}
                        onSelect={handleSelectStory}
                        isBookmarked={bookmarks.includes(story.slug)}
                        onToggleBookmark={toggleBookmark}
                        variant="standard"
                      />
                    ))}
                  </div>
                </section>

                {/* Official Ecosystem Statistics (Section 8 of prompt) */}
                <StartupEcosystemStats />

                {/* Explore Industries (Section 9 of prompt) */}
                <IndustryGrid
                  onSelectCategory={(category) => {
                    setSelectedIndustry(category);
                    handleNavigate('industries');
                  }}
                  selectedCategory={selectedIndustry}
                />

                {/* Meet the Founders Preview (Section 15) */}
                <section className="py-12 sm:py-16 bg-white border-b border-[#E3DED4]">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#E3DED4]">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] mb-1.5">
                          Founder Directory
                        </div>
                        <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#0B1F3A] tracking-tight">
                          Meet the Founders
                        </h2>
                      </div>
                      <button
                        onClick={() => handleNavigate('founders')}
                        className="text-xs font-bold text-[#0B1F3A] hover:text-[#FF7A00] inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>View All {FOUNDERS_DATA.length} Founders</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {FOUNDERS_DATA.slice(0, 3).map((f) => (
                        <div
                          key={f.id}
                          className="p-5 rounded-lg border border-[#E3DED4] bg-[#FAF8F5] flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center gap-3 mb-3">
                              <img
                                src={f.portrait}
                                alt={f.name}
                                referrerPolicy="no-referrer"
                                className="w-12 h-12 rounded-full object-cover border border-[#CCC6B8]"
                              />
                              <div>
                                <h3 className="font-heading font-bold text-base text-[#0B1F3A]">
                                  {f.name}
                                </h3>
                                <div className="text-xs text-[#737373]">
                                  {f.role}, {f.company}
                                </div>
                              </div>
                            </div>
                            <p className="text-xs text-[#525252] leading-relaxed line-clamp-2">
                              {f.bio}
                            </p>
                          </div>
                          <button
                            onClick={() => handleSelectStory(f.companySlug)}
                            className="mt-4 pt-3 border-t border-[#EAE5DA] text-xs font-bold text-[#0B1F3A] hover:text-[#FF7A00] inline-flex items-center justify-between w-full cursor-pointer"
                          >
                            <span>Read Founder Journey</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* VIEW: STORIES */}
            {activeTab === 'stories' && (
              <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="pb-6 mb-8 border-b border-[#E3DED4]">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] mb-2">
                    Editorial Archive
                  </div>
                  <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#0B1F3A] tracking-tight">
                    All Startup Stories
                  </h1>
                  <p className="mt-2 text-sm sm:text-base text-[#525252] max-w-2xl">
                    Detailed breakdowns covering how each company started, the specific problem solved, technology stack, business model, and lessons for entrepreneurs.
                  </p>
                </div>

                {/* Filter Bar (Interactive segmented controls) */}
                <div className="mb-8 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-[#737373] mr-2">Filter by Sector:</span>
                  {(['all', 'FinTech', 'FoodTech', 'E-commerce', 'EdTech', 'Consumer Tech', 'Hospitality'] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedIndustry(cat)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                        selectedIndustry === cat
                          ? 'bg-[#0B1F3A] text-white shadow-xs'
                          : 'bg-white hover:bg-[#EFECE5] text-[#525252] border border-[#DDD8CD]'
                      }`}
                    >
                      {cat === 'all' ? 'All Stories (10)' : cat}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredStories.map((story) => (
                    <StoryCard
                      key={story.id}
                      article={story}
                      onSelect={handleSelectStory}
                      isBookmarked={bookmarks.includes(story.slug)}
                      onToggleBookmark={toggleBookmark}
                      variant="standard"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* VIEW: FOUNDERS */}
            {activeTab === 'founders' && (
              <FounderDirectory onSelectFounderStory={handleSelectStory} />
            )}

            {/* VIEW: INDUSTRIES */}
            {activeTab === 'industries' && (
              <div>
                <IndustryGrid
                  onSelectCategory={(category) => setSelectedIndustry(category)}
                  selectedCategory={selectedIndustry}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E3DED4]">
                    <h3 className="font-heading font-bold text-xl text-[#0B1F3A]">
                      {selectedIndustry === 'all' ? 'Stories Across All Sectors' : `${selectedIndustry} Stories`}
                    </h3>
                    {selectedIndustry !== 'all' && (
                      <button
                        onClick={() => setSelectedIndustry('all')}
                        className="text-xs font-semibold text-[#FF7A00] hover:underline cursor-pointer"
                      >
                        Reset filter to all
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredStories.map((story) => (
                      <StoryCard
                        key={story.id}
                        article={story}
                        onSelect={handleSelectStory}
                        isBookmarked={bookmarks.includes(story.slug)}
                        onToggleBookmark={toggleBookmark}
                        variant="standard"
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* VIEW: MARKETING */}
            {activeTab === 'marketing' && (
              <MarketingSection onSelectStartupStory={handleSelectStory} />
            )}

            {/* VIEW: FUNDING */}
            {activeTab === 'funding' && (
              <FundingTracker onSelectStartup={handleSelectStory} />
            )}

            {/* VIEW: FAILURES */}
            {activeTab === 'failures' && (
              <FailureStoriesSection />
            )}

            {/* VIEW: ABOUT */}
            {activeTab === 'about' && (
              <AboutSection />
            )}

            {/* VIEW: BOOKMARKS */}
            {activeTab === 'bookmarks' && (
              <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="pb-6 mb-8 border-b border-[#E3DED4]">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] mb-2">
                    Reading List
                  </div>
                  <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#0B1F3A] tracking-tight">
                    Saved Stories & Case Studies
                  </h1>
                  <p className="mt-2 text-sm sm:text-base text-[#525252]">
                    Articles you have bookmarked for research, class discussions, and founder inspiration.
                  </p>
                </div>

                {bookmarkedArticles.length === 0 ? (
                  <div className="p-12 text-center bg-white rounded-lg border border-[#E3DED4]">
                    <BookmarkCheck className="w-10 h-10 text-[#CCC6B8] mx-auto mb-3" />
                    <h3 className="font-heading font-bold text-lg text-[#0B1F3A] mb-1">
                      Your reading list is empty
                    </h3>
                    <p className="text-xs text-[#737373] mb-5">
                      Click the bookmark icon on any startup story or case study to save it here.
                    </p>
                    <button
                      onClick={() => handleNavigate('stories')}
                      className="px-4 py-2 bg-[#0B1F3A] text-white text-xs font-semibold rounded-md hover:bg-[#15345D] transition-colors cursor-pointer"
                    >
                      Browse All 10 Stories
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bookmarkedArticles.map((story) => (
                      <StoryCard
                        key={story.id}
                        article={story}
                        onSelect={handleSelectStory}
                        isBookmarked={true}
                        onToggleBookmark={toggleBookmark}
                        variant="standard"
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </main>

      {/* Global Search Modal (Cmd+K) */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectStory={(slug) => {
          handleSelectStory(slug);
        }}
        onSelectFounder={(companySlug) => {
          handleSelectStory(companySlug);
        }}
        onSelectIndustry={(category) => {
          setSelectedIndustry(category);
          handleNavigate('industries');
        }}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
