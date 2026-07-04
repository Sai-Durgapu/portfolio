import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section" style={{ background: 'rgba(11, 17, 32, 0.3)' }}>
      {/* Background Glows */}
      <div className="bg-glow teal" style={{ bottom: '-10%', left: '-10%' }}></div>

      <div className="container">
        <h2 className="section-title">
          Contact <span>Me</span>
        </h2>

        <div className="contact-grid">
          {/* Info Details (Left) */}
          <div className="contact-info glass-panel">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ffffff' }}>Let's Connect</h3>
            <p>
              Whether you're a recruiter seeking a full-stack engineer or a client looking to build a secure web application, feel free to reach out. I will get back to you as soon as possible.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <a href="mailto:durgapusaikrishna99@gmail.com" className="info-item">
                <div className="info-icon-wrapper">
                  <Mail size={16} style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <div className="info-text-label">Email</div>
                  <div className="info-text-value">durgapusaikrishna99@gmail.com</div>
                </div>
              </a>

              <a href="tel:+919390106202" className="info-item">
                <div className="info-icon-wrapper">
                  <Phone size={16} style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <div className="info-text-label">Phone</div>
                  <div className="info-text-value">+91-9390106202</div>
                </div>
              </a>

              <div className="info-item">
                <div className="info-icon-wrapper">
                  <MapPin size={16} style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <div className="info-text-label">Location</div>
                  <div className="info-text-value">Bengaluru, Karnataka, India</div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="contact-socials">
              <a 
                href="https://github.com/Sai-Durgapu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-social-link"
                title="GitHub"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/durgapu-sai-krishna-224064249/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-social-link"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Form Card (Right) */}
          <div className="contact-form glass-panel">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#ffffff' }}>Send Message</h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea 
                  required
                  rows="4"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="form-textarea"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="btn btn-primary"
                style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : status === 'success' ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="footer container">
        <p>&copy; {new Date().getFullYear()} Durgapu Sai Krishna. All rights reserved.</p>
        <p>Crafted with React, Vite & Vanilla CSS</p>
      </footer>
    </section>
  );
}
