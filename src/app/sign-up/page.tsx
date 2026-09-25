import { Suspense } from "react";
import Link from "next/link";
import { CheckCircle2, MessageCircle, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { SignUpForm } from "@/components/auth/SignUpForm";
import { countries } from "@/lib/geo";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import styles from "@/components/auth/Auth.module.css";

export const metadata = pageMetadata({
  title: "Sign Up — Start Your Free MariaPoS Trial",
  description: `Create your MariaPoS account in 60 seconds. Start a ${site.trialDays}-day free trial with full access, or choose a 1, 2 or 3-year licence. No credit card needed for the trial.`,
  path: "/sign-up",
  keywords: ["POS free trial", "POS software sign up", "try POS system free"],
});

const perks = [
  `${site.trialDays} days of full access — no credit card needed`,
  "Your own cloud dashboard, ready and configured instantly",
  "Same credentials activate MariaPoS on your Windows PC till",
  "Every feature included: billing, FIFO batch stock, shifts & reports",
  "Free setup assistance and onboarding via WhatsApp",
];

const countryNames = [...countries.map((c) => c.name)].sort();

export default function SignUpPage() {
  return (
    <main id="top" className={styles.page}>
      <div className={styles.shell}>
        <aside className={styles.aside}>
          <div className={styles.asideGlow} />

          <div className={styles.asideBadge}>
            <span className={styles.asideBadgeDot} />
            <span>7-Day Free Trial · Instant Setup</span>
          </div>

          <h1 className={styles.asideTitle}>Run your shop on MariaPoS, starting today</h1>
          <p className={styles.asideText}>
            Sign up once and get immediate access to your cloud business dashboard plus the login to activate your
            Windows POS till.
          </p>

          <ul className={styles.perks}>
            {perks.map((perk) => (
              <li key={perk}>
                <span className={styles.perkIconBox}>
                  <CheckCircle2 size={16} />
                </span>
                <span>{perk}</span>
              </li>
            ))}
          </ul>

          {/* Free Trial Guarantee Card */}
          <div className={styles.cloudTrustCard}>
            <div className={styles.floatingBadgeTop}>
              <Sparkles size={18} color="#fbbf24" />
              <span>Full Feature Access Included</span>
            </div>
            <span className={styles.floatingBadgeSub}>
              Zero Commitment · No Credit Card Required · Cancel Anytime
            </span>
          </div>

          <div className={styles.asideFoot}>
            <MessageCircle size={15} color="#ffd6d2" />
            <span>
              Questions? Chat on WhatsApp{" "}
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                {site.phoneIntl}
              </a>
            </span>
          </div>
        </aside>

        <section className={styles.main}>
          <div className={styles.heading}>
            <h2 className={styles.title}>Sign up for MariaPoS</h2>
            <p className={styles.subtitle}>
              Already registered? <Link href="/sign-in">Sign in to your portal</Link>
            </p>
          </div>
          <Suspense>
            <SignUpForm countryNames={countryNames} />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
