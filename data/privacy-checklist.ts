export interface ChecklistItem {
  id: string;
  category: string;
  title: string;
  description: string;
  resources?: {
    title: string;
    url: string;
  }[];
}

export const privacyChecklist: ChecklistItem[] = [
  {
    id: "2fa",
    category: "Account Security",
    title: "Enable Two-Factor Authentication",
    description: "Use 2FA on all important accounts to add an extra layer of security.",
    resources: [
      {
        title: "2FA Directory",
        url: "https://2fa.directory/",
      },
    ],
  },
  {
    id: "password-manager",
    category: "Password Security",
    title: "Use a Password Manager",
    description: "Employ a password manager to generate and store strong, unique passwords for all your accounts.",
    resources: [
      {
        title: "Password Manager Guide",
        url: "/guides/password-managers",
      },
    ],
  },
  {
    id: "vpn",
    category: "Network Security",
    title: "Use a VPN",
    description: "Utilize a VPN to encrypt your internet connection and protect your online activities.",
    resources: [
      {
        title: "VPN Comparison Guide",
        url: "/guides/vpn-comparison",
      },
    ],
  },
  {
    id: "software-updates",
    category: "Device Security",
    title: "Keep Software Updated",
    description: "Regularly update your operating system, browsers, and apps to patch security vulnerabilities.",
  },
  {
    id: "encryption",
    category: "Data Protection",
    title: "Enable Device Encryption",
    description: "Turn on full-disk encryption on all your devices to protect your data if lost or stolen.",
  },
  {
    id: "secure-messaging",
    category: "Communication",
    title: "Use Secure Messaging Apps",
    description: "Adopt end-to-end encrypted messaging apps for sensitive communications.",
    resources: [
      {
        title: "Secure Messaging Apps Comparison",
        url: "/guides/secure-messaging",
      },
    ],
  },
  {
    id: "privacy-settings",
    category: "Social Media",
    title: "Review Privacy Settings",
    description: "Regularly check and adjust privacy settings on all your social media accounts.",
  },
  {
    id: "browser-privacy",
    category: "Web Browsing",
    title: "Enhance Browser Privacy",
    description: "Use privacy-focused browser extensions and adjust browser settings to minimize tracking.",
    resources: [
      {
        title: "Browser Privacy Guide",
        url: "/guides/browser-privacy",
      },
    ],
  },
  {
    id: "data-minimization",
    category: "Data Management",
    title: "Practice Data Minimization",
    description: "Only share necessary information online and regularly delete old accounts and data.",
  },
  {
    id: "phishing-awareness",
    category: "Security Awareness",
    title: "Learn to Identify Phishing",
    description: "Educate yourself on recognizing and avoiding phishing attempts in emails and messages.",
    resources: [
      {
        title: "Phishing Prevention Guide",
        url: "/guides/phishing-prevention",
      },
    ],
  },
];

export const categories = Array.from(new Set(privacyChecklist.map(item => item.category)));

