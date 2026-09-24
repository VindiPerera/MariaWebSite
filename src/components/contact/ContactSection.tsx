import { CalendarCheck, Mail, MapPin, Monitor, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { site } from "@/lib/site";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  return (
    <section className={styles.section}>
      <div aria-hidden="true" className={styles.grid} />
      <div aria-hidden="true" className={styles.glow} />

      <div className={styles.inner}>
        <div data-reveal="up" className="section-intro">
          <span className="eyebrow">Contact</span>
          <h1 className={styles.title}>Talk to the MariaPoS team</h1>
          <p className={styles.subtitle}>
            Questions, demos, multi-branch pricing or setup help. Reach us the way that suits you.
          </p>
        </div>

        <div className={styles.cards}>
          <a href={site.phoneHref} data-reveal="up" className={`${styles.card} ${styles.linkCard}`}>
            <span className="icon-tile">
              <Phone size={24} />
            </span>
            <span className={styles.cardTitle}>Call us</span>
            <span className={styles.cardValue}>{site.phone}</span>
          </a>

          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener"
            data-reveal="up"
            data-delay="80"
            className={`${styles.card} ${styles.linkCard} ${styles.whatsAppCard}`}
          >
            <span className={`icon-tile ${styles.whatsAppTile}`}>
              <WhatsAppIcon size={24} />
            </span>
            <span className={styles.cardTitle}>WhatsApp</span>
            <span className={`${styles.cardValue} ${styles.whatsAppValue}`}>{site.phone}</span>
          </a>

          <a href={site.emailHref} data-reveal="up" data-delay="160" className={`${styles.card} ${styles.linkCard}`}>
            <span className="icon-tile">
              <Mail size={24} />
            </span>
            <span className={styles.cardTitle}>Email</span>
            <span className={styles.cardValue}>{site.email}</span>
          </a>

          <div data-reveal="up" data-delay="240" className={styles.card}>
            <span className="icon-tile">
              <MapPin size={24} />
            </span>
            <span className={styles.cardTitle}>Visit</span>
            <span className={styles.cardText}>
              JAAN Network (PVT) Ltd
              <br />
              {site.address}
            </span>
          </div>

          <div data-reveal="up" data-delay="320" className={styles.card}>
            <span className="icon-tile">
              <CalendarCheck size={24} />
            </span>
            <span className={styles.cardTitle}>Book a demo</span>
            <span className={styles.cardText}>We&apos;ll walk you through billing, stock and reports on a call.</span>
          </div>

          <div data-reveal="up" data-delay="400" className={styles.card}>
            <span className="icon-tile">
              <Monitor size={24} />
            </span>
            <span className={styles.cardTitle}>Setup help</span>
            <span className={styles.cardText}>Help installing MariaPoS and connecting printers and scanners.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
