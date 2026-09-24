import {
  Barcode,
  Calendar,
  CheckCircle2,
  DollarSign,
  FileSpreadsheet,
  Lock,
  Package,
  Receipt,
  RotateCcw,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  Truck,
  Undo2,
  Users,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";
import styles from "./BentoGrid.module.css";

const keypad = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "00", "↵"];
const reportBars = [38, 52, 44, 70, 58, 82, 66, 92];

function SoftIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className={styles.softIcon}>
      <Icon size={19} color="var(--red)" />
    </span>
  );
}

function SolidIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className={styles.solidIcon}>
      <Icon size={19} color="#ffffff" />
    </span>
  );
}

export function BentoGrid() {
  return (
    <section id="features" className={styles.section}>
      <div data-reveal="up" className={styles.header}>
        <span className="eyebrow">Enterprise POS Architecture</span>
        <h2 className={`section-title ${styles.title}`}>Built around how a real counter actually operates</h2>
        <p className={`lead ${styles.intro}`}>
          Every module is linked to a single, lightning-fast FIFO stock ledger. A sale, return, supplier goods receipt, or cashier shift updates the exact same numbers instantly without lag.
        </p>
      </div>

      <div className={styles.grid}>
        {/* Module 1: High-Speed POS Billing */}
        <article id="billing" data-reveal="up" className={`${styles.large} ${styles.billing}`}>
          <div className={styles.cardTop}>
            <SolidIcon icon={ShoppingCart} />
            <span className={styles.badgePill}>Counter Speed</span>
          </div>
          <h3 className={styles.titleLarge}>High-Velocity POS Billing</h3>
          <p className={styles.billingBody}>
            Engineered for zero-delay queues. Barcode scanner detection, keyboard shortcuts (F1–F12), favorites row, split cash &amp; card payments, and automatic FIFO stock deduction on every bill printed or texted.
          </p>
          <div className={styles.keypadPreview}>
            <div className={styles.keypadDisplay}>
              <span className={styles.scannerBadge}>
                <Barcode size={14} />
                <span>Barcode Scan Ready</span>
              </span>
              <span className={styles.liveTotal}>$4,740.00</span>
            </div>
            <div aria-hidden="true" className={styles.keypad}>
              {keypad.map((key) => (
                <span key={key} className={key === "↵" ? styles.keyEnter : styles.key}>
                  {key}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Module 2: Cashier Shift & Till Balancing */}
        <article id="shifts" data-reveal="up" data-delay="80" className={`${styles.small} ${styles.card}`}>
          <div className={styles.cardTop}>
            <SoftIcon icon={Wallet} />
            <span className={styles.statusLive}>Shift #214</span>
          </div>
          <h3 className={styles.titleSmall}>Shifts &amp; Till Control</h3>
          <p className={styles.body}>
            Cashiers open and close shifts with blind counts. Cash-in, petty cash payouts, and till short/excess are strictly logged.
          </p>
          <div className={styles.ledger}>
            <span className={styles.ledgerRow}>
              <span>Expected in Drawer</span>
              <span className={styles.monoVal}>$12,400.00</span>
            </span>
            <span className={styles.ledgerRow}>
              <span>Counted by Cashier</span>
              <span className={styles.monoVal}>$12,350.00</span>
            </span>
            <span className={`${styles.ledgerRow} ${styles.ledgerShort}`}>
              <span>Till Discrepancy</span>
              <span className={styles.shortTag}>-$50.00 Short</span>
            </span>
          </div>
        </article>

        {/* Module 3: True FIFO Inventory Valuation */}
        <article id="inventory" data-reveal="up" className={`${styles.small} ${styles.card}`}>
          <div className={styles.cardTop}>
            <SoftIcon icon={Package} />
            <span className={styles.fifoBadge}>FIFO Logic</span>
          </div>
          <h3 className={styles.titleSmall}>Inventory with FIFO Batches</h3>
          <p className={styles.body}>
            MariaPoS tracks every product batch by cost and expiry. Sales always consume oldest batches first for accurate gross margin and zero stale stock.
          </p>
          <div className={styles.batchContainer}>
            <div className={styles.batchItem}>
              <div className={styles.batchMeta}>
                <span>Batch #B1 (Oldest)</span>
                <span className={styles.batchDeducted}>Deducting Now</span>
              </div>
              <div className={styles.batchTrack}>
                <div className={styles.batchFillActive} style={{ width: "90%" }} />
              </div>
            </div>
            <div className={styles.batchItem}>
              <div className={styles.batchMeta}>
                <span>Batch #B2 (Next)</span>
                <span>Queued</span>
              </div>
              <div className={styles.batchTrack}>
                <div className={styles.batchFill} style={{ width: "65%" }} />
              </div>
            </div>
          </div>
        </article>

        {/* Module 4: Suppliers, GRN & Cheque Reminders */}
        <article data-reveal="up" data-delay="80" className={`${styles.small} ${styles.card}`}>
          <div className={styles.cardTop}>
            <SoftIcon icon={Truck} />
            <span className={styles.pillAlert}>
              <span className={styles.pillDot} />4 Cheques Due
            </span>
          </div>
          <h3 className={styles.titleSmall}>Suppliers &amp; GRN Receiving</h3>
          <p className={styles.body}>
            Purchase orders, goods receiving notes (GRN), supplier payables ledger, and automatic cheque maturity reminders.
          </p>
          <div className={styles.supplierMiniCard}>
            <div className={styles.supplierRow}>
              <span>Ceylon Pharma Ltd</span>
              <span className={styles.supplierDue}>Due in 2 days</span>
            </div>
            <span className={styles.supplierAmount}>$1,850.00 · Cheque #004921</span>
          </div>
        </article>

        {/* Module 5: Customer Credit & Returns */}
        <article data-reveal="up" data-delay="120" className={`${styles.small} ${styles.card}`}>
          <div className={styles.cardTop}>
            <SoftIcon icon={Undo2} />
            <span className={styles.badgePill}>Ledger</span>
          </div>
          <h3 className={styles.titleSmall}>Returns, Refunds &amp; Credit</h3>
          <p className={styles.body}>
            Item returns restore stock back to the correct cost batch. Customer credit bills track pending balances, credit limits, and partial payments.
          </p>
          <div className={styles.creditPill}>
            <RotateCcw size={13} color="var(--red)" />
            <span>Batch-accurate inventory restoration</span>
          </div>
        </article>

        {/* Module 6: Executive Analytics & Reports */}
        <article id="reports" data-reveal="up" className={`${styles.large} ${styles.reports}`}>
          <div aria-hidden="true" className={styles.reportsGlow} />
          <div className={styles.reportsCopy}>
            <div className={styles.cardTop}>
              <SolidIcon icon={TrendingUp} />
              <span className={styles.reportTag}>Real-Time P&amp;L</span>
            </div>
            <h3 className={styles.titleLarge}>Reports &amp; Business Intelligence</h3>
            <p className={styles.reportsBody}>
              Instant sales summaries, hourly rush peaks, product-wise profit margins, payment mode breakdowns, tax summaries, and one-click PDF &amp; Excel exports.
            </p>
            <div className={styles.reportStats}>
              <div className={styles.statBox}>
                <span className={styles.statLabel}>Today&apos;s Gross Margin</span>
                <span className={styles.statVal}>34.8%</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statLabel}>Fastest Mover</span>
                <span className={styles.statVal}>3M Plaster</span>
              </div>
            </div>
          </div>
          <div className={styles.chartWrapper}>
            <div className={styles.chartHeader}>
              <span>Hourly Sales Velocity</span>
              <span className={styles.chartPeak}>Peak: 17:00–19:00</span>
            </div>
            <div className={styles.chart}>
              {reportBars.map((height, i) => (
                <div key={i} className={styles.barCol}>
                  <span
                    data-grow=""
                    className={i === reportBars.length - 1 ? styles.chartBarActive : styles.chartBar}
                    style={{ height: `${height}%` }}
                  />
                  <span className={styles.barLabel}>{i + 1}h</span>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Module 7: Cashier Permissions & Security */}
        <article data-reveal="up" data-delay="80" className={`${styles.small} ${styles.card}`}>
          <div className={styles.cardTop}>
            <SoftIcon icon={Users} />
            <span className={styles.badgePill}>Security</span>
          </div>
          <h3 className={styles.titleSmall}>Role Security &amp; Expenses</h3>
          <p className={styles.body}>
            Cashiers cannot view overall profits or delete historical invoices without manager PIN override. Log petty cash expenses directly from the till.
          </p>
          <div className={styles.rolesContainer}>
            <div className={styles.roleItem}>
              <ShieldCheck size={14} color="var(--red)" />
              <span>Admin: Full access &amp; P&amp;L</span>
            </div>
            <div className={styles.roleItem}>
              <Lock size={14} color="#6b7280" />
              <span>Cashier: Counter-only billing lock</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
