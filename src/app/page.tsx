import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { BrandPromoter } from "@/components/home/BrandPromoter";
import { AboutSystem } from "@/components/home/AboutSystem";
import { ReceiptShowcase } from "@/components/home/ReceiptShowcase";
import { WhySection } from "@/components/home/WhySection";
import { WhoItsFor } from "@/components/home/WhoItsFor";
import { Benefits } from "@/components/home/Benefits";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { TrialCta } from "@/components/sections/TrialCta";

const homeFaqs = [
  {
    q: "What is MariaPoS?",
    a: "MariaPoS is a POS (point of sale) and inventory management system for Windows, developed by JAAN Network (PVT) Ltd. It handles billing, FIFO stock, suppliers, customer credit, shifts, expenses and reports, and syncs to a cloud panel.",
  },
  {
    q: "Which businesses can use MariaPoS?",
    a: "Any business that sells over a counter: supermarkets, grocery shops, pharmacies, hardware stores, clothing and textile shops, bookshops, mobile and electronics shops, cosmetics stores, bakeries, wholesalers and spare parts shops.",
  },
  {
    q: "Does MariaPoS work without internet?",
    a: "Yes. MariaPoS is offline-first. Billing, stock, returns and shifts all work without internet, and data syncs to the cloud automatically when the connection returns.",
  },
  {
    q: "What hardware do I need?",
    a: "A Windows 10 or 11 PC or touch POS terminal. Optional: a USB barcode scanner, a 58 mm or 80 mm thermal receipt printer, a cash drawer and a barcode label printer.",
  },
  {
    q: "Can I send bills to customers by SMS?",
    a: "Yes. MariaPoS sends SMS e-bills with invoice number, items, totals and balance, using prepaid SMS credits that you can top up anytime.",
  },
  {
    q: "How much does MariaPoS cost?",
    a: "One licence includes every feature. Plans are available for 1, 2 or 3 years, with up to 35% saving on longer terms, and a 7-day free trial with no credit card.",
  },
];

export default function HomePage() {
  return (
    <main id="top">
      <Hero />
      <TrustBar />
      <BrandPromoter />
      <AboutSystem />
      <ReceiptShowcase />
      <WhySection />
      <WhoItsFor />
      <Benefits />
      <FaqBlock title="POS system questions, answered" faqs={homeFaqs} />
      <TrialCta />
    </main>
  );
}
