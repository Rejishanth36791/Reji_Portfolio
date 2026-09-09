import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { sendEmailMessage } from '../services/emailjs';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertState, setAlertState] = useState<{
    show: boolean;
    type: 'success' | 'error';
    text: string;
  }>({ show: false, type: 'success', text: '' });

  const validateEmail = (emailStr: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Form Validation
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) {
      setAlertState({
        show: true,
        type: 'error',
        text: 'Please enter your name.',
      });
      return;
    }

    if (!trimmedEmail) {
      setAlertState({
        show: true,
        type: 'error',
        text: 'Please enter your email address.',
      });
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setAlertState({
        show: true,
        type: 'error',
        text: 'Please enter a valid email address.',
      });
      return;
    }

    if (!trimmedSubject) {
      setAlertState({
        show: true,
        type: 'error',
        text: 'Please enter a subject for your message.',
      });
      return;
    }

    if (!trimmedMessage) {
      setAlertState({
        show: true,
        type: 'error',
        text: 'Please enter your message.',
      });
      return;
    }

    setIsSubmitting(true);
    setAlertState({ show: false, type: 'success', text: '' });

    try {
      await sendEmailMessage({
        name: trimmedName,
        email: trimmedEmail,
        subject: trimmedSubject,
        message: trimmedMessage,
      });

      setAlertState({
        show: true,
        type: 'success',
        text: "Message sent successfully! I'll get back to you soon.",
      });

      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err: unknown) {
      console.error('EmailJS submission error:', err);

      const userFriendlyMessage =
        err instanceof Error && err.message
          ? err.message
          : 'Something went wrong while sending your message. Please try again.';

      setAlertState({
        show: true,
        type: 'error',
        text: userFriendlyMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{ borderTop: '1px solid var(--border-line)' }}>
      <div className="container">
        <div className="section-eyebrow">GET IN TOUCH</div>
        <h2 className="section-title">Let's build something.</h2>
        <p className="section-desc">
          Open for Software Engineering and Full-Stack internship opportunities.
        </p>

        <div className="contact-grid">
          <div>
            <div className="contact-item">
              <a
                href="mailto:rejishanth422@gmail.com"
                className="contact-icon"
                aria-label="Email Rejishanth"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
              <div>
                <h4 style={{ color: 'var(--text-title)', fontFamily: 'var(--font-display)' }}>
                  Email
                </h4>
                <a
                  href="mailto:rejishanth422@gmail.com"
                  style={{ color: 'var(--text-muted)', fontSize: '14px' }}
                >
                  rejishanth422@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <a
                href="https://www.linkedin.com/in/rejishanth-pushpenthira-095047376/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
                aria-label="LinkedIn Profile"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <div>
                <h4 style={{ color: 'var(--text-title)', fontFamily: 'var(--font-display)' }}>
                  LinkedIn
                </h4>
                <a
                  href="https://www.linkedin.com/in/rejishanth-pushpenthira-095047376/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-muted)', fontSize: '14px' }}
                >
                  https://www.linkedin.com/in/rejishanth-pushpenthira-095047376/
                </a>
              </div>
            </div>

            <div className="contact-item">
              <a
                href="https://github.com/Rejishanth36791"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
                aria-label="GitHub Profile"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <div>
                <h4 style={{ color: 'var(--text-title)', fontFamily: 'var(--font-display)' }}>
                  GitHub
                </h4>
                <a
                  href="https://github.com/Rejishanth36791"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-muted)', fontSize: '14px' }}
                >
                  https://github.com/Rejishanth36791
                </a>
              </div>
            </div>
          </div>

          <GlassCard>
            <form onSubmit={handleSubmit} id="contactForm" noValidate>
              <div className="form-group">
                <label htmlFor="formName" className="sr-only">Your Name</label>
                <input
                  type="text"
                  id="formName"
                  name="name"
                  className="form-input"
                  placeholder="Your Name"
                  aria-label="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="formEmail" className="sr-only">Your Email</label>
                <input
                  type="email"
                  id="formEmail"
                  name="email"
                  className="form-input"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="formSubject" className="sr-only">Subject</label>
                <input
                  type="text"
                  id="formSubject"
                  name="subject"
                  className="form-input"
                  placeholder="Subject"
                  aria-label="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="formMessage" className="sr-only">Your Message</label>
                <textarea
                  id="formMessage"
                  name="message"
                  className="form-input"
                  placeholder="Your Message"
                  aria-label="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              {alertState.show && (
                <div
                  id="formAlert"
                  style={{
                    display: 'block',
                    marginBottom: '16px',
                    fontSize: '13px',
                    fontFamily: 'var(--font-mono)',
                    padding: '10px',
                    borderRadius: '8px',
                    background:
                      alertState.type === 'success'
                        ? 'rgba(34, 197, 94, 0.15)'
                        : 'rgba(239, 68, 68, 0.15)',
                    color: alertState.type === 'success' ? '#22c55e' : '#ef4444',
                    border: `1px solid ${alertState.type === 'success' ? '#22c55e' : '#ef4444'}`,
                  }}
                >
                  {alertState.type === 'success' ? `✓ ${alertState.text}` : `✕ ${alertState.text}`}
                </div>
              )}

              <button
                type="submit"
                id="submitBtn"
                className="btn-primary"
                disabled={isSubmitting}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {isSubmitting ? (
                  <>
                    SENDING... <i className="fa-solid fa-spinner fa-spin"></i>
                  </>
                ) : (
                  <>
                    SEND MESSAGE <i className="fa-regular fa-paper-plane"></i>
                  </>
                )}
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
