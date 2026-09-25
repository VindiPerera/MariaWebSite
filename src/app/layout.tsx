import type { Metadata, Viewport } from "next";
import { Figtree, JetBrains_Mono, Poppins } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { coreKeywords, site } from "@/lib/site";
import { ogImage, organizationSchema, softwareSchema, websiteSchema } from "@/lib/seo";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-poppins" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-figtree" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jetbrains" });

const defaultTitle = "MariaPoS — Offline-First Windows POS System & Billing Software";
const defaultDescription =
  "MariaPoS is an offline-first POS system and inventory management software for retail counters. Barcode billing, FIFO stock, shifts & till control, SMS e-bills, Telegram sales alerts and cloud sync. 7-day free trial.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: defaultTitle, template: "%s | MariaPoS" },
  description: defaultDescription,
  applicationName: site.name,
  keywords: coreKeywords,
  authors: [{ name: site.company, url: site.url }],
  creator: site.company,
  publisher: site.company,
  category: "Business software",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_LK",
    url: "/",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
  },
  twitter: { card: "summary_large_image", title: defaultTitle, description: defaultDescription, images: [ogImage.url] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  // Local SEO: tells search engines where the business is based.
  other: {
    "geo.region": "LK-11",
    "geo.placename": "Colombo, Sri Lanka",
    "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
    ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#c62828",
  width: "device-width",
  initialScale: 1,
};

// Runs before paint so scroll-reveal elements start hidden instead of flashing in.
const motionScript = `if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion')`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${figtree.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
        <JsonLd data={[organizationSchema, websiteSchema, softwareSchema]} />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingContact />
        <MotionProvider />
      </body>
    </html>
  );
}
