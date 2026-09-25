import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Cloud, MapPin, MessageSquare, Package, Send, Wallet, WifiOff, type LucideIcon } from "lucide-react";
import { LandingHero } from "@/components/landing/LandingHero";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { TrialCta } from "@/components/sections/TrialCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { getIndustry } from "@/lib/industries";
import { getLocation, locations } from "@/lib/locations";
import { breadcrumbSchema, organizationId, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import styles from "@/components/landing/Landing.module.css";

type Props = { params: Promise<{ city: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map(({ slug }) => ({ city: slug }));
}

export async function generateMetadata({ params }: Props) {
  const city = getLocation((await params).city);
  if (!city) return {};
  return pageMetadata({
    title: `POS System in ${city.name} — Billing Software for ${city.name} Shops`,
    description: `Looking for a POS system in ${city.name}? MariaPoS is offline-first billing & inventory software for shops in ${city.name}, ${city.nearby.slice(0, 3).join(", ")} and across ${city.district} District. FIFO stock, SMS bills, Telegram alerts. 7-day free trial.`,
    path: `/pos-system/${city.slug}`,
    keywords: [
      `POS system ${city.name}`,
      `POS software ${city.name}`,
      `billing software ${city.name}`,
      `billing system ${city.name}`,
      `cashier system ${city.name}`,
      `POS system ${city.district} district`,
      `POS system ${city.province} Province`,
      ...city.nearby.slice(0, 4).map((town) => `POS system ${town}`),
    ],
  });
}

const reasons: { title: string; body: (city: string) => string; icon: LucideIcon }[] = [
  {
    title: "Keeps billing when the internet drops",
    body: (city) => `Every ${city} counter keeps billing, returning and closing shifts fully offline. Data syncs when the line is back.`,
    icon: WifiOff,
  },
  {
    title: "Stock that matches the shelf",
    body: () => "FIFO batch stock with real cost prices, low-stock alerts and supplier GRNs.",
    icon: Package,
  },
  {
    title: "Cash control per shift",
    body: () => "Opening float, counted cash and short/excess recorded for every cashier.",
    icon: Wallet,
  },
  {
    title: "SMS receipts",
    body: (city) => `Send bills to your ${city} customers' phones by SMS, with invoice, items and balance.`,
    icon: MessageSquare,
  },
  {
    title: "Live Telegram sales alerts",
    body: () => "See every sale on your phone, even when you are away from the shop.",
    icon: Send,
  },
  {
    title: "Cloud panel & backup",
    body: () => "Reports, products, suppliers and credit managed from any browser, with data backed up off-site.",
    icon: Cloud,
  },
];

export default async function CityPage({ params }: Props) {
  const city = getLocation((await params).city);
  if (!city) notFound();

  const path = `/pos-system/${city.slug}`;
  const focusIndustries = city.focus.map(getIndustry).filter((i) => i !== undefined);

  const faqs = [
    {
      q: `Is MariaPoS available in ${city.name}?`,
      a: `Yes. MariaPoS is a Windows download, so shops in ${city.name}, ${city.nearby.slice(0, 3).join(", ")} and the rest of ${city.district} District can install it and start a free ${site.trialDays}-day trial today.`,
    },
    {
      q: `How do I get support for MariaPoS in ${city.name}?`,
      a: `Our team in Colombo supports ${city.name} customers by phone and WhatsApp on ${site.phone}, and by email at ${site.email}.`,
    },
    {
      q: `Does MariaPoS need a constant internet connection in ${city.name}?`,
      a: "No. MariaPoS is offline-first. Billing, stock and shifts work without internet, and data syncs to the cloud panel automatically whenever a connection is available.",
    },
    {
      q: `How much does a POS system cost in ${city.name}?`,
      a: "MariaPoS uses one licence with every feature included, available for 1, 2 or 3 years. Longer plans save up to 35%. See the pricing page for current prices.",
    },
    {
      q: `What hardware do ${city.name} shops need?`,
      a: "A Windows 10 or 11 PC or touch POS terminal. A USB barcode scanner, a 58 mm or 80 mm thermal receipt printer and a cash drawer are optional.",
    },
  ];

  return (
    <main id="top">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "POS System Sri Lanka", path: "/pos-system" },
            { name: city.name, path },
          ]),
          {
            "@type": "Service",
            name: `POS system in ${city.name}`,
            serviceType: "Point of Sale software",
            provider: { "@id": organizationId },
            areaServed: [
              { "@type": "City", name: city.name },
              { "@type": "AdministrativeArea", name: `${city.district} District` },
              { "@type": "AdministrativeArea", name: `${city.province} Province` },
            ],
          },
        ]}
      />
      <LandingHero
        eyebrow={`${city.district} District · ${city.province} Province`}
        title={`POS system & billing software for shops in ${city.name}`}
        intro={`${city.note} MariaPoS gives ${city.name} retailers fast barcode billing, FIFO stock control, shift cash control, SMS receipts and live Telegram sales alerts, all in one offline-first Windows POS.`}
        crumbs={[
          { name: "POS System Sri Lanka", path: "/pos-system" },
          { name: city.name, path },
        ]}
      />

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span className="eyebrow">Why MariaPoS in {city.name}</span>
          <h2 className={styles.h2}>Why {city.name} shops choose MariaPoS</h2>
        </div>
        <div className={styles.cards3}>
          {reasons.map(({ title, body, icon: Icon }, i) => (
            <article key={title} data-reveal="up" data-delay={(i % 3) * 70} className={styles.card}>
              <span className={styles.cardIcon}>
                <Icon size={20} />
              </span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{body(city.name)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span className="eyebrow">Local businesses</span>
          <h2 className={styles.h2}>Popular with these {city.name} businesses</h2>
        </div>
        <div className={styles.cards}>
          {focusIndustries.map(({ slug, short, icon: Icon, highlights }) => (
            <Link key={slug} href={`/industries/${slug}`} data-reveal="up" className={styles.card}>
              <span className={styles.cardIcon}>
                <Icon size={20} />
              </span>
              <h3 className={styles.cardTitle}>
                {short} POS in {city.name}
              </h3>
              <p className={styles.cardBody}>{highlights.map((h) => h.title).join(" · ")}</p>
              <span className={styles.cardLink}>
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span className="eyebrow">Coverage</span>
          <h2 className={styles.h2}>Serving {city.name} and nearby areas</h2>
          <p className={styles.text}>
            MariaPoS is available to shops across {city.district} District, including:
          </p>
        </div>
        <div className={styles.tags}>
          {[city.name, ...city.nearby].map((town) => (
            <span key={town} className={styles.tag}>
              <MapPin size={12} color="var(--red)" /> {town}
            </span>
          ))}
        </div>
      </section>

      <FaqBlock title={`POS system in ${city.name}: FAQ`} faqs={faqs} />
      <ServiceAreas exclude={city.slug} title="MariaPoS in other cities" />
      <TrialCta />
    </main>
  );
}
