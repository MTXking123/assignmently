import { useMemo, useState } from 'react';
import { GALLERY_FORMATS } from '../data/constants.js';
import Icon from './Icon.jsx';
import styles from './FormatGallery.module.css';

const FORMAT_NAMES = Object.keys(GALLERY_FORMATS);
const slug = (s) => s.toLowerCase().replace(/\s+/g, '-');

export default function FormatGallery() {
  const [active, setActive] = useState(FORMAT_NAMES[0]);
  const [openIndex, setOpenIndex] = useState(0);
  const format = GALLERY_FORMATS[active];

  const calloutCount = useMemo(
    () => format.sections.filter((s) => s.callout).length,
    [format]
  );

  const selectFormat = (name) => {
    setActive(name);
    setOpenIndex(0);
  };

  return (
    <section id="gallery" className="wrap">
      <span className="eyebrow">Format Gallery</span>
      <h2 className="section-title">Interactive document blueprints</h2>
      <p className="lede">
        Explore how each document type is structured. These are wireframes only — never real student
        work.
      </p>

      <div className={styles.split}>
        <aside className={styles.side}>
          <div className={styles.segmented} role="tablist" aria-label="Document formats">
            {FORMAT_NAMES.map((name) => (
              <button
                key={name}
                type="button"
                role="tab"
                id={`fmt-${slug(name)}`}
                aria-selected={name === active}
                aria-controls="blueprint-panel"
                onClick={() => selectFormat(name)}
              >
                {name}
              </button>
            ))}
          </div>

          <dl className={styles.meta}>
            <div>
              <dt>Key objective</dt>
              <dd>{format.objective}</dd>
            </div>
            <div className={styles.metaRow}>
              <div>
                <dt>Estimated sections</dt>
                <dd>{format.sectionCount}</dd>
              </div>
              <div>
                <dt>Reference styles</dt>
                <dd className={styles.styleTags}>
                  {format.styles.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </dd>
              </div>
            </div>
          </dl>

          <ul className={styles.checklist} aria-label={`${active} section checklist`}>
            {format.sections.map((s) => (
              <li key={s.name}>
                <span className={styles.tick}>
                  <Icon name="check" size={12} strokeWidth={3} />
                </span>
                {s.name}
              </li>
            ))}
          </ul>
        </aside>

        <div
          id="blueprint-panel"
          role="tabpanel"
          aria-labelledby={`fmt-${slug(active)}`}
          className={styles.explorer}
          key={active}
        >
          <div className={styles.explorerBar}>
            <span className={styles.dots} aria-hidden="true">
              <i /><i /><i />
            </span>
            <span>{active} · Wireframe</span>
            <span className={styles.count}>
              {format.sections.length} sections · {calloutCount} visuals
            </span>
          </div>

          <div className={styles.scroller}>
            <div className={styles.sticky}>
              <span className={styles.stickyLabel}>Abstract / Overview</span>
              <p>{format.abstract}</p>
            </div>

            <div className={styles.outline}>
              {format.sections.map((s, i) => {
                const isOpen = openIndex === i;
                const panelId = `bp-${slug(active)}-${i}`;
                return (
                  <div key={s.name} className={`${styles.acc} ${isOpen ? styles.accOpen : ''}`}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    >
                      <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                      <span className={styles.accTitle}>{s.name}</span>
                      <Icon name="chevron" size={18} className={styles.chev} />
                    </button>
                    <div id={panelId} className={styles.accPanel} role="region" aria-label={s.name}>
                      <div>
                        <p>{s.detail}</p>
                        <div className={styles.skeleton} aria-hidden="true">
                          <span /><span /><span />
                        </div>
                        {s.callout && (
                          <div className={styles.callout}>
                            <Icon name="image" size={16} />[{s.callout}]
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
