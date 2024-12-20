export interface PrivacyResource {
  id: string;
  title: string;
  description: string;
  content: string;
  links: {
    title: string;
    url: string;
  }[];
}

export const privacyResources: PrivacyResource[] = [
  {
    id: "data-minimization",
    title: "Data Minimization",
    description: "Learn how to reduce your digital footprint by minimizing the data you share online.",
    content: `Data minimization is a crucial privacy practice that involves limiting the amount of personal information you share online. By reducing your digital footprint, you can significantly decrease the risk of your data being misused or falling into the wrong hands.

Key principles of data minimization:

1. Share only what's necessary: Before providing personal information, ask yourself if it's truly required.
2. Use privacy-focused services: Choose services that collect minimal data or offer strong privacy controls.
3. Regularly audit and delete: Review the data you've shared and delete what's no longer needed.
4. Be cautious with social media: Limit the personal information you share on social platforms.
5. Use temporary or disposable services: For one-time actions, consider using temporary email addresses or phone numbers.

By practicing data minimization, you can maintain better control over your personal information and reduce your vulnerability to data breaches and identity theft.`,
    links: [
      {
        title: "GDPR on Data Minimization",
        url: "https://gdpr-info.eu/issues/data-minimisation/",
      },
      {
        title: "FTC's Privacy and Security Principles",
        url: "https://www.ftc.gov/policy/consumer-protection/privacy-security",
      },
    ],
  },
  {
    id: "encryption-basics",
    title: "Encryption Basics",
    description: "Understand the fundamentals of encryption and how it protects your data.",
    content: `Encryption is a process that scrambles readable text so it can only be read by the person who has the secret code, or decryption key. It's a fundamental tool for protecting digital data, both in transit and at rest.

Key concepts in encryption:

1. Symmetric Encryption: Uses the same key for both encryption and decryption. It's faster but requires secure key exchange.
2. Asymmetric Encryption: Uses a pair of public and private keys. The public key can be freely shared and is used to encrypt, while the private key is kept secret and used to decrypt.
3. End-to-End Encryption (E2EE): Ensures that data is encrypted on the sender's system before transmission and only decrypted once it reaches the intended recipient.
4. Transport Layer Security (TLS): Protects data in transit, commonly used in HTTPS connections.
5. Full Disk Encryption: Protects all data stored on a device by encrypting the entire disk.

Common encryption algorithms include AES (Advanced Encryption Standard) for symmetric encryption and RSA for asymmetric encryption. Always use strong, up-to-date encryption methods and keep your encryption keys secure.`,
    links: [
      {
        title: "NIST Encryption Guidelines",
        url: "https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines",
      },
      {
        title: "EFF's Surveillance Self-Defense: Encryption",
        url: "https://ssd.eff.org/en/module/what-encryption",
      },
    ],
  },
  {
    id: "privacy-settings",
    title: "Privacy Settings Guide",
    description: "Learn how to configure privacy settings on popular platforms to protect your personal information.",
    content: `Properly configuring privacy settings on the platforms and services you use is crucial for maintaining control over your personal information. Here's a guide to help you navigate privacy settings on some popular platforms:

1. Social Media Platforms:
   - Facebook: Go to Settings & Privacy > Settings > Privacy. Review and adjust who can see your posts, friend list, and personal information.
   - Twitter: Go to Settings and privacy > Privacy and safety. Consider making your account private and limiting data sharing.
   - Instagram: Go to Settings > Privacy. Adjust account privacy, interactions, and data sharing options.

2. Google:
   - Visit myaccount.google.com and go to Data & Privacy.
   - Review and adjust your activity controls, ad personalization, and what data Google can collect.

3. Apple:
   - On iOS devices, go to Settings > Privacy & Security.
   - Review app permissions and adjust tracking settings.

4. Web Browsers:
   - Chrome: Go to Settings > Privacy and security. Adjust cookies, tracking, and data collection settings.
   - Firefox: Go to Options > Privacy & Security. Configure tracking protection and data collection preferences.
   - Safari: Go to Preferences > Privacy. Manage website tracking and cookie settings.

5. Windows 10/11:
   - Go to Settings > Privacy & Security.
   - Review and adjust settings for various features like location, camera, microphone, and diagnostics.

6. macOS:
   - Go to System Preferences > Security & Privacy.
   - Review and adjust settings for various features and app permissions.

Remember to regularly review and update your privacy settings, as platforms often change their policies and introduce new features that may affect your privacy.`,
    links: [
      {
        title: "EFF's Guide to Privacy Settings",
        url: "https://www.eff.org/deeplinks/2021/10/how-adjust-your-facebook-privacy-settings",
      },
      {
        title: "Consumer Reports' Privacy Settings Guide",
        url: "https://www.consumerreports.org/privacy/online-privacy-and-security-guide/",
      },
    ],
  },
];

