import { FailureStory } from '../types';

export const FAILURE_STORIES: FailureStory[] = [
  {
    id: 'byjus-hyper-scaling',
    company: "Byju's (Think & Learn)",
    sector: 'EdTech / K-12 Tutoring',
    yearsActive: '2011 – Restructuring / Insolvency Proceedings (2024–2026)',
    peakMilestone: 'Peak paper valuation of $22 Billion; Multi-billion acquisition spree (Aakash, WhiteHat Jr, Great Learning)',
    whatHappened:
      'Byju\'s rode a massive wave of capital injection during the pandemic, acquiring dozens of domestic and international education companies using high-interest foreign term loans ($1.2B TLB). When physical schools reopened, demand normalized sharply while interest burdens, delayed financial reporting, auditor resignations, and aggressive sales backlash precipitated an unprecedented liquidity crisis.',
    rootCauses: [
      'Debt-Fueled Acquisitions: Borrowing heavily to acquire companies at the peak of the market before integrating core operations.',
      'Governance & Reporting Lapses: Delays in statutory audits and financial filings eroded lender and board confidence.',
      'Aggressive Push Sales: Heavy reliance on hard-sell direct sales tactics alienated parents and drew regulatory and media scrutiny.',
      'Post-Pandemic Demand Reversal: Failure to right-size operations when pandemic-induced online tutoring demand contracted.',
    ],
    objectiveLessons: [
      'Valuation is not capital stability: High paper valuations can create a dangerous illusion of invulnerability.',
      'Debt magnifies operational volatility: Servicing foreign currency debt requires predictable cash flows, not speculative projections.',
      'Customer advocacy over sales pressure: In education, parent trust is fragile; aggressive sales tactics destroy long-term brand equity.',
    ],
    sources: [
      'National Company Law Tribunal (NCLT) Orders',
      'Ministry of Corporate Affairs Statutory Disclosures',
      'The Morning Context & Ken Investigative Reports',
    ],
  },
  {
    id: 'dunzo-burn-rate',
    company: 'Dunzo',
    sector: 'Quick Commerce & Hyperlocal Delivery',
    yearsActive: '2014 – Substantially Scaled Down (2023–2025)',
    peakMilestone: 'Backed by Google and Reliance Retail; Iconic concierge delivery brand across Bengaluru and Mumbai',
    whatHappened:
      'Dunzo pioneered errand-running and 15-minute grocery delivery in India. However, the pivot from a high-margin concierge model ("pick up my forgotten keys") to a capital-intensive dark store grocery network (Dunzo Daily) pitted it against deep-pocketed conglomerates (Blinkit, Swiggy, Zepto) that out-executed on supply-chain and capital endurance.',
    rootCauses: [
      'Transitioning to High Cash-Burn Verticals: Abandoning its defensible concierge niche to battle in low-margin grocery dark stores.',
      'Severe Dark Store Underutilization: Establishing hundreds of micro-warehouses before proving unit economics in core zones.',
      'Lethal Well-Capitalized Competition: Competing against platforms with diversified revenue engines (Zomato/Blinkit and Swiggy).',
      'Dependency on Continuous Equity Rounds: Inability to survive when global venture capital markets tightened in 2022–2023.',
    ],
    objectiveLessons: [
      'Protect your profitable niche: Dominating a high-margin specialty is often safer than chasing a low-margin commodity volume play.',
      'Subsidized delivery is not customer retention: Shoppers bought due to discounts, quickly fleeing once delivery fees normalized.',
      'Capital structure must match unit economics: Capital-intensive logistics require disciplined gross margins on every single order.',
    ],
    sources: [
      'Audited RoC Financial Returns of Dunzo Digital Private Limited',
      'Economic Times Tech Special',
      'Business Standard Logistics Analysis',
    ],
  },
  {
    id: 'stayzilla-credit-cycles',
    company: 'Stayzilla',
    sector: 'Budget Stays & Homestays',
    yearsActive: '2005 – 2017',
    peakMilestone: 'Raised over $30 Million from Matrix Partners and Nexus Venture Partners; 55,000+ stays listed',
    whatHappened:
      'Stayzilla was an early pioneer in Indian homestays and budget accommodations. The company pursued rapid supply expansion and spent heavily on national television campaigns to compete against OYO and MakeMyTrip. However, high customer acquisition costs, long receivable cycles from offline partners, and cash-flow drying up led to sudden operational suspension.',
    rootCauses: [
      'Chasing Gross Booking Value over Gross Margins: Expanding listings without verifying recurring operational profitability.',
      'Heavy Offline Working Capital Lockups: Vendor disputes and slow receivable cycles severely squeezed available liquidity.',
      'Asymmetric Capital Competition: Competitors with ten times larger war-chests subsidized room rates below cost.',
    ],
    objectiveLessons: [
      'Cash flow is the lifeblood: A startup dies from lack of liquidity long before it dies from lack of ideas.',
      'Beware of unsupportable marketing CAC: Spending large marketing budgets to acquire low-retention customers is unsustainable.',
      'Vendor alignment is paramount: Strained vendor relationships can paralyze business continuity during downturns.',
    ],
    sources: [
      'Founder Post-Mortem by Yogendra Vasupal (Medium 2017)',
      'YourStory Archive Case Study',
      'Mint Startup Failure Review',
    ],
  },
  {
    id: 'kool-kanya-monetization',
    company: 'Kool Kanya',
    sector: 'Community & Professional Network for Women',
    yearsActive: '2019 – 2022',
    peakMilestone: 'Active community of over 200,000 women professionals and freelancers across urban India',
    whatHappened:
      'Kool Kanya built an engaged and loyal community of women seeking career advice, freelance gigs, and mentorship. Despite passionate engagement and vibrant social media channels, translating free community goodwill into recurring paid subscriptions or upskilling course revenue proved difficult, forcing a closure when venture runways shortened.',
    rootCauses: [
      'Community vs Commercial Intent: High engagement on free social forums does not automatically convert into paying customers.',
      'Monetization Timing: Hesitation to introduce monetized gates early meant users became conditioned to free utility.',
      'High Content Production Costs: High overhead in producing bespoke editorial content and digital events without proportional revenue.',
    ],
    objectiveLessons: [
      'Test willingness to pay on day one: Commercial intent must be validated early, not deferred until growth slows.',
      'Community is a channel, not a business model: Enduring companies pair community trust with a clear transaction or software engine.',
    ],
    sources: [
      'Company Public Statement of Wind Down (2022)',
      'Inc42 Community Platform Analysis',
    ],
  },
  {
    id: 'peppertap-negative-margins',
    company: 'PepperTap',
    sector: 'On-Demand Grocery Delivery',
    yearsActive: '2014 – 2016',
    peakMilestone: 'Third-largest on-demand grocery player in India; Raised $51 Million from Sequoia and Snapdeal',
    whatHappened:
      'PepperTap promised 2-hour grocery delivery from local kirana stores. To acquire consumers rapidly across 30+ cities, it offered deep discounts on daily staple goods while also absorbing delivery costs. Because gross margins on groceries were thin (often 2–5%) and discounts exceeded 15–20%, every order generated a net cash loss. The founders prudently decided to shut down before burning their remaining treasury.',
    rootCauses: [
      'Negative Unit Economics at Scale: Losing money on every order meant higher sales only accelerated the death of the business.',
      'Lack of Inventory Control: Kirana store shelves frequently lacked items ordered on the app, causing high cancellation rates.',
      'Over-Expansion across 30+ Cities: Spreading operational teams across second-tier cities before proving density economics in Delhi NCR.',
    ],
    objectiveLessons: [
      'Scale does not fix negative gross margins: If you lose money on the unit sale, you cannot make it up in volume.',
      'Physical supply-chain synchronization is vital: You cannot sell digital goods you do not physically track or hold.',
      'Knowing when to halt: The founders demonstrated maturity by returning remaining capital to investors and pivoting to logistics (NuvoEx).',
    ],
    sources: [
      'Navneet Singh Founder Post-Mortem Disclosures',
      'Inc42 Case Study: Why PepperTap Shut Down',
      'LiveMint Retrospective',
    ],
  },
];
