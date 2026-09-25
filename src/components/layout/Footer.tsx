import Image from "next/image";
import Link from "next/link";
import { Download, Mail, MapPin, Monitor, Phone } from "lucide-react";
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
            <h2 className={styles.title}>Questions before you start? Call or message us.</h2>
          </div>
          <div className={styles.contactButtons}>
            <a href={site.phoneHref} className={styles.callButton}>
              <Phone size={18} color="var(--red)" />
              {site.phone}
            </a>
            <a href={site.whatsappHref} target="_blank" rel="noopener" className={styles.whatsAppButton}>
              <WhatsAppIcon size={18} />
              WhatsApp us
            </a>
          </div>
        </div>

        <div id="download" className={styles.download}>
          <div className={styles.downloadInfo}>
            <span className={styles.downloadIcon}>
              <Monitor size={22} color="#ffffff" />
            </span>
            <div className={styles.downloadText}>
              <span className={styles.downloadTitle}>Download MariaPoS for Windows</span>
              <span>Windows 10+ · Touch &amp; standard screens · Barcode scanners · Receipt printers</span>
            </div>
          </div>
          <a href="#download" className={styles.downloadButton}>
            <Download size={17} />
            Download installer
          </a>
        </div>

        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} aria-label="MariaPoS">
              <Image src={logo} alt="MariaPoS" height={38} className={styles.logoImage} />
            </Link>
            <span>{site.tagline}</span>
            <span className={styles.address}>
              <MapPin size={16} color="var(--coral)" />
              {site.address}
            </span>
            <a href={site.emailHref} className={styles.brandLink}>
              <Mail size={16} color="var(--coral)" />
              {site.email}
            </a>
            <a href={site.phoneHref} className={styles.brandLink}>
              <Phone size={16} color="var(--coral)" />
              {site.phone}
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
          <span>© 2026 {site.company} All rights reserved.</span>
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
