import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";
import { TrialCta } from "@/components/sections/TrialCta";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main id="top">
      <ContactSection />
      <TrialCta />
    </main>
  );
}
