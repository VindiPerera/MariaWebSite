import { CheckCircle2, MessageSquare, Package, Printer, Send, Wallet, WifiOff, Zap, type LucideIcon } from "lucide-react";
import styles from "./WhySection.module.css";

const reasons: { title: string; body: string; icon: LucideIcon; badge: string }[] = [
  {
    title: "Never lose a sale to the internet",
    body: "Billing, stock and shifts run fully offline on your PC. Everything syncs silently to your cloud panel when the connection returns.",
    icon: WifiOff,
    badge: "100% Offline SQLite Architecture",
  },
  {
    title: "Stock that matches the shelf",
    body: "Every sale, return and goods receipt moves stock through FIFO batches, so counts, expiry and profit valuation stay accurate.",
    icon: Package,
    badge: "Accurate FIFO Batch Valuation",
  },
  {
    title: "Cash you can account for",
    body: "Cashiers open and close shifts with blind counts. The till ledger records cash-in, cash-out and any short or excess.",
    icon: Wallet,
    badge: "Blind Shift Float Balancing",
  },
  {
    title: "Receipts on the customer's phone",
    body: "Send the bill as an SMS eBill at checkout, with invoice, items, totals and balance. Permanent proof for warranties.",
    icon: MessageSquare,
    badge: "Instant SMS eBill to Mobile",
  },
  {
    title: "Every sale on your phone",
    body: "Telegram alerts send the owner each new order with its items, from every branch, the moment the bill completes.",
    icon: Send,
    badge: "Real-Time Telegram Order Push",
  },
  {
    title: "Fits the counter you already have",
    body: "Works with touch or standard screens, keyboard hotkeys, USB barcode scanners, and thermal receipt & barcode label printers.",
    icon: Printer,
    badge: "Plug & Play Hardware Drivers",
  },
];

export function WhySection() {
  return (
    <section id="why" className={styles.section}>
      <div data-reveal="up" className={styles.header}>
        <div className={styles.heading}>
          <span className="eyebrow">Strategic Advantage</span>
          <h2 className="section-title">Why retailers switch to MariaPoS</h2>
        </div>
        <p className={`lead ${styles.intro}`}>
          Built in Colombo for counters that cannot stop: supermarkets, grocery, pharmacies, hardware and fashion retail.
        </p>
      </div>

      <div className={styles.grid}>
        {reasons.map(({ title, body, icon: Icon, badge }, i) => (
          <article key={title} data-reveal="up" data-delay={(i % 3) * 90} className={styles.card}>
            <span aria-hidden="true" className={styles.number}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className={styles.cardTop}>
              <span className="icon-tile">
                <Icon size={24} />
              </span>
              <span className={styles.badgePill}>{badge}</span>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.body}>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
