import { SERVICES } from '../data/constants.js';
import Icon from './Icon.jsx';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className="wrap">
      <span className="eyebrow">Services</span>
      <h2 className="section-title">What we help with</h2>
      <p className="lede">
        Support that fits where you are in the work, from first outline to final submission.
      </p>

      <div className={styles.bento}>
        {SERVICES.map((s) => (
          <article key={s.title} className={`${styles.card} ${s.featured ? styles.featured : ''}`}>
            <span className={styles.icon}>
              <Icon name={s.icon} size={22} />
            </span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            {s.bullets && (
              <ul className={styles.bullets}>
                {s.bullets.map((b) => (
                  <li key={b}>
                    <Icon name="check" size={16} strokeWidth={2.5} />
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {s.pill && <span className={styles.pill}>{s.pill}</span>}
          </article>
        ))}
      </div>
    </section>
  );
}
