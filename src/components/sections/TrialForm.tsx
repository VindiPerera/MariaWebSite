"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./TrialCta.module.css";

export function TrialForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: send the trial request to the backend once the signup API exists.
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {sent ? (
        <p className={styles.thanks}>Thanks — check your email for your trial login and the Windows installer.</p>
      ) : (
        <>
          <span className={styles.formTitle}>Start your free trial</span>
          <input required name="business" aria-label="Business name" placeholder="Business name" className={styles.input} />
          <input required type="email" name="email" aria-label="Email" placeholder="Email" className={styles.input} />
          <input type="tel" name="phone" aria-label="Phone" placeholder="Phone (optional)" className={styles.input} />
          <button type="submit" className={styles.submit}>
            Start 7-Day Free Trial <ArrowRight size={18} />
          </button>
        </>
      )}
    </form>
  );
}
