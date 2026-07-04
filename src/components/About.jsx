import React from 'react';
import { BookOpen, Award, CheckCircle } from 'lucide-react';
import codingImg from '../assets/profile_coding.jpg';

export default function About() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C#', 'SQL', 'JavaScript', 'HTML5/CSS3']
    },
    {
      title: 'Frameworks',
      skills: ['ASP.NET Core 8/10', 'Web API', 'ASP.NET MVC', 'Entity Framework Core 8', 'SignalR', 'xUnit', 'JWT']
    },
    {
      title: 'Cloud & Databases',
      skills: ['Microsoft Azure', 'SQL Server']
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git/GitHub', 'Docker', 'Docker Compose', 'Visual Studio', 'Splunk', 'Nessus']
    }
  ];

  return (
    <section id="about" className="section" style={{ background: 'rgba(11, 17, 32, 0.3)' }}>
      <div className="container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        {/* Grid Row 1: Profile Image & Biography */}
        <div className="about-grid">
          {/* Left Column: Glowing Action Photo */}
          <div className="about-image-column">
            <div className="about-image-glow"></div>
            <div className="about-image-frame">
              <img 
                src={codingImg} 
                alt="Durgapu Sai Krishna coding at Wipro" 
                className="about-img-file"
              />
            </div>
          </div>

          {/* Right Column: Bio Card */}
          <div className="about-bio glass-panel">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem', color: '#ffffff' }}>My Journey</h3>
            
            <p>
              I am a Software Engineer at <strong>Wipro</strong> with a B.Tech in Information Technology. I graduated in 2024 with a CGPA of <strong>8.17/10</strong>, ranking in the top 10% of my class.
            </p>

            <p>
              Driven by a passion for backend architectures and secure systems, I specialize in building enterprise web services. I bridge the gap between robust software engineering and security operations.
            </p>

            {/* Quick Education & Internship Highlights */}
            <div className="about-stats">
              <div className="stat-card">
                <BookOpen size={20} className="stat-icon" />
                <div>
                  <h4>B.Tech in IT</h4>
                  <p>Kallam Haranadhareddy Institute</p>
                  <div className="stat-meta">CGPA: 8.17/10 (Top 10)</div>
                </div>
              </div>

              <div className="stat-card">
                <Award size={20} className="stat-icon" />
                <div>
                  <h4>Core Internships</h4>
                  <p>Microsoft, IBM, Cisco</p>
                  <div className="stat-meta">Cloud, Cybersecurity & NetSec</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Row 2: Technical Skills Matrix */}
        <div className="skills-container">
          <h3 className="skills-heading">Technical Skills</h3>
          <div className="skills-grid">
            {skillCategories.map((category) => (
              <div 
                key={category.title}
                className="skill-card"
              >
                <h4>
                  <CheckCircle size={16} style={{ color: 'var(--color-primary)' }} />
                  {category.title}
                </h4>
                <div className="skill-badges">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
