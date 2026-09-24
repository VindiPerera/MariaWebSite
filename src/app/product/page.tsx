import type { Metadata } from "next";
import { Showcase } from "@/components/product/Showcase";
import { TrialCta } from "@/components/sections/TrialCta";

export const metadata: Metadata = { title: "Product" };

export default function ProductPage() {
  return (
    <main id="top">
      <Showcase />
      <TrialCta />
    </main>
  );
}
