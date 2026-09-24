import type { Metadata } from "next";
import { BentoGrid } from "@/components/features/BentoGrid";
import { ConnectedSection } from "@/components/features/ConnectedSection";
import { TrialCta } from "@/components/sections/TrialCta";

export const metadata: Metadata = { title: "Features" };

export default function FeaturesPage() {
  return (
    <main id="top">
      <BentoGrid />
      <ConnectedSection />
      <div style={{ height: 120 }} />
      <TrialCta />
    </main>
  );
}
