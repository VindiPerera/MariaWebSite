"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, CheckCircle2, Lock, Send, ShieldCheck, Sparkles, Zap } from "lucide-react";
import ownerMobileAlerts from "@/assets/images/owner-mobile-alerts.jpg";
import { licensePrices } from "@/lib/plans";
import styles from "./PricingPlans.module.css";

const included = [
  "Every billing, inventory & report feature",
  "Cloud sync & Telegram alerts",
  "SMS receipts (prepaid credits)",
  "Free software updates for full term",
  "Priority technical & phone support",
];

type Plan = {
  id: string;
  name: string;
  price: string;
  pricePerYear: string;
  was?: string;
  unit?: string;
  note: string;
  badge?: string;
  badgeType?: "red" | "dark" | "green";
  variant: "trial" | "basic" | "popular" | "best";
  popular?: boolean;
  recommended?: boolean;
  extraFeatures?: string[];
  ctaText?: string;
};

const plans: Plan[] = [
  {
    id: "trial",
    name: "7-Day Free Trial",
    price: "Free",
    pricePerYear: "$0.00 · No card needed",
    note: "Instant cloud activation. Full feature suite for all your counters.",
    badge: "Risk-Free Trial",
    badgeType: "green",
    variant: "trial",
    ctaText: "Start 7-Day Free Trial",
  },
  {
    id: "1y",
    name: "1-Year License",
    price: licensePrices["1y"],
    pricePerYear: "$147.00 / year",
    unit: "per year",
    note: "Single payment. Full features for 12 months.",
    variant: "basic",
    ctaText: "Select 1-Year License",
  },
  {
    id: "2y",
    name: "2-Year License",
    price: licensePrices["2y"],
    pricePerYear: "$117.60 / year",
    was: "$294.00",
    note: "Save 20% compared to yearly renewal.",
    badge: "Save 20%",
    badgeType: "red",
    variant: "popular",
    popular: true,
    ctaText: "Select 2-Year License",
  },
  {
    id: "3y",
    name: "3-Year License",
    price: licensePrices["3y"],
    pricePerYear: "$95.55 / year",
    was: "$441.00",
    note: "Best value. Only $7.96 per month. Our best-selling plan.",
    badge: "Best Seller · Recommended",
    badgeType: "dark",
    variant: "best",
    recommended: true,
    extraFeatures: ["Lifetime hardware warranty"],
    ctaText: "Select 3-Year License",
  },
];

export function PricingPlans() {
  const [selectedPlan, setSelectedPlan] = useState<string>("3y");

  return (
    <section id="pricing" className={styles.section}>
      <div aria-hidden="true" className={styles.grid} />
      <div className={styles.inner}>
        <div data-reveal="up" className={`section-intro ${styles.intro}`}>
          <div className={styles.pillBadge}>
            <Sparkles size={14} color="var(--red)" />
            <span>Transparent Pricing</span>
          </div>
          <h1 className="section-title">One simple license. Every single feature.</h1>
          <p className="lead">
            No tiered feature lockouts. Every MariaPoS license includes full offline POS billing, FIFO inventory,
            Telegram sales alerts, and cloud sync. Longer terms save up to 35%.
          </p>
        </div>

        <div className={styles.plans}>
          {plans.map((plan, i) => {
            const isDark = plan.variant === "best";
            const isTrial = plan.variant === "trial";
            const isSelected = selectedPlan === plan.id;

            return (
              <div
                key={plan.id}
                data-reveal="up"
                data-delay={i * 80}
                onClick={() => setSelectedPlan(plan.id)}
                className={`${styles.card} ${
                  isDark ? styles.cardDark : isTrial ? styles.cardTrial : styles.cardLight
                } ${plan.popular ? styles.cardPopular : ""} ${isSelected ? styles.cardSelected : ""}`}
              >
                {plan.recommended && <div className={styles.recommendedRibbon}>Recommended</div>}

                {plan.badge && (
                  <div className={styles.badgeWrapper}>
                    <span
                      className={
                        plan.badgeType === "green"
                          ? styles.badgeGreen
                          : plan.badgeType === "dark"
                          ? styles.badgeDark
                          : styles.badgeRed
                      }
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className={styles.cardTop}>
                  <h3 className={isDark ? styles.planNameDark : styles.planName}>{plan.name}</h3>
                  <div className={styles.priceRow}>
                    <span className={isDark ? styles.priceDark : styles.price}>{plan.price}</span>
                    {plan.was && <span className={isDark ? styles.wasDark : styles.was}>{plan.was}</span>}
                  </div>
                  <span
                    className={
                      isDark ? styles.rateDark : isTrial ? styles.rateGreen : styles.rate
                    }
                  >
                    {plan.pricePerYear}
                  </span>
                  <p className={isDark ? styles.noteDark : styles.note}>{plan.note}</p>
                </div>

                <div className={isDark ? styles.dividerDark : styles.divider} />

                <div className={styles.featureList}>
                  {included.map((item) => (
                    <div key={item} className={styles.featureRow}>
                      <span
                        className={
                          isDark
                            ? styles.checkDark
                            : isTrial
                            ? styles.checkGreen
                            : styles.checkLight
                        }
                      >
                        <Check size={14} strokeWidth={2.6} />
                      </span>
                      <span className={isDark ? styles.featureTextDark : styles.featureText}>{item}</span>
                    </div>
                  ))}
                  {plan.extraFeatures?.map((item) => (
                    <div key={item} className={styles.featureRow}>
                      <span className={isDark ? styles.checkDark : styles.checkLight}>
                        <ShieldCheck size={14} strokeWidth={2.6} />
                      </span>
                      <span className={isDark ? styles.featureTextDark : styles.featureText}>
                        <strong>{item}</strong>
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/sign-up?plan=${plan.id}`}
                  className={`${styles.buyBtn} ${
                    isDark ? styles.buyBtnDark : isTrial ? styles.buyBtnTrial : styles.buyBtnLight
                  }`}
                >
                  <span>{plan.ctaText ?? `Select ${plan.name}`}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Visual Included Value Card */}
        <div data-reveal="up" className={styles.ownerFreedomCard}>
          <div className={styles.ownerImgCol}>
            <Image
              src={ownerMobileAlerts}
              alt="Store owner receiving Telegram sales notification anywhere"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className={styles.ownerImg}
            />
            <div className={styles.ownerPill}>
              <Send size={12} color="#ffffff" />
              <span>Instant Telegram Push</span>
            </div>
          </div>
          <div className={styles.ownerTextCol}>
            <span className={styles.ownerEyebrow}>Included in Every Plan</span>
            <h3 className={styles.ownerHeading}>Run your store from your pocket, wherever you are</h3>
            <p className={styles.ownerDesc}>
              No monthly cloud fees or server maintenance charges. Every trial and multi-year licence includes automated
              cloud backup, multi-device web reports, and instant Telegram sales alerts pushed directly to your phone.
            </p>
            <div className={styles.ownerPerks}>
              <div className={styles.ownerPerk}>
                <CheckCircle2 size={15} color="#16a34a" />
                <span>Unlimited Telegram sale alerts</span>
              </div>
              <div className={styles.ownerPerk}>
                <CheckCircle2 size={15} color="#16a34a" />
                <span>Multi-branch comparison in browser</span>
              </div>
              <div className={styles.ownerPerk}>
                <CheckCircle2 size={15} color="#16a34a" />
                <span>Zero surprise cloud surcharges</span>
              </div>
            </div>
          </div>
        </div>

        <div data-reveal="up" className={styles.securityBanner}>
          <div className={styles.securityLeft}>
            <ShieldCheck size={20} color="#1faa55" />
            <span>Processed securely via global payment gateway · Visa, Mastercard, AMEX &amp; Mobile Pay supported</span>
          </div>
          <div className={styles.linksRow}>
            <Link href="/sign-up?plan=trial" className={styles.footLink}>
              Try 7 days free first →
            </Link>
            <span className={styles.dotSep}>•</span>
            <Link href="/contact" className={styles.footLink}>
              Multi-till / Multi-branch pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
