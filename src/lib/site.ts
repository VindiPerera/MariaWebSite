// Canonical origin used for metadata, sitemap and structured data. Set NEXT_PUBLIC_SITE_URL in production.
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://mariapos.jaan.lk").replace(/\/+$/, "");

export const site = {
  name: "MariaPoS",
  url: siteUrl,
  company: "JAAN Network (PVT) Ltd.",
  poweredBy: "JAAN Network (PVT) Ltd.",
  conceptBy: "Thejan Bathiya",
  tagline: "The world's best hybrid POS software — Powered by JAAN Network, Concept by Thejan Bathiya",
  phone: "+94 76 593 3255",
  phoneIntl: "+94765933255",
  phoneHref: "https://wa.me/94765933255",
  whatsappHref: "https://wa.me/94765933255",
  whatsappNote: "WhatsApp contact only",
  downloadExeUrl: "/downloads/MariaPoS-Setup.exe",
  email: "mariaPOS@gmail.com",
  emailHref: "mailto:mariaPOS@gmail.com",
  demoHref: "https://wa.me/94765933255?text=Hi%20MariaPoS,%20I'd%20like%20to%20request%20a%20demo",
  facebookHref: "https://www.facebook.com/mariaposlk",
  address: "JAAN Network Global Digital Support",
  streetAddress: "Global Digital Operations",
  city: "Global",
  region: "Worldwide",
  postalCode: "00000",
  country: "Worldwide",
  geo: { latitude: 6.9022, longitude: 79.8533 },
  cloudPanelUrl: "https://maria-cloud.jaan.lk",
  trialDays: 7,
} as const;

/** Search phrases the whole site targets. Page-level keywords are added on top of these. */
export const coreKeywords = [
  "POS system",
  "POS software",
  "retail POS software",
  "billing software",
  "point of sale system",
  "offline POS system",
  "Windows POS software",
  "retail POS",
  "inventory management software",
  "shop billing system",
  "cashier system",
  "SMS bill receipt POS",
  "FIFO stock management software",
  "cloud POS",
  "MariaPoS",
  "JAAN Network",
];

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Industries", href: "/industries" },
  { label: "Product", href: "/product" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const legalLinks: NavLink[] = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "All features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Product tour", href: "/product" },
      { label: "Free trial", href: "#trial" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "POS Billing", href: "/features#billing-checkout" },
      { label: "FIFO Inventory", href: "/features#inventory-stock" },
      { label: "Shifts & Till", href: "/features#shifts-cash" },
      { label: "Reports", href: "/features#reports-analytics" },
      { label: "SMS & Telegram", href: "/features#cloud-alerts" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Supermarket POS", href: "/industries/supermarket-grocery" },
      { label: "Pharmacy POS", href: "/industries/pharmacy" },
      { label: "Hardware shop POS", href: "/industries/hardware-store" },
      { label: "Clothing store POS", href: "/industries/clothing-textile" },
      { label: "All industries", href: "/industries" },
    ],
  },
  {
    title: "POS Worldwide",
    links: [
      { label: "POS system USA", href: "/pos-system/united-states" },
      { label: "POS system UK", href: "/pos-system/united-kingdom" },
      { label: "POS system India", href: "/pos-system/india" },
      { label: "POS system Bangladesh", href: "/pos-system/bangladesh" },
      { label: "POS system UAE", href: "/pos-system/united-arab-emirates" },
      { label: "POS system Sri Lanka", href: "/pos-system/sri-lanka" },
      { label: "All countries", href: "/pos-system" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Book a demo", href: "/contact#demo" },
      { label: "Hardware & Setup", href: "/product#hardware-ready" },
      { label: "FAQ", href: "/pricing#faq" },
    ],
  },
];
