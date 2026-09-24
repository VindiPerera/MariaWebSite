"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import styles from "./Faq.module.css";

const faqs: [question: string, answer: string][] = [
  [
    "What happens when my license term ends?",
    "MariaPoS reminds you before expiry. Renew from this site through PayHere and your license extends without reinstalling or losing data.",
  ],
  [
    "Are SMS receipts included?",
    "SMS receipts draw from a prepaid SMS-credit wallet tied to your license. They are not unlimited. You can top up anytime, and the cashier always sees how many messages are left.",
  ],
  [
    "Does it work without internet?",
    "Yes. Billing, stock and shifts run fully offline. The license is checked and data syncs to the cloud panel whenever the connection returns.",
  ],
  ["How do I move from the trial to a paid plan?", "Buy any plan with the same account. Your trial data stays in place."],
  ["Can I get a refund?", "See our refund policy for eligibility and timelines."],
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className={styles.section}>
      <div data-reveal="up" className={styles.heading}>
        <h2 className={styles.title}>Questions, answered</h2>
        <p className={styles.text}>
          Something else? Email{" "}
          <a href={site.emailHref} className={styles.email}>
            {site.email}
          </a>
          .
        </p>
      </div>

      <div data-reveal="up" className={styles.list}>
        {faqs.map(([question, answer], i) => {
          const isOpen = open === i;
          return (
            <div key={question} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className={styles.question}
              >
                <span>{question}</span>
                <span className={styles.sign}>{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && <p className={styles.answer}>{answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
