import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Finance & Billing Analytics Platform',
      category: 'Capstone Project',
      tech: ['ASP.NET Core 8/10', 'Entity Framework Core', 'SQL Server', 'Clean Architecture', 'SignalR', 'Docker', 'JWT', 'xUnit'],
      description: 'Designed and built a secure, high-performance financial billing and analytics web application following Clean/Onion architecture principles.',
      highlights: [
        'Implemented Repository and Unit of Work patterns for clean database abstraction.',
        'Programmed custom domain validation rules and JWT-based secure authentication.',
        'Integrated SignalR for real-time transaction notifications and automated payment verification checks.',
        'Containerized the entire multi-service stack using Docker and Docker Compose for easy deployment.'
      ],
      github: 'https://github.com/Sai-Durgapu'
    },
    {
      title: 'Project Health Website',
      category: 'Azure Cloud Project',
      tech: ['Microsoft Azure App Service', 'Microsoft Bot SDK', 'HTML5/CSS3', 'JavaScript'],
      description: 'Built an interactive patient portal with a virtual assistant bot for symptom triage and patient scheduling.',
      highlights: [
        'Deployed fully responsive web application directly onto Microsoft Azure App Services.',
        'Integrated virtual assistant triage using Microsoft Bot SDK to guide patient scheduling.',
        'Implemented secure patient endpoints for symptom data logging.'
      ],
      github: 'https://github.com/Sai-Durgapu'
    }
  ];

  return (
    <section id="projects" className="section" style={{ background: 'rgba(11, 17, 32, 0.3)' }}>
      {/* Background Glows */}
      <div className="bg-glow blue" style={{ bottom: '-10%', right: '-10%' }}></div>

      <div className="container">
        <h2 className="section-title">
          Key <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card glass-panel">
              <div>
                {/* Header */}
                <div className="project-header">
                  <div>
                    <span className="project-category">
                      {project.category}
                    </span>
                    <h3 className="project-title">
                      {project.title}
                    </h3>
                  </div>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                    title="View Source on GitHub"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <p className="project-desc">
                  {project.description}
                </p>

                {/* Bullets/Highlights */}
                <div className="project-contrib">
                  <h4 className="project-contrib-title">
                    <Code2 size={14} style={{ color: 'var(--color-primary)' }} /> Key Contributions
                  </h4>
                  <ul className="project-bullets">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="project-bullet">
                        <span>•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="tech-tag"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
