import { ContactSection } from "@/components/contact/ContactSection";
import { TrialCta } from "@/components/sections/TrialCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact MariaPoS — POS System Sales & Support in Colombo, Sri Lanka",
  description:
    "Contact the MariaPoS team at JAAN Network, 46 Hudson Road, Colombo. Call or WhatsApp 076 593 3255 for a POS demo, pricing, hardware advice and technical support anywhere in Sri Lanka.",
  path: "/contact",
  absoluteTitle: true,
  keywords: ["POS system supplier Colombo", "POS company Sri Lanka", "POS support Sri Lanka", "POS demo Sri Lanka"],
});

export default function ContactPage() {
  return (
    <main id="top">
      <JsonLd data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])} />
      <ContactSection />
      <TrialCta />
    </main>
  );
}
