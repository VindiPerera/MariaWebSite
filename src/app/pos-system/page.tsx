import Link from "next/link";
import { ArrowRight, Download, GraduationCap, Headphones } from "lucide-react";
import { LandingHero } from "@/components/landing/LandingHero";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { TrialCta } from "@/components/sections/TrialCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { industries } from "@/lib/industries";
import { locations } from "@/lib/locations";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import styles from "@/components/landing/Landing.module.css";

export const metadata = pageMetadata({
  title: "POS System in Sri Lanka — Billing & Inventory Software for Every City",
  description:
    "MariaPoS is a Sri Lankan POS system and billing software available island-wide: Colombo, Kandy, Galle, Jaffna, Kurunegala, Negombo, Matara, Batticaloa, Trincomalee and more. Offline-first, FIFO stock, SMS bills. Free 7-day trial.",
  path: "/pos-system",
  keywords: [
    "best POS system in Sri Lanka",
    "POS system price in Sri Lanka",
    "POS machine Sri Lanka",
    "billing system for shop Sri Lanka",
    ...locations.slice(0, 12).map((l) => `POS system ${l.name}`),
  ],
});

const steps = [
  {
    title: "Download & start your trial",
    body: `Install MariaPoS on any Windows 10 or 11 PC and use every feature free for ${site.trialDays} days.`,
    icon: Download,
  },
  {
    title: "Set up with our help",
    body: "Add products, users and bill settings. Our Colombo team helps by phone and WhatsApp.",
    icon: Headphones,
  },
  {
    title: "Go live the same day",
    body: "Cashiers learn to bill in one shift. Choose a 1, 2 or 3-year licence when you are ready.",
    icon: GraduationCap,
  },
];

const faqs = [
  {
    q: "What is the best POS system for shops in Sri Lanka?",
    a: "The best POS system is one built for local conditions: it keeps billing during internet outages, handles FIFO stock and supplier cheques, tracks customer credit and sends SMS receipts. MariaPoS is designed in Colombo for exactly these needs.",
  },
  {
    q: "Is MariaPoS made in Sri Lanka?",
    a: `Yes. MariaPoS is developed and supported by ${site.company}, ${site.address}.`,
  },
  {
    q: "Can I use MariaPoS outside Colombo?",
    a: "Yes. MariaPoS is a Windows download and works anywhere in Sri Lanka. Support is provided by phone, WhatsApp and email.",
  },
  {
    q: "Does MariaPoS support Sri Lankan payment methods?",
    a: "Yes. Cash, card, bank transfer (with reference) and cheques (with number, bank and date), plus split payments and customer credit.",
  },
];

export default function PosSystemSriLankaPage() {
  return (
    <main id="top">
      <JsonLd data={breadcrumbSchema([{ name: "POS System Sri Lanka", path: "/pos-system" }])} />
      <LandingHero
        eyebrow="Made in Sri Lanka"
        title="POS system & billing software for shops across Sri Lanka"
        intro="From Colombo to Jaffna, Galle to Trincomalee, MariaPoS gives Sri Lankan shops fast billing, accurate FIFO stock and full cash control, built for local internet, payment and business conditions."
        crumbs={[{ name: "POS System Sri Lanka", path: "/pos-system" }]}
      />

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span className="eyebrow">Getting started</span>
          <h2 className={styles.h2}>Start using MariaPoS anywhere in Sri Lanka in three steps</h2>
        </div>
        <div className={styles.cards3}>
          {steps.map(({ title, body, icon: Icon }, i) => (
            <article key={title} data-reveal="up" data-delay={i * 70} className={styles.card}>
              <span className={styles.cardIcon}>
                <Icon size={20} />
              </span>
              <h3 className={styles.cardTitle}>
                {i + 1}. {title}
              </h3>
              <p className={styles.cardBody}>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <ServiceAreas title="Find MariaPoS in your city" />

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2}>POS systems by business type</h2>
        </div>
        <div className={styles.tags}>
          {industries.map((i) => (
            <Link key={i.slug} href={`/industries/${i.slug}`} className={styles.tag}>
              {i.keyword}
            </Link>
          ))}
          <Link href="/features" className={styles.tag}>
            All features <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      <FaqBlock title="POS systems in Sri Lanka: FAQ" faqs={faqs} />
      <TrialCta />
    </main>
  );
}
