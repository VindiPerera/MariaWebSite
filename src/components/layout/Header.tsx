"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Menu, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { navLinks, site } from "@/lib/site";
import logo from "@/assets/images/marialogo.png";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const headerClass = [styles.header, scrolled && styles.scrolled, (scrolled || menuOpen) && styles.solid]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass}>
      <div className={styles.headerInner}>
        <Link href="/" aria-label="MariaPoS home" className={styles.brand} onClick={closeMenu}>
          <Image
            src={logo}
            alt="MariaPoS — Made to Bill"
            height={54}
            className={styles.brandImage}
            priority
          />
        </Link>

        <nav className={styles.nav}>
          <div className={styles.links}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${pathname === link.href ? styles.active : ""}`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.actions}>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsAppBtn}
              title="Chat on WhatsApp (+94 76 593 3255) — WhatsApp only"
            >
              <WhatsAppIcon size={15} />
              <span>{site.phone}</span>
            </a>
            <a
              href={site.downloadExeUrl}
              download="MariaPoS-Setup.exe"
              className={styles.downloadBtn}
              title="Download MariaPoS for Windows (.exe)"
            >
              <Download size={14} color="var(--red)" />
              <span>Download .exe</span>
            </a>
            <Link href="/sign-in" className={styles.signIn}>
              Sign in
            </Link>
            <Link href="/sign-up" className={styles.cta}>
              <span>Start free trial</span>
              <ArrowRight size={15} />
            </Link>
            <button
              type="button"
              className={styles.menuButton}
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {menuOpen && (
        <div className={styles.menuPanel}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.menuLink} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
          <a
            href={site.downloadExeUrl}
            download="MariaPoS-Setup.exe"
            className={styles.menuDownload}
            onClick={closeMenu}
          >
            <Download size={16} />
            <span>Download MariaPoS (.exe)</span>
          </a>
          <Link href="/sign-in" className={styles.menuLink} onClick={closeMenu}>
            Sign in
          </Link>
          <div className={styles.menuActions}>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.menuWhatsAppFull}
            >
              <WhatsAppIcon size={17} />
              <span>WhatsApp Us: {site.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
