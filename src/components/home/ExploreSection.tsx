import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import hwA from "@/assets/images/hw-a.jpeg";
import hwB from "@/assets/images/hw-b.jpeg";
import posBilling from "@/assets/images/pos-billing.png";
import styles from "./ExploreSection.module.css";

const cards: {
  title: string;
  sub: string;
  badge: string;
  href: string;
  img: StaticImageData;
  alt: string;
  pos: string;
}[] = [
  {
    title: "Features",
    sub: "SMS, Telegram & cloud sync",
    badge: "60+ Modules",
    href: "/features",
    img: hwA,
    alt: "MariaPoS on a monitor with phone and receipt printer",
    pos: "70% 50%",
  },
  {
    title: "Product",
    sub: "Billing & reports screens",
    badge: "Counter Interface",
    href: "/product",
    img: posBilling,
    alt: "MariaPoS billing screen",
    pos: "0% 0%",
  },
  {
    title: "Pricing",
    sub: "From $95.55 per year",
    badge: "7-Day Free Trial",
    href: "/pricing",
    img: hwB,
    alt: "MariaPoS staff at the counter",
    pos: "60% 30%",
  },
];

export function ExploreSection() {
  return (
    <section className={styles.section} aria-labelledby="explore-title">
      <div data-reveal="up" className={styles.header}>
        <div className={styles.heading}>
          <span className="eyebrow">Explore</span>
          <h2 id="explore-title" className="section-title">
            Explore MariaPoS
          </h2>
        </div>
        <p className={`lead ${styles.leadText}`}>
          Take a closer look at our complete feature suite, real counter screens and transparent licence plans.
        </p>
      </div>

      <div className={styles.grid}>
        {cards.map((card, i) => (
          <Link key={card.href} href={card.href} data-reveal="up" data-delay={i * 80} className={styles.card}>
            <div className={styles.media}>
              <span className={styles.badge}>{card.badge}</span>
              <Image
                src={card.img}
                alt={card.alt}
                fill
                sizes="(max-width: 599px) 100vw, (max-width: 999px) 50vw, 400px"
                className={styles.image}
                style={{ objectFit: "cover", objectPosition: card.pos }}
              />
            </div>
            <div className={styles.body}>
              <div className={styles.text}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <span className={styles.cardSub}>{card.sub}</span>
              </div>
              <span className={styles.arrow} aria-hidden="true">
                <ArrowUpRight size={17} color="#ffffff" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
