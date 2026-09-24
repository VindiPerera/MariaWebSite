import { Package, ShoppingCart, TrendingUp, Truck, Undo2, Users, Wallet, type LucideIcon } from "lucide-react";
import styles from "./BentoGrid.module.css";

const keypad = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];
const reportBars = [38, 52, 44, 70, 58, 82, 66, 92];

function SoftIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className={styles.softIcon}>
      <Icon size={20} color="var(--red)" />
    </span>
  );
}

function SolidIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className={styles.solidIcon}>
      <Icon size={20} color="#ffffff" />
    </span>
  );
}

export function BentoGrid() {
  return (
    <section id="features" className={styles.section}>
      <div data-reveal="up" className={styles.header}>
        <h2 className={`section-title ${styles.title}`}>Built around how a shop actually runs</h2>
        <p className={`lead ${styles.intro}`}>
          Every module shares one FIFO stock ledger, so a sale, a return or a goods receipt updates the same numbers.
        </p>
      </div>

      <div className={styles.grid}>
        <article data-reveal="up" className={`${styles.large} ${styles.billing}`}>
          <SolidIcon icon={ShoppingCart} />
          <h3 className={styles.titleLarge}>POS Billing</h3>
          <p className={styles.billingBody}>
            Cart, barcode scanning, keyboard shortcuts, split payments and ESC/POS receipts, with FIFO stock deduction on
            every sale.
          </p>
          <div aria-hidden="true" className={styles.keypad}>
            {keypad.map((key) => (
              <span key={key} className={styles.key}>
                {key}
              </span>
            ))}
          </div>
        </article>

        <article data-reveal="up" data-delay="80" className={`${styles.small} ${styles.card}`}>
          <SoftIcon icon={Wallet} />
          <h3 className={styles.titleSmall}>Shifts &amp; till</h3>
          <p className={styles.body}>
            Cashiers start and end shifts. Cash-in, cash-out and short/excess are recorded at close.
          </p>
          <div className={styles.ledger}>
            <span className={styles.ledgerRow}>
              <span>Expected</span>
              <span>$12,400</span>
            </span>
            <span className={styles.ledgerRow}>
              <span>Counted</span>
              <span>$12,350</span>
            </span>
            <span className={`${styles.ledgerRow} ${styles.ledgerShort}`}>
              <span>Short</span>
              <span>−$50</span>
            </span>
          </div>
        </article>

        <article data-reveal="up" className={`${styles.small} ${styles.card}`}>
          <SoftIcon icon={Package} />
          <h3 className={styles.titleSmall}>Inventory with FIFO batches</h3>
          <p className={styles.body}>Products, categories and low-stock highlighting, valued batch by batch.</p>
          <div className={styles.batches}>
            <span className={styles.batch} style={{ flex: 3, height: "100%", background: "var(--red)" }} />
            <span className={styles.batch} style={{ flex: 2, height: "70%", background: "#e57373" }} />
            <span className={styles.batch} style={{ flex: 1, height: "40%", background: "#f3c1c1" }} />
          </div>
        </article>

        <article data-reveal="up" data-delay="80" className={`${styles.small} ${styles.card}`}>
          <SoftIcon icon={Truck} />
          <h3 className={styles.titleSmall}>Suppliers</h3>
          <p className={styles.body}>
            Purchase orders, goods receiving, split payments, supplier payables and cheque reminders.
          </p>
          <span className={styles.pill}>
            <span className={styles.pillDot} />4 cheques due/overdue
          </span>
        </article>

        <article data-reveal="up" data-delay="160" className={`${styles.small} ${styles.card}`}>
          <SoftIcon icon={Undo2} />
          <h3 className={styles.titleSmall}>Returns &amp; credit</h3>
          <p className={styles.body}>
            Refunds and exchanges restore stock to the right batch. Customer credit bills track what&apos;s owed and
            paid.
          </p>
        </article>

        <article data-reveal="up" className={`${styles.large} ${styles.reports}`}>
          <div aria-hidden="true" className={styles.reportsGlow} />
          <div className={styles.reportsCopy}>
            <SolidIcon icon={TrendingUp} />
            <h3 className={styles.titleLarge}>Reports &amp; analytics</h3>
            <p className={styles.reportsBody}>
              Sales summary, payment-method breakdown, product-wise sales, profit &amp; loss and inventory valuation.
            </p>
          </div>
          <div className={styles.chart}>
            {reportBars.map((height, i) => (
              <span
                key={i}
                data-grow=""
                className={i === reportBars.length - 1 ? styles.chartBarActive : styles.chartBar}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </article>

        <article data-reveal="up" data-delay="80" className={`${styles.small} ${styles.card}`}>
          <SoftIcon icon={Users} />
          <h3 className={styles.titleSmall}>Users, roles &amp; expenses</h3>
          <p className={styles.body}>
            Admin and cashier accounts with role-based permissions, customer records and expense tracking.
          </p>
          <div className={styles.roles}>
            <span className={styles.role}>Admin</span>
            <span className={styles.role}>Cashier</span>
          </div>
        </article>
      </div>
    </section>
  );
}
