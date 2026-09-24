import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { WhySection } from "@/components/home/WhySection";
import { ExploreSection } from "@/components/home/ExploreSection";
import { TrialCta } from "@/components/sections/TrialCta";

export default function HomePage() {
  return (
    <main id="top">
      <Hero />
      <TrustBar />
      <WhySection />
      <ExploreSection />
      <TrialCta />
    </main>
  );
}
