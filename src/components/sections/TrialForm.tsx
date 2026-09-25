"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./TrialCta.module.css";

export function TrialForm() {
  const router = useRouter();

  // Continue on the full sign-up page with what was typed here.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const params = new URLSearchParams({ plan: "trial" });
    for (const field of ["business", "email", "phone"]) {
      const value = String(form.get(field) ?? "").trim();
      if (value) params.set(field, value);
    }
    router.push(`/sign-up?${params}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <span className={styles.formTitle}>Start your free trial</span>
      <input required name="business" aria-label="Business name" placeholder="Business name" className={styles.input} />
      <input required type="email" name="email" aria-label="Email" placeholder="Email" className={styles.input} />
      <input type="tel" name="phone" aria-label="Phone" placeholder="Phone (optional)" className={styles.input} />
      <button type="submit" className={styles.submit}>
        Start 7-Day Free Trial <ArrowRight size={18} />
      </button>
    </form>
  );
}
