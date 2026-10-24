import { INTEGRITY_NOTE, NAV_LINKS } from '../data/constants.js';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.brand}>
          <a href="#top" className={styles.logo}>
            Assign<i>mently</i>
          </a>
          <p>Academic coaching, editing and research support.</p>
        </div>

        <nav aria-label="Footer">
          <ul className={styles.links}>
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={`wrap ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} Assignmently. All rights reserved.</span>
        <span>{INTEGRITY_NOTE}</span>
      </div>
    </footer>
  );
}
