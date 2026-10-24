import { useState } from 'react';
import { HERO, REVIEW_DASHBOARD } from '../data/constants.js';
import Icon from './Icon.jsx';
import styles from './Hero.module.css';

export default function Hero() {
  const [resolved, setResolved] = useState({});
  const toggle = (i) => setResolved((r) => ({ ...r, [i]: !r[i] }));
  const doneCount = Object.values(resolved).filter(Boolean).length;
  const total = REVIEW_DASHBOARD.suggestions.length;

  return (
    <section id="top" className={`wrap ${styles.hero}`}>
      <div className={styles.copy}>
        <span className="eyebrow">
          <Icon name="sparkle" size={14} /> Academic coaching & research support
        </span>
        <h1 className={styles.title}>
          {HERO.title} <span className="hl">{HERO.highlight}</span>
        </h1>
        <p className={styles.text}>{HERO.text}</p>

        <ul className={styles.badges}>
          {HERO.badges.map((b) => (
            <li key={b}>
              <Icon name="check" size={14} strokeWidth={3} />
              {b}
            </li>
          ))}
        </ul>

        <div className={styles.ctas}>
          <a className="btn btn-primary" href="#contact">
            Book a Free Call <Icon name="arrow" size={18} />
          </a>
          <a className="btn btn-ghost" href="#gallery">
            Explore Document Gallery
          </a>
        </div>
      </div>

      <div className={styles.dash} aria-label="Example live review dashboard">
        <div className={styles.dashTop}>
          <span className={styles.dots} aria-hidden="true">
            <i /><i /><i />
          </span>
          <span className={styles.doc}>
            <Icon name="file" size={16} />
            Document: <strong>{REVIEW_DASHBOARD.document}</strong>
          </span>
          <span className={`${styles.status} ${doneCount === total ? styles.statusDone : ''}`}>
            <span className={styles.pulse} aria-hidden="true" />
            {doneCount === total ? 'Review Complete' : `Review Status: ${REVIEW_DASHBOARD.status}`}
          </span>
        </div>

        <div className={styles.dashBody}>
          <div className={styles.page} aria-hidden="true">
            <span className={styles.pageHead}>3.2 Research Design</span>
            <span className={`${styles.line} ${styles.w90}`} />
            <span className={`${styles.line} ${styles.mark}`} />
            <span className={`${styles.line} ${styles.w80}`} />
            <span className={`${styles.line} ${styles.w60}`} />
            <span className={styles.pageHead}>3.3 Data Collection</span>
            <span className={`${styles.line} ${styles.w90}`} />
            <span className={`${styles.line} ${styles.w70}`} />
          </div>

          <div className={styles.feed}>
            <p className={styles.feedTitle}>
              Tutor feedback <span>{doneCount}/{total} resolved</span>
            </p>
            {REVIEW_DASHBOARD.suggestions.map((s, i) => (
              <article key={s.type} className={`${styles.suggestion} ${resolved[i] ? styles.resolved : ''}`}>
                <header>
                  <span className={styles.avatar}>{s.tutor}</span>
                  <strong>{s.type}</strong>
                </header>
                <p>{s.text}</p>
                <button type="button" onClick={() => toggle(i)} aria-pressed={!!resolved[i]}>
                  <Icon name="check" size={14} strokeWidth={3} />
                  {resolved[i] ? 'Resolved' : 'Mark resolved'}
                </button>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.metrics}>
          <Icon name="sparkle" size={14} />
          {REVIEW_DASHBOARD.metrics}
        </div>
      </div>
    </section>
  );
}
