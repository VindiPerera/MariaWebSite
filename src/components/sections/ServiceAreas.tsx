import Link from "next/link";
import { MapPin } from "lucide-react";
import { locations, provinces } from "@/lib/locations";
import styles from "./ServiceAreas.module.css";

type Props = {
  /** Slug of the current city page, left out of the list. */
  exclude?: string;
  title?: string;
};

export function ServiceAreas({ exclude, title = "POS system for shops across Sri Lanka" }: Props) {
  return (
    <section className={styles.section} aria-labelledby="service-areas-title">
      <div data-reveal="up" className={styles.head}>
        <span className="eyebrow">Island-wide service</span>
        <h2 id="service-areas-title" className={styles.title}>
          {title}
        </h2>
        <p className={styles.lead}>
          MariaPoS is a Windows download, so any shop in any of the nine provinces can start today, with help from our
          Colombo team by phone and WhatsApp. Find MariaPoS in your city:
        </p>
      </div>

      <div className={styles.provinces}>
        {provinces.map((province) => (
          <div key={province} className={styles.province}>
            <h3 className={styles.provinceName}>{province} Province</h3>
            <ul className={styles.cities}>
              {locations
                .filter((l) => l.province === province && l.slug !== exclude)
                .map((l) => (
                  <li key={l.slug}>
                    <Link href={`/pos-system/${l.slug}`} className={styles.city}>
                      <MapPin size={13} />
                      POS system {l.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
