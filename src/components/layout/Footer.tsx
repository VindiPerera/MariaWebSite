import Image from "next/image";
import Link from "next/link";
import { Download, Mail, MapPin, Monitor, Phone, Sparkles } from "lucide-react";
import { FacebookIcon } from "@/components/ui/FacebookIcon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { footerColumns, legalLinks, site } from "@/lib/site";
import logo from "@/assets/images/marialogo.png";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div aria-hidden="true" className={styles.glow} />
      <div aria-hidden="true" className={styles.dots} />

      <div className={styles.inner}>
        <div data-reveal="up" className={styles.top}>
          <div className={styles.heading}>
            <span className={styles.eyebrow}>Talk to us</span>
            <h2 className={styles.title}>Questions before you start? Chat with our team on WhatsApp.</h2>
          </div>
          <div className={styles.contactButtons}>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsAppButton}
            >
              <WhatsAppIcon size={18} />
              WhatsApp us: {site.phone}
            </a>
          </div>
        </div>

        <div id="download" className={styles.download}>
          <div className={styles.downloadInfo}>
            <span className={styles.downloadIcon}>
              <Monitor size={22} color="#ffffff" />
            </span>
            <div className={styles.downloadText}>
              <span className={styles.downloadTitle}>Download the World&apos;s Best POS Software for Windows</span>
              <span>Windows 10 &amp; 11 · Fully compatible with every hardware setup · Barcode scanners · Receipt printers</span>
            </div>
          </div>
          <a
            href={site.downloadExeUrl}
            download="MariaPoS-Setup.exe"
            className={styles.downloadButton}
          >
            <Download size={17} />
            Download installer (.exe)
          </a>
        </div>

        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} aria-label="MariaPoS">
              <Image src={logo} alt="MariaPoS" height={38} className={styles.logoImage} />
            </Link>
            <span className={styles.bestPosBadge}>
              <Sparkles size={12} color="#ff6b6b" />
              The World&apos;s Best POS System
            </span>
            <span className={styles.brandDesc}>
              The world&apos;s best hybrid POS system. Works seamlessly both online and offline with real-time cloud sync, fully compatible with every hardware setup on your counter.
            </span>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.brandLink}
            >
              <WhatsAppIcon size={16} />
              WhatsApp: {site.phone}
            </a>
            <a href={site.emailHref} className={styles.brandLink}>
              <Mail size={16} color="var(--coral)" />
              {site.email}
            </a>
            <a href={site.facebookHref} target="_blank" rel="noopener noreferrer" className={styles.brandLink}>
              <FacebookIcon size={16} color="var(--coral)" />
              Facebook
            </a>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className={styles.column}>
              <span className={styles.columnTitle}>{column.title}</span>
              {column.links.map((link) => (
                <Link key={link.label} href={link.href} className={styles.columnLink}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div aria-hidden="true" className={styles.wordmark}>
          MariaPoS
        </div>

        <div className={styles.bottom}>
          <span>
            © 2026 {site.company} · The World&apos;s Best POS System. All rights reserved. <span className={styles.dotSep}>|</span> Powered by JAAN Network · Concept by Thejan Bathiya
          </span>
          <div className={styles.legal}>
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
