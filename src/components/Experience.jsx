import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Software Engineer (Developer L1)',
      company: 'Wipro Limited',
      location: 'Bengaluru, Karnataka, India',
      duration: 'Mar 2026 - Present',
      type: 'Full-time',
      bullets: [
        'Completed developer training in C#, SQL Server, and Clean Architecture.',
        'Built a secure billing web application using ASP.NET Core 8/10 and EF Core.',
        'Integrated JWT logins, domain-based routing, and payment validation rules.',
        'Programmed SignalR real-time alerts, database relationships, and global search.',
        'Containerized the stack using Docker Compose and wrote xUnit tests.'
      ]
    },
    {
      role: 'Cybersecurity Intern',
      company: 'IBM X SmartBridge',
      location: 'Remote',
      duration: 'Nov 2023 - Apr 2024',
      type: 'Internship',
      bullets: [
        'Analyzed threat logs using Splunk and Nessus under NIST/ISO 27001 frameworks.',
        'Gained hands-on experience in log investigation and threat mitigation.'
      ]
    },
    {
      role: 'Azure Virtual Intern',
      company: 'Microsoft',
      location: 'Remote',
      duration: 'Aug 2022 - Nov 2022',
      type: 'Internship',
      bullets: [
        'Learned network security basics and configured Azure firewalls and Access Control lists (ACLs).',
        'Configured cloud network group rules to filter inbound and outbound traffic.'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      {/* Background Glows */}
      <div className="bg-glow teal" style={{ top: '20%', left: '-10%' }}></div>

      <div className="container">
        <h2 className="section-title">
          Work <span>Experience</span>
        </h2>

        {/* Timeline Layout */}
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              {/* Timeline Dot */}
              <div className="timeline-dot"></div>

              {/* Card content */}
              <div className="timeline-card glass-panel">
                {/* Meta details */}
                <div className="timeline-header">
                  <div className="timeline-title">
                    <h3>{exp.role}</h3>
                    <p className="timeline-company">
                      <Briefcase size={16} style={{ color: 'var(--color-secondary)' }} />
                      {exp.company}
                      <span className="timeline-type">
                        {exp.type}
                      </span>
                    </p>
                  </div>
                  <div className="timeline-meta">
                    <span>
                      <Calendar size={14} />
                      {exp.duration}
                    </span>
                    <span>
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="timeline-bullet">
                      <span>•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
