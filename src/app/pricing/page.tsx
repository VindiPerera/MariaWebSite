import type { Metadata } from "next";
import { PricingPlans } from "@/components/pricing/PricingPlans";
import { Faq } from "@/components/pricing/Faq";
import { TrialCta } from "@/components/sections/TrialCta";

export const metadata: Metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <main id="top">
      <PricingPlans />
      <Faq />
      <TrialCta />
    </main>
  );
}
