import { useState } from 'react';
import { CONTACT, SERVICE_OPTIONS } from '../data/constants.js';
import Icon, { WhatsAppIcon } from './Icon.jsx';
import styles from './Contact.module.css';

const EMPTY_FORM = { name: '', course: '', service: SERVICE_OPTIONS[0], notes: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send `form` to your backend or form service here.
    setSubmitted(true);
    setForm(EMPTY_FORM);
  };

  return (
    <section id="contact" className="wrap">
      <div className={styles.hub}>
        <div className={styles.intro}>
          <span className="eyebrow">Book a consultation</span>
          <h2 className={styles.title}>{CONTACT.title}</h2>
          <p className={styles.text}>{CONTACT.text}</p>

          <a className={styles.whatsapp} href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
            <span className={styles.waIcon}>
              <WhatsAppIcon size={18} />
            </span>
            Chat on WhatsApp
          </a>

          <span className={styles.response}>
            <Icon name="bolt" size={14} />
            {CONTACT.response}
          </span>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="cf-name">Full Name</label>
            <input id="cf-name" name="name" value={form.name} onChange={update} placeholder="e.g. Priya Sharma" autoComplete="name" maxLength={100} required />
          </div>
          <div className={styles.field}>
            <label htmlFor="cf-course">University / Course</label>
            <input id="cf-course" name="course" value={form.course} onChange={update} placeholder="e.g. MBA, Delhi University" maxLength={150} required />
          </div>
          <div className={styles.field}>
            <label htmlFor="cf-service">Preferred Service</label>
            <select id="cf-service" name="service" value={form.service} onChange={update}>
              {SERVICE_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="cf-notes">Draft Stage / Notes</label>
            <textarea id="cf-notes" name="notes" rows={4} value={form.notes} onChange={update} placeholder="Where are you in the process, and what's your deadline?" maxLength={2000} />
          </div>
          <button type="submit" className={styles.submit} disabled={submitted}>
            {submitted ? (
              <>
                <Icon name="check" size={18} strokeWidth={3} /> Request sent
              </>
            ) : (
              <>
                Send Request <Icon name="arrow" size={18} />
              </>
            )}
          </button>
          <p className={styles.status} role="status" aria-live="polite">
            {submitted && "Thanks! We'll get back to you shortly."}
          </p>
        </form>
      </div>
    </section>
  );
}
