export interface RoadmapItem {
  quarter: string;
  year: number;
  status: 'In Progress' | 'Planned';
  title: string;
  description: string;
  features: string[];
}

export const roadmapItems: RoadmapItem[] = [
  {
    quarter: 'Q1',
    year: 2025,
    status: 'In Progress',
    title: 'AI Security Assistant',
    description: 'Introducing an AI-powered security assistant for personalized recommendations.',
    features: [
      'Natural language security queries',
      'Contextual security advice'
    ]
  },
  {
    quarter: 'Q1',
    year: 2025,
    status: 'Planned',
    title: 'Interactive Security Training',
    description: 'Step-by-step interactive tutorials for common security scenarios.',
    features: [
      'Phishing awareness simulations',
      'Password strength exercises',
      'Social engineering prevention'
    ]
  },
  {
    quarter: 'Q2',
    year: 2025,
    status: 'Planned',
    title: 'Payment Security Guardian',
    description: 'Protect yourself from payment fraud and scams with advanced education.',
    features: [
      'Payment security risk assessment tools',
      'Common payment scam identification guide',
      'Secure payment method comparisons',
      'Digital wallet security best practices'
    ]
  },
  {
    quarter: 'Q2',
    year: 2025,
    status: 'Planned',
    title: 'Financial Security Education',
    description: 'Comprehensive guides to help you understand and prevent financial fraud.',
    features: [
      'Payment fraud warning signs',
      'Secure checkout verification guide',
      'Payment information protection strategies',
      'Fraud recovery step-by-step guide'
    ]
  },
  {
    quarter: 'Q2',
    year: 2025,
    status: 'Planned',
    title: 'Security Score Dashboard',
    description: 'Track your security progress with an intuitive dashboard.',
    features: [
      'Visual security metrics',
      'Personalized improvement tips',
      'Progress tracking over time'
    ]
  },
  {
    quarter: 'Q3',
    year: 2025,
    status: 'Planned',
    title: 'Security Community Hub',
    description: 'Connect with security-conscious individuals and share knowledge.',
    features: [
      'Security best practices forum',
      'Privacy tips exchange',
      'Community-verified resources'
    ]
  },
  {
    quarter: 'Q3',
    year: 2025,
    status: 'Planned',
    title: 'Advanced Privacy Tools',
    description: 'Enhanced tools for managing your digital privacy.',
    features: [
      'Privacy settings analyzer',
      'Data exposure checker',
      'Digital footprint assessment'
    ]
  }
];

