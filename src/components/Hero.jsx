import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import profileImg from '../assets/profile_headshot.jpg';

export default function Hero() {
  return (
    <section id="home" className="section min-h-screen">
      {/* Decorative Glows */}
      <div className="bg-glow teal"></div>
      <div className="bg-glow blue" style={{ top: '40%', left: '50%' }}></div>

      <div className="container hero-container">
        {/* Left: Text Content */}
        <div className="hero-content animate-fade-in">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for Freelance & Projects
          </div>

          <h1 className="hero-title">
            Hi, I'm <span style={{
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Sai Krishna</span>
          </h1>

          <h2 className="hero-subtitle">
            .NET Full-Stack Developer & Software Engineer @ Wipro
          </h2>

          <p className="hero-text">
            I engineer secure, high-performance web applications using C#, ASP.NET Core, and Microsoft Azure, backed by cybersecurity certifications and internships at Microsoft, IBM, and Cisco.
          </p>

          {/* CTAs */}
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              View My Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <a 
              href="https://github.com/Sai-Durgapu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-social-link"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/durgapu-sai-krishna-224064249/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-social-link"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a 
              href="mailto:durgapusaikrishna99@gmail.com" 
              className="hero-social-link"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right: Profile Picture */}
        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.25s' }}>
          <div className="hero-image-container">
            <div className="hero-image-glow"></div>
            <div className="hero-image-wrapper">
              <img 
                src={profileImg} 
                alt="Durgapu Sai Krishna" 
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
