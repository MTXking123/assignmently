import { FOUNDER } from '../data/constants.js';
import styles from './Founder.module.css';

export default function Founder() {
  return (
    <section id="founder" className="wrap">
      <span className="eyebrow">About the Founder</span>
      <h2 className="section-title">Meet the mentor behind Assignmently</h2>
      <p className="lede">Passionate about research rigor, academic clarity and student success.</p>

      <article className={styles.card}>
        <div className={styles.media}>
          <div className={styles.portrait}>
            <img
              src={FOUNDER.image}
              alt={`Portrait of ${FOUNDER.name}`}
              width="700"
              height="840"
              loading="lazy"
            />
          </div>
          <div className={styles.exp}>
            <strong>{FOUNDER.experience.value}</strong>
            <span>{FOUNDER.experience.label}</span>
          </div>
        </div>

        <div className={styles.body}>
          <h3>{FOUNDER.name}</h3>
          <p className={styles.title}>{FOUNDER.title}</p>
          <blockquote className={styles.bio}>
            <p>“{FOUNDER.bio}”</p>
          </blockquote>

          <p className={styles.label}>Key focus areas</p>
          <ul className={styles.tags}>
            {FOUNDER.focus.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <figure className={styles.quote}>
            <blockquote>
              <p>“{FOUNDER.quote}”</p>
            </blockquote>
            <figcaption>— {FOUNDER.name.split(' ')[0]}</figcaption>
          </figure>
        </div>
      </article>
    </section>
  );
}
