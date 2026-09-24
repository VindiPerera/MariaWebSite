"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
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
      <nav className={styles.nav}>
        <Link href="/" aria-label="MariaPoS home" className={styles.logo} onClick={closeMenu}>
          <Image src={logo} alt="MariaPoS — Made to Bill" width={152} priority />
        </Link>

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
          <a href={site.phoneHref} className={styles.phone}>
            <Phone size={16} color="var(--red)" />
            {site.phone}
          </a>
          <a href="#trial" className={styles.cta}>
            Start free trial <ArrowRight size={15} />
          </a>
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

      {menuOpen && (
        <div className={styles.menuPanel}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.menuLink} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
          <div className={styles.menuActions}>
            <a href={site.phoneHref} className={styles.menuCall}>
              <Phone size={16} />
              Call
            </a>
            <a href={site.whatsappHref} target="_blank" rel="noopener" className={styles.menuWhatsApp}>
              <WhatsAppIcon size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
