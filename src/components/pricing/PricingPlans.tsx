import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import styles from "./PricingPlans.module.css";

const included = [
  "Every billing, inventory & report feature",
  "Cloud sync & Telegram alerts",
  "SMS receipts (prepaid credits)",
  "Updates for the full term",
  "Email support",
];

type Plan = {
  id: string;
  name: string;
  price: string;
  was?: string;
  unit?: string;
  note: string;
  badge?: string;
  variant: "basic" | "popular" | "best";
};

const plans: Plan[] = [
  { id: "1y", name: "1-Year", price: "$147", unit: "/ year", note: "Billed once. Renew when you choose.", variant: "basic" },
  {
    id: "2y",
    name: "2-Year",
    price: "$235.20",
    was: "$294",
    note: "$117.60 per year · billed once for 2 years",
    badge: "Save 20%",
    variant: "popular",
  },
  {
    id: "3y",
    name: "3-Year",
    price: "$286.65",
    was: "$441",
    note: "$95.55 per year · billed once for 3 years",
    badge: "Best value · Save 35%",
    variant: "best",
  },
];

function PlanContent({ plan }: { plan: Plan }) {
  const dark = plan.variant === "best";
  return (
    <>
      {plan.badge ? (
        <div className={styles.planHeader}>
          <h3 className={styles.planName}>{plan.name}</h3>
          <span className={dark ? styles.badgeSolid : styles.badgeSoft}>{plan.badge}</span>
        </div>
      ) : (
        <h3 className={styles.planName}>{plan.name}</h3>
      )}
      <div className={styles.priceBlock}>
        <div className={`${styles.priceRow} ${plan.unit ? styles.priceRowTight : ""}`}>
          <span className={styles.price}>{plan.price}</span>
          {plan.unit && <span className={styles.unit}>{plan.unit}</span>}
          {plan.was && <span className={dark ? styles.wasDark : styles.was}>{plan.was}</span>}
        </div>
        <span className={dark ? styles.noteDark : styles.note}>{plan.note}</span>
      </div>
      <div className={dark ? styles.includedDark : styles.included}>
        {included.map((item) => (
          <span key={item} className={styles.includedItem}>
            <Check size={16} color={dark ? "var(--coral)" : "var(--red)"} />
            {item}
          </span>
        ))}
      </div>
      <a href={`#checkout-${plan.id}`} className={styles[`buy_${plan.variant}`]}>
        Buy with PayHere
        {dark && <ArrowRight size={16} />}
      </a>
    </>
  );
}

export function PricingPlans() {
  return (
    <section id="pricing" className={styles.section}>
      <div aria-hidden="true" className={styles.grid} />
      <div className={styles.inner}>
        <div data-reveal="up" className={`section-intro ${styles.intro}`}>
          <span className="eyebrow">Pricing</span>
          <h2 className="section-title">One license. Every feature. Pick the term.</h2>
          <p className="lead">
            All plans are single-till and include the full feature set. Longer terms cost less per year. Checkout runs
            through PayHere.
          </p>
        </div>

        <div className={styles.plans}>
          {plans.map((plan, i) =>
            plan.variant === "best" ? (
              <div key={plan.id} data-reveal="up" data-delay={i * 100} className={styles.bestBorder}>
                <div className={styles.bestCard}>
                  <PlanContent plan={plan} />
                </div>
              </div>
            ) : (
              <div
                key={plan.id}
                data-reveal="up"
                data-delay={i * 100 || undefined}
                className={`${styles.card} ${plan.variant === "popular" ? styles.cardPopular : ""}`}
              >
                <PlanContent plan={plan} />
              </div>
            ),
          )}
        </div>

        <div data-reveal="up" className={styles.footnotes}>
          <span>
            Not ready to buy?{" "}
            <a href="#trial" className={styles.footLink}>
              Try every feature free for 7 days
            </a>
          </span>
          <span>
            Multi-till or multi-branch?{" "}
            <Link href="/contact" className={styles.footLink}>
              Ask for pricing
            </Link>
          </span>
          <span className={styles.payhere}>PayHere badge</span>
        </div>
      </div>
    </section>
  );
}
