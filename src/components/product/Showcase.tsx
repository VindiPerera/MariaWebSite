import Image, { type StaticImageData } from "next/image";
import { Check } from "lucide-react";
import posBilling from "@/assets/images/pos-billing.png";
import reports from "@/assets/images/reports.png";
import styles from "./Showcase.module.css";

type Feature = {
  num: string;
  title: string;
  body: string;
  points: string[];
  img: StaticImageData;
  alt: string;
  chip: string;
  reverse: boolean;
};

const features: Feature[] = [
  {
    num: "01 — POS Billing",
    title: "Checkout built for the keyboard and the queue",
    body: "Search by name or scan a barcode, add quick items from the favourites row, and finish the sale from the keypad. Discounts, promo codes and split payments sit next to the cart.",
    points: ["Shortcuts for every action (F1–F12)", "Cash, card, credit and split payments", "Customer phone for SMS receipts"],
    img: posBilling,
    alt: "MariaPoS POS Billing screen",
    chip: "FIFO stock deducted",
    reverse: false,
  },
  {
    num: "02 — Reports",
    title: "See what sold, how it was paid and what you made",
    body: "Sales, inventory, customer, shift, cashier, payment-method, expense, P&L and supplier reports, filtered by date and exportable.",
    points: ["Total sales, cost and net profit at a glance", "Credit and payables outstanding", "Product-wise revenue and profit"],
    img: reports,
    alt: "MariaPoS Reports & Analytics screen",
    chip: "Net profit by date range",
    reverse: true,
  },
];

export function Showcase() {
  return (
    <section id="product" className={styles.section}>
      <div data-reveal="up" className="section-intro">
        <span className="eyebrow">The software</span>
        <h2 className="section-title">One app for the counter, the stockroom and the back office</h2>
      </div>

      {features.map((feature) => (
        <div key={feature.num} className={`${styles.row} ${feature.reverse ? styles.reverse : ""}`}>
          <div data-reveal="up" className={styles.copy}>
            <span className={styles.num}>{feature.num}</span>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.body}>{feature.body}</p>
            <div className={styles.points}>
              {feature.points.map((point) => (
                <span key={point} className={styles.point}>
                  <span className={styles.check}>
                    <Check size={10} color="var(--red)" />
                  </span>
                  {point}
                </span>
              ))}
            </div>
          </div>

          <div data-reveal="scale" className={styles.visual}>
            <div aria-hidden="true" className={styles.glow} />
            <div className={styles.frame}>
              <Image src={feature.img} alt={feature.alt} className={styles.screenshot} sizes="(max-width: 1000px) 100vw, 720px" />
            </div>
            <div data-float="6000" data-amp="7" className={`${styles.chip} ${feature.reverse ? styles.chipRight : styles.chipLeft}`}>
              <span className={styles.chipDot} />
              {feature.chip}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
