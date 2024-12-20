export interface GlossaryItem {
  term: string;
  definition: string;
}

export const glossaryItems: GlossaryItem[] = [
  {
    term: "Two-Factor Authentication (2FA)",
    definition: "A security process in which users provide two different authentication factors to verify their identity, typically something they know (password) and something they have (like a phone)."
  },
  {
    term: "Encryption",
    definition: "The process of encoding information in such a way that only authorized parties can access it, converting data into a form that appears random to anyone who doesn't have the decryption key."
  },
  {
    term: "VPN (Virtual Private Network)",
    definition: "A service that creates a secure, encrypted connection over a less secure network, allowing users to send and receive data across shared or public networks as if their devices were directly connected to the private network."
  },
  {
    term: "Phishing",
    definition: "A cybercrime in which targets are contacted by email, telephone or text message by someone posing as a legitimate institution to lure individuals into providing sensitive data."
  },
  {
    term: "Malware",
    definition: "Short for 'malicious software,' any software intentionally designed to cause damage to a computer, server, client, or computer network."
  },
  {
    term: "Firewall",
    definition: "A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules."
  },
  {
    term: "HTTPS",
    definition: "Hypertext Transfer Protocol Secure, an extension of HTTP that uses encryption for secure communication over a computer network."
  },
  {
    term: "Zero-Day Exploit",
    definition: "A cyber attack that occurs on the same day a weakness is discovered in software, before a patch or solution is available."
  },
  {
    term: "Biometrics",
    definition: "The measurement and statistical analysis of people's unique physical and behavioral characteristics, used as a method of identification and access control."
  },
  {
    term: "Ransomware",
    definition: "A type of malicious software designed to block access to a computer system until a sum of money is paid."
  },
  {
    term: "SSL/TLS",
    definition: "Secure Sockets Layer/Transport Layer Security, cryptographic protocols designed to provide communications security over a computer network."
  },
  {
    term: "Penetration Testing",
    definition: "An authorized simulated cyberattack on a computer system, performed to evaluate the security of the system."
  },
  {
    term: "Social Engineering",
    definition: "The psychological manipulation of people into performing actions or divulging confidential information."
  },
  {
    term: "Keylogger",
    definition: "A type of surveillance software that records keystrokes made by a computer user, often used maliciously to steal passwords or other sensitive information."
  },
  {
    term: "Botnet",
    definition: "A network of private computers infected with malicious software and controlled as a group without the owners' knowledge, used for various malicious purposes."
  }
];

