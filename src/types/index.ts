export type IndustryCategory = 
  | 'FinTech' 
  | 'FoodTech' 
  | 'E-commerce' 
  | 'EdTech' 
  | 'Consumer Tech' 
  | 'Hospitality' 
  | 'HealthTech' 
  | 'SaaS';

export interface SourceReference {
  name: string;
  type: 'primary' | 'independent' | 'regulatory';
  detail?: string;
  url?: string;
}

export interface ImageMeta {
  url: string;
  alt: string;
  credit: string;
  caption: string;
  type: 'hero' | 'founder' | 'product' | 'culture';
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  subpoints?: string[];
  takeaways?: string[];
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface StartupArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: IndustryCategory;
  industryIcon: string;
  founded: number;
  founders: string[];
  headquarters: string;
  readingTime: string;
  publishedDate: string;
  updatedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featured: boolean;
  heroImage: ImageMeta;
  founderImage: ImageMeta;
  productImage: ImageMeta;
  quickFacts: QuickFact[];
  overview: string;
  sections: ArticleSection[];
  keyLessons: {
    number: string;
    title: string;
    description: string;
  }[];
  finalTakeaway: string;
  primarySources: SourceReference[];
  independentSources: SourceReference[];
  editorialNote: string;
  tags: string[];
  relatedSlugIds: string[];
  fundingStage: 'Bootstrapped' | 'Public' | 'Private' | 'Series E+' | 'Acquired';
}

export interface FounderProfile {
  id: string;
  name: string;
  company: string;
  companySlug: string;
  role: string;
  industry: IndustryCategory;
  education: string;
  foundedYear: number;
  bio: string;
  quote: string;
  portrait: string;
  imageCredit: string;
  lessons: string[];
}

export interface FundingRecord {
  startup: string;
  slug: string;
  industry: IndustryCategory;
  fundingStage: 'Bootstrapped' | 'Public' | 'Private';
  founded: number;
  hq: string;
  keyInvestors: string[];
  lastRoundOrMilestone: string;
  verifiedDate: string;
  source: string;
}

export interface MarketingStudy {
  id: string;
  title: string;
  startup: string;
  slug: string;
  pillar: string;
  summary: string;
  coreStrategy: string[];
  marketingLesson: string;
  audienceTakeaway: string;
  badgeText: string;
}

export interface FailureStory {
  id: string;
  company: string;
  sector: string;
  yearsActive: string;
  peakMilestone: string;
  whatHappened: string;
  rootCauses: string[];
  objectiveLessons: string[];
  sources: string[];
}
