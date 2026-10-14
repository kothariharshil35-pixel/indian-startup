import { IndustryCategory } from '../types';

export interface EcosystemStat {
  value: string;
  label: string;
  subtitle: string;
  source: string;
  date: string;
}

export const ECOSYSTEM_STATS: EcosystemStat[] = [
  {
    value: '200,000+',
    label: 'DPIIT-Recognised Startups',
    subtitle: 'Official registrations under the Department for Promotion of Industry and Internal Trade',
    source: 'Startup India / DPIIT Official Bulletin',
    date: 'National Startup Day (Verified Jan 2026)',
  },
  {
    value: '53%',
    label: 'From Tier 2 & Tier 3 Cities',
    subtitle: 'Decentralized innovation outside traditional tech capitals like Bengaluru & Delhi NCR',
    source: 'Ministry of Commerce & Industry',
    date: 'Startup India Annual Review 2025–2026',
  },
  {
    value: '32',
    label: 'States & UTs with Startup Policies',
    subtitle: 'Dedicated regional government incubators, seed funds, and fiscal incentives',
    source: 'States’ Startup Ranking Framework',
    date: 'Official Gazette / DPIIT Portal 2026',
  },
];

export interface IndustryCardData {
  category: IndustryCategory;
  icon: string;
  title: string;
  examples: string[];
  description: string;
  storyCount: number;
}

export const INDUSTRY_CARDS: IndustryCardData[] = [
  {
    category: 'FinTech',
    icon: '💰',
    title: 'FinTech & Payments',
    examples: ['Zerodha', 'Razorpay', 'CRED'],
    description: 'Transforming capital markets, online checkout APIs, lending, and retail financial habits.',
    storyCount: 3,
  },
  {
    category: 'FoodTech',
    icon: '🍔',
    title: 'FoodTech & Hyperlocal',
    examples: ['Zomato', 'Swiggy'],
    description: 'Connecting millions of dining kitchens with urban consumers through real-time logistics.',
    storyCount: 2,
  },
  {
    category: 'E-commerce',
    icon: '🛒',
    title: 'E-commerce & Bharat Retail',
    examples: ['Meesho', 'Nykaa'],
    description: 'Empowering small town sellers and specialized beauty shoppers with curated digital rails.',
    storyCount: 2,
  },
  {
    category: 'EdTech',
    icon: '🎓',
    title: 'EdTech & Learning',
    examples: ['Physics Wallah'],
    description: 'Breaking down prohibitive coaching fees through creator-led, affordable test preparation.',
    storyCount: 1,
  },
  {
    category: 'Consumer Tech',
    icon: '🎧',
    title: 'Consumer Tech & D2C',
    examples: ['boAt'],
    description: 'Positioning consumer electronics as youth culture, fashion, and accessible daily style.',
    storyCount: 1,
  },
  {
    category: 'Hospitality',
    icon: '🏨',
    title: 'Hospitality & Travel',
    examples: ['OYO'],
    description: 'Standardizing fragmented budget hotels into predictable, software-driven accommodations.',
    storyCount: 1,
  },
  {
    category: 'HealthTech',
    icon: '🏥',
    title: 'HealthTech & Diagnostics',
    examples: ['PharmEasy', 'Practo'],
    description: 'Digitizing medicine deliveries, diagnostic bookings, and doctor teleconsultations.',
    storyCount: 1,
  },
  {
    category: 'SaaS',
    icon: '💻',
    title: 'SaaS & Enterprise Cloud',
    examples: ['Freshworks', 'Zoho'],
    description: 'Building world-class cloud software from Chennai and Bengaluru for global enterprises.',
    storyCount: 1,
  },
];
