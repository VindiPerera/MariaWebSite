import { Building2, Sparkles, UserRound } from "lucide-react";
import { site } from "@/lib/site";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  return (
    <section className={styles.section}>
      <div aria-hidden="true" className={styles.grid} />
      <div className={styles.inner}>
        <div data-reveal="up" className={`section-intro ${styles.intro}`}>
          <span className="eyebrow">About Us</span>
          <h1 className="section-title">The World&apos;s Best Hybrid POS System</h1>
          <p className="lead">
            MariaPoS is a true hybrid Windows point-of-sale system designed for supermarkets, pharmacies, retail
            stores and wholesale businesses. It works seamlessly both online and offline with real-time cloud sync,
            and is fully compatible with every hardware setup on your counter.
          </p>
        </div>

        <div className={styles.storyGrid}>
          <div data-reveal="up" data-delay="0" className={styles.storyCard}>
            <span className="icon-tile">
              <Building2 size={22} />
            </span>
            <h3 className={styles.storyTitle}>Who we are</h3>
            <p className={styles.storyText}>
              MariaPoS is powered by {site.company}, based on the original concept and product architecture of {site.conceptBy}. We build, engineer, and support
              the software directly — providing global digital assistance via WhatsApp and cloud services.
            </p>
          </div>

          <div data-reveal="up" data-delay="100" className={styles.storyCard}>
            <span className="icon-tile">
              <Sparkles size={22} />
            </span>
            <h3 className={styles.storyTitle}>What we do</h3>
            <p className={styles.storyText}>
              A single hybrid POS built for real shop counters: works seamlessly online and offline, compatible with every hardware device, barcode billing, FIFO batch inventory, shift
              &amp; till control, SMS e-bills, Telegram sales alerts and two-way cloud sync.
            </p>
          </div>

          <div data-reveal="up" data-delay="200" className={styles.storyCard}>
            <span className="icon-tile">
              <UserRound size={22} />
            </span>
            <h3 className={styles.storyTitle}>How we support you</h3>
            <p className={styles.storyText}>
              Every license includes direct WhatsApp and digital support from our own engineering team — reachable anytime via WhatsApp at {site.phone}.
            </p>
          </div>
        </div>

        <div data-reveal="up" className={styles.peopleGrid}>
          <div className={styles.personCard}>
            <span className={styles.avatar}>TB</span>
            <div>
              <div className={styles.personName}>Thejan Bathiya</div>
              <div className={styles.personRole}>Concept &amp; Product Architecture</div>
            </div>
            <p className={styles.personText}>
              The creative concept, system design, and engineering direction behind MariaPoS — envisioning a high-speed hybrid POS that works effortlessly both online and offline.
            </p>
          </div>

          <div className={`${styles.personCard} ${styles.personCardLight}`}>
            <span className={styles.avatar}>JN</span>
            <div>
              <div className={styles.personName}>{site.company}</div>
              <div className={styles.personRoleLight}>Powered by &amp; Global Operations</div>
            </div>
            <p className={styles.personTextLight}>
              {site.company} powers and operates MariaPoS end-to-end — from software infrastructure to deployment, enterprise cloud sync, and 24/7 global customer support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
