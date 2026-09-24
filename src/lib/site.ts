export const site = {
  name: "MariaPoS",
  company: "JAAN Network (PVT) Ltd.",
  tagline: "Offline-first Windows POS by JAAN Network (PVT) Ltd.",
  phone: "076 593 3255",
  phoneHref: "tel:+94765933255",
  whatsappHref: "https://wa.me/94765933255",
  email: "mariaPOS@gmail.com",
  emailHref: "mailto:mariaPOS@gmail.com",
  demoHref: "mailto:mariaPOS@gmail.com?subject=MariaPoS%20demo",
  address: "46 Hudson Road, Colombo, Sri Lanka",
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Product", href: "/product" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Product tour", href: "/product" },
      { label: "Free trial", href: "#trial" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "POS Billing", href: "/features#billing" },
      { label: "FIFO Inventory", href: "/features#inventory" },
      { label: "SMS receipts", href: "/features#connected" },
      { label: "Telegram alerts", href: "/features#connected" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About MariaPoS", href: "/product" },
      { label: "Contact", href: "/contact" },
      { label: "Book a demo", href: "/contact#demo" },
      { label: "FAQ", href: "/pricing#faq" },
    ],
  },
];
