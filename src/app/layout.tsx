import type { Metadata } from "next";
import { Figtree, JetBrains_Mono, Poppins } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-poppins" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-figtree" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: {
    default: "MariaPoS — Offline-first Windows POS with SMS receipts, Telegram alerts & cloud sync",
    template: "%s — MariaPoS",
  },
  description:
    "MariaPoS by JAAN Network, Colombo. FIFO stock, shift & till control, SMS bill receipts, Telegram sales alerts and two-way cloud sync. 7-day free trial, no credit card.",
};

// Runs before paint so scroll-reveal elements start hidden instead of flashing in.
const motionScript = `if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion')`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${figtree.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <MotionProvider />
      </body>
    </html>
  );
}
