import { PricingPlans } from "@/components/pricing/PricingPlans";
import { Faq } from "@/components/pricing/Faq";
import { TrialCta } from "@/components/sections/TrialCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { pricingFaqs } from "@/lib/pricingFaqs";
import { breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "POS System Price in Sri Lanka — MariaPoS Pricing & Licence Plans",
  description:
    "MariaPoS pricing: one licence with every POS feature included. 1, 2 or 3-year plans with up to 35% saving, no monthly fees, no auto-renewal. Start with a free 7-day trial, no credit card.",
  path: "/pricing",
  absoluteTitle: true,
  keywords: ["POS system price Sri Lanka", "POS software price", "billing software price Sri Lanka", "POS licence cost"],
});

export default function PricingPage() {
  return (
    <main id="top">
      <JsonLd data={[breadcrumbSchema([{ name: "Pricing", path: "/pricing" }]), faqSchema(pricingFaqs)]} />
      <PricingPlans />
      <Faq />
      <TrialCta />
    </main>
  );
}
