import type { Metadata } from "next";
import { BentoGrid } from "@/components/features/BentoGrid";
import { FeatureSimulator } from "@/components/features/FeatureSimulator";
import { ConnectedSection } from "@/components/features/ConnectedSection";
import { FeatureMatrix } from "@/components/features/FeatureMatrix";
import { TrialCta } from "@/components/sections/TrialCta";

export const metadata: Metadata = {
  title: "Features — Offline POS, FIFO Stock, SMS Receipts & Telegram Alerts",
  description:
    "Explore MariaPoS features: Instant barcode billing, FIFO batch stock deduction, blind shift close, SMS eBills, owner Telegram alerts, and 100% offline-first reliability.",
};

export default function FeaturesPage() {
  return (
    <main id="top">
      <BentoGrid />
      <FeatureSimulator />
      <ConnectedSection />
      <FeatureMatrix />
      <TrialCta />
    </main>
  );
}
