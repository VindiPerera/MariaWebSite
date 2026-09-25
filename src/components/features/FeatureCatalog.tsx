"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Filter, Layers, Search, Sparkles, X } from "lucide-react";
import { featureCategories, featureCount } from "@/lib/featureCatalog";
import { FeatureVisualPreview } from "./FeatureVisualPreview";
import styles from "./FeatureCatalog.module.css";

export function FeatureCatalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return featureCategories
      .filter((cat) => (selectedCategory === "all" ? true : cat.id === selectedCategory))
      .map((cat) => {
        if (!q) return cat;

        const matchingFeatures = cat.features.filter(
          (f) =>
            f.name.toLowerCase().includes(q) ||
            f.what.toLowerCase().includes(q) ||
            f.why.toLowerCase().includes(q),
        );

        if (matchingFeatures.length > 0 || cat.title.toLowerCase().includes(q)) {
          return {
            ...cat,
            features: matchingFeatures.length > 0 ? matchingFeatures : cat.features,
          };
        }

        return null;
      })
      .filter(Boolean) as typeof featureCategories;
  }, [searchQuery, selectedCategory]);

  const totalVisibleFeatures = filteredCategories.reduce((acc, cat) => acc + cat.features.length, 0);

  return (
    <section id="features" className={styles.section} aria-labelledby="all-features-title">
      <div data-reveal="up" className={`section-intro ${styles.intro}`}>
        <span className="eyebrow">Enterprise POS Architecture</span>
        <h1 id="all-features-title" className="section-title">
          Every MariaPoS feature, visually engineered for your shop
        </h1>
        <p className="lead">
          {featureCount}+ built-in capabilities across {featureCategories.length} integrated modules. Linked to a
          single real-time FIFO stock ledger — all included in every licence without hidden locks or paid add-ons.
        </p>
      </div>

      {/* Interactive Controls Bar: Live Search & Category Filter */}
      <div data-reveal="up" className={styles.controlsBar}>
        <div className={styles.searchWrapper}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search any feature (e.g. barcode, FIFO, cheque, SMS, discount, reprint)..."
            className={styles.searchInput}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className={styles.clearBtn}
              aria-label="Clear search"
            >
              <X size={15} />
            </button>
          )}
        </div>

        <div className={styles.resultsBadge}>
          <Sparkles size={14} color="var(--red)" />
          <span>
            Showing <strong>{totalVisibleFeatures}</strong> of {featureCount} features
          </span>
        </div>
      </div>

      {/* Category Pills Navigation */}
      <nav aria-label="Feature categories" className={styles.chips}>
        <button
          type="button"
          onClick={() => setSelectedCategory("all")}
          className={`${styles.chip} ${selectedCategory === "all" ? styles.chipActive : ""}`}
        >
          <Layers size={14} />
          All Modules ({featureCount})
        </button>

        {featureCategories.map(({ id, title, icon: Icon, features }) => {
          const isActive = selectedCategory === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setSelectedCategory(id)}
              className={`${styles.chip} ${isActive ? styles.chipActive : ""}`}
            >
              <Icon size={14} />
              <span>{title}</span>
              <span className={styles.chipCount}>{features.length}</span>
            </button>
          );
        })}
      </nav>

      {/* Categories & Features Grid */}
      <div className={styles.categories}>
        {filteredCategories.length === 0 ? (
          <div className={styles.emptyState}>
            <p className={styles.emptyTitle}>No features matched &quot;{searchQuery}&quot;</p>
            <p className={styles.emptySub}>Try searching for another term or click &quot;All Modules&quot; above.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className={styles.resetFiltersBtn}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredCategories.map(({ id, title, icon: Icon, summary, features }) => (
            <section key={id} id={id} className={styles.category} aria-labelledby={`${id}-title`}>
              <div className={styles.categoryHead}>
                <span className="icon-tile">
                  <Icon size={24} />
                </span>
                <h3 id={`${id}-title`} className={styles.categoryTitle}>
                  {title}
                </h3>
                <p className={styles.categorySummary}>{summary}</p>
                <div className={styles.categoryBadgeWrap}>
                  <span className={styles.count}>{features.length} Features Included</span>
                </div>
              </div>

              <div className={styles.featureGrid}>
                {features.map((feature, i) => (
                  <article
                    key={feature.name}
                    data-reveal="up"
                    data-delay={(i % 2) * 50}
                    className={styles.feature}
                  >
                    <div className={styles.featureTopRow}>
                      <h4 className={styles.featureName}>{feature.name}</h4>
                      <FeatureVisualPreview featureName={feature.name} />
                    </div>

                    <p className={styles.what}>{feature.what}</p>

                    <div className={styles.why}>
                      <CheckCircle2 size={16} color="var(--red)" />
                      <span>
                        <strong>Why it matters:</strong> {feature.why}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </section>
  );
}
