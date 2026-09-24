"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, MessageSquare, Package, Play, Send, ShieldCheck, Sparkles, TrendingUp, Zap } from "lucide-react";
import posBilling from "@/assets/images/pos-billing.png";
import styles from "./Hero.module.css";

const perks = [
  "No credit card required",
  "Full access for 7 days",
  "Windows 10 & 11 compatible",
  "Offline-first with cloud sync",
];

const liveOrders = [
  {
    branch: "Branch 02 (Counter A)",
    item: "3M 1*10 Plaster ×2, 4Ever Gel ×1",
    amount: "$1,200.00",
    time: "Just now",
    stockStatus: "FIFO Batch #B24 deducted",
  },
  {
    branch: "Branch 01 (Express Till)",
    item: "Highland Milk 1L ×3, Ceylon Tea 400g",
    amount: "$1,840.00",
    time: "1m ago",
    stockStatus: "FIFO Batch #B19 deducted",
  },
  {
    branch: "Main Store (Till #03)",
    item: "Panadol Actifast ×10, Vitamin C Pack",
    amount: "$950.00",
    time: "2m ago",
    stockStatus: "FIFO Batch #B31 deducted",
  },
];

const sparkBars = [32, 48, 42, 65, 54, 78, 52, 88, 72, 98];

export function Hero() {
  const [orderIndex, setOrderIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const visualRef = useRef<HTMLDivElement>(null);

  // Auto-cycle live orders every 4.5 seconds for engaging dynamic animation
  useEffect(() => {
    const timer = setInterval(() => {
      setOrderIndex((prev) => (prev + 1) % liveOrders.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // 3D smooth tilt interaction on hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!visualRef.current) return;
    const rect = visualRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const currentOrder = liveOrders[orderIndex];

  return (
    <section className={styles.hero}>
      {/* Subtle modern ambient background mesh */}
      <div aria-hidden="true" className={styles.grid} />
      <div aria-hidden="true" className={styles.ambientGlow} />
      <div aria-hidden="true" className={styles.glowLeft} />

      <div className={styles.inner}>
        {/* Left Column: Value proposition & conversion */}
        <div className={styles.copy}>
          <div data-reveal="up" data-delay="0" className={styles.badge}>
            <span className={styles.pulseDot}>
              <span className={styles.pulseRing} />
            </span>
            <span className={styles.badgeTag}>MariaPoS v2.4</span>
            <span className={styles.badgeText}>Instant FIFO Billing · SMS Receipts &amp; Telegram Alerts</span>
          </div>

          <h1 data-reveal="up" data-delay="80" className={styles.title}>
            Bill in seconds. <br />
            Know <span className={styles.titleAccent}>every rupee &amp; batch</span> on your shelf.
          </h1>

          <p data-reveal="up" data-delay="160" className={styles.subtitle}>
            Engineered in Colombo for high-rush retail, pharmacies and supermarkets. MariaPoS deducts stock FIFO on every barcode scan, closes cashier shifts against the till, and sends instant digital eBills — <strong>even 100% offline</strong>.
          </p>

          <div data-reveal="up" data-delay="240" className={styles.actions}>
            <a href="#trial" className={styles.primary}>
              <span>Start 7-Day Free Trial</span>
              <ArrowRight size={18} className={styles.arrowIcon} />
            </a>
            <a href="/features" className={styles.secondary}>
              <Sparkles size={17} color="var(--red)" />
              <span>Explore Features</span>
            </a>
          </div>

          <div data-reveal="up" data-delay="320" className={styles.perks}>
            {perks.map((perk) => (
              <span key={perk} className={styles.perk}>
                <span className={styles.perkIcon}>
                  <Check size={13} color="var(--red)" strokeWidth={2.6} />
                </span>
                {perk}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive 3D Mockup & Live animated cards */}
        <div
          ref={visualRef}
          data-reveal="right"
          data-delay="200"
          className={styles.visual}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={styles.windowWrapper}
            style={{
              transform: `perspective(1200px) rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
            }}
          >
            <div className={styles.window}>
              <div className={styles.windowHeader}>
                <div className={styles.dotsGroup}>
                  <span className={`${styles.dot} ${styles.dotRed}`} />
                  <span className={`${styles.dot} ${styles.dotYellow}`} />
                  <span className={`${styles.dot} ${styles.dotGreen}`} />
                </div>
                <div className={styles.windowAddressBar}>
                  <ShieldCheck size={13} color="#1faa55" />
                  <span>MariaPoS · High-Speed Counter Billing [Shift #214 · Online]</span>
                </div>
                <div className={styles.statusIndicator}>
                  <Zap size={13} color="var(--red)" />
                  <span>FIFO Active</span>
                </div>
              </div>

              <div className={styles.screenshotFrame}>
                <Image
                  src={posBilling}
                  alt="MariaPoS high-speed billing interface with barcode scanner, cart and quick keypad"
                  className={styles.screenshot}
                  sizes="(max-width: 1000px) 100vw, 640px"
                  priority
                />
                <div className={styles.scanLine} />
              </div>
            </div>
          </div>

          {/* Floating Card 1: Live Interactive Order Notification */}
          <div className={`${styles.floatCard} ${styles.orderCard}`}>
            <div className={styles.orderInner}>
              <div className={styles.orderIconBox}>
                <Send size={16} color="#ffffff" />
              </div>
              <div className={styles.orderMeta}>
                <div className={styles.orderRowTop}>
                  <span className={styles.orderBranch}>{currentOrder.branch}</span>
                  <span className={styles.orderTime}>{currentOrder.time}</span>
                </div>
                <span className={styles.orderItem}>{currentOrder.item}</span>
                <div className={styles.orderRowBottom}>
                  <span className={styles.orderAmount}>{currentOrder.amount}</span>
                  <span className={styles.orderBatchTag}>{currentOrder.stockStatus}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card 2: Real-time Sales Graph with Sparkline */}
          <div className={`${styles.floatCard} ${styles.salesCard}`}>
            <div className={styles.salesHeader}>
              <div className={styles.salesTitleWrap}>
                <TrendingUp size={15} color="var(--red)" />
                <span className={styles.salesLabel}>Today&apos;s Revenue</span>
              </div>
              <span className={styles.salesGrowth}>+14.2%</span>
            </div>
            <div className={styles.salesAmount}>$4,740.00</div>
            <div className={styles.sparklineContainer}>
              {sparkBars.map((height, i) => (
                <div
                  key={i}
                  className={i === sparkBars.length - 1 ? styles.sparkBarActive : styles.sparkBar}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          {/* Floating Card 3: Live SMS eBill Badge */}
          <div className={`${styles.floatCard} ${styles.smsCard}`}>
            <div className={styles.smsIconBox}>
              <MessageSquare size={16} color="var(--red)" />
            </div>
            <div className={styles.smsDetails}>
              <span className={styles.smsHeading}>SMS eBill Sent</span>
              <span className={styles.smsSub}>077 •••• 412 · 18 SMS Credits Left</span>
            </div>
          </div>

          {/* Floating Card 4: FIFO Batch Depletion status */}
          <div className={`${styles.floatCard} ${styles.stockCard}`}>
            <div className={styles.stockIconBox}>
              <Package size={16} color="#d97706" />
            </div>
            <div className={styles.stockDetails}>
              <span className={styles.stockHeading}>FIFO Depletion</span>
              <span className={styles.stockSub}>Batch #B24 (Cost $380) Oldest First</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
