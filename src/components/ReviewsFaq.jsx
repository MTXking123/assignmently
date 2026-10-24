import { useState } from 'react';
import { FAQS, INTEGRITY_NOTE, TESTIMONIALS } from '../data/constants.js';
import Icon, { StarIcon } from './Icon.jsx';
import styles from './ReviewsFaq.module.css';

export default function ReviewsFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="wrap">
      <span className="eyebrow">Reviews & FAQ</span>
      <h2 className="section-title">Students on working with us</h2>
      <p className="lede">Sample reviews — replace with real ones shared with permission.</p>

      <div className={styles.two}>
        <div className={styles.reviews}>
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className={styles.review}>
              <div className={styles.stars} aria-label={`${t.rating} out of 5 stars`} role="img">
                {Array.from({ length: t.rating }, (_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <blockquote>
                <p>“{t.quote}”</p>
              </blockquote>
              <figcaption>
                <span className={styles.avatar} aria-hidden="true">{t.initials}</span>
                <span>
                  <strong>{t.name}</strong>
                  <span className={styles.course}>{t.course}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div>
          <h3 className={styles.faqTitle}>Frequently asked questions</h3>
          <div className={styles.faq}>
            {FAQS.map((f, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={f.q} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
                  <h4>
                    <button
                      type="button"
                      id={`faq-q-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${i}`}
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    >
                      {f.q}
                      <span className={styles.chev}>
                        <Icon name="chevron" size={18} />
                      </span>
                    </button>
                  </h4>
                  <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className={styles.panel}>
                    <div>
                      <p>{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.notice}>
            <span className={styles.noticeBadge}>
              <Icon name="shield" size={16} /> Academic integrity
            </span>
            <p>{INTEGRITY_NOTE}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
