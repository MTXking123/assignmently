import { STEPS } from '../data/constants.js';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  return (
    <section id="how" className="wrap">
      <span className="eyebrow">How It Works</span>
      <h2 className="section-title">From first call to confident submission</h2>
      <p className="lede">A simple, transparent process — and the work always stays yours.</p>

      <ol className={styles.timeline}>
        {STEPS.map((s, i) => (
          <li key={s.title} className={styles.step}>
            <span className={styles.node}>{String(i + 1).padStart(2, '0')}</span>
            <div className={styles.content}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
