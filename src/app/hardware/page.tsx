import type { Metadata } from "next";
import { HardwareSection } from "@/components/hardware/HardwareSection";
import { TrialCta } from "@/components/sections/TrialCta";

export const metadata: Metadata = { title: "Hardware" };

export default function HardwarePage() {
  return (
    <main id="top">
      <HardwareSection />
      <TrialCta />
    </main>
  );
}
