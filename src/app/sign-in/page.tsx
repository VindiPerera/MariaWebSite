import { Suspense } from "react";
import Link from "next/link";
import { BarChart3, Cloud, MessageCircle, Send, ShieldCheck, Sparkles } from "lucide-react";
import { SignInForm } from "@/components/auth/SignInForm";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import styles from "@/components/auth/Auth.module.css";

export const metadata = {
  ...pageMetadata({
    title: "Sign In — MariaPoS Cloud Portal",
    description:
      "Sign in to your MariaPoS cloud portal to see sales, reports, stock, suppliers and customers from anywhere.",
    path: "/sign-in",
  }),
  robots: { index: false, follow: true },
};

const perks = [
  { text: "Live counter sales, gross profit & till reports", icon: BarChart3 },
  { text: "Automated FIFO stock, supplier ledger & credit book", icon: Cloud },
  { text: "Instant Telegram alerts & branded SMS receipt wallet", icon: Send },
];

export default function SignInPage() {
  return (
    <main id="top" className={styles.page}>
      <div className={`${styles.shell} ${styles.shellNarrow}`}>
        <aside className={styles.aside}>
          <div className={styles.asideGlow} />

          <div className={styles.asideBadge}>
            <span className={styles.asideBadgeDot} />
            <span>MariaPoS Cloud · Live Sync</span>
          </div>

          <h1 className={styles.asideTitle}>Welcome back</h1>
          <p className={styles.asideText}>
            Sign in with the same credentials you use to activate MariaPoS on your counter tills.
          </p>

          <ul className={styles.perks}>
            {perks.map(({ text, icon: Icon }) => (
              <li key={text}>
                <span className={styles.perkIconBox}>
                  <Icon size={16} />
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          {/* Security & Cloud Badge */}
          <div className={styles.cloudTrustCard}>
            <div className={styles.floatingBadgeTop}>
              <ShieldCheck size={18} color="#4ade80" />
              <span>AES-256 Enterprise Encryption</span>
            </div>
            <span className={styles.floatingBadgeSub}>
              Direct Database Connection · 99.9% Uptime · Real-Time Till Sync
            </span>
          </div>

          <div className={styles.asideFoot}>
            <MessageCircle size={15} color="#ffd6d2" />
            <span>
              Need assistance? WhatsApp{" "}
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                {site.phoneIntl}
              </a>
            </span>
          </div>
        </aside>

        <section className={styles.main}>
          <div className={styles.heading}>
            <h2 className={styles.title}>Sign in</h2>
            <p className={styles.subtitle}>
              New to MariaPoS? <Link href="/sign-up">Start your 7-day free trial</Link>
            </p>
          </div>
          <Suspense>
            <SignInForm />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
