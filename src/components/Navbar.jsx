import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../data/constants.js';
import Icon from './Icon.jsx';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    // Band near the top of the viewport decides which section counts as "current".
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));

    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (window.scrollY < 200) setActive('');
    };
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`${styles.shell} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.bar} aria-label="Main">
        <a className={styles.logo} href="#top" onClick={close}>
          <span className={styles.mark} aria-hidden="true">A</span>
          <span>
            Assign<i>mently</i>
          </span>
        </a>

        <ul id="nav-menu" className={`${styles.links} ${open ? styles.open : ''}`}>
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={active === l.id ? styles.active : undefined}
                aria-current={active === l.id ? 'true' : undefined}
                onClick={close}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className={styles.drawerCta}>
            <a className="btn btn-primary" href="#contact" onClick={close}>
              Book Consultation
            </a>
          </li>
        </ul>

        <div className={styles.right}>
          <a className={`btn btn-primary ${styles.cta}`} href="#contact">
            Book Consultation
          </a>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
}
