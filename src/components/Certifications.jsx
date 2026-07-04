import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      name: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
      id: 'SC-900',
      issuer: 'Microsoft',
      type: 'Cloud Security',
      icon: ShieldCheck
    },
    {
      name: 'Microsoft Applied Skills: C# Classes, Properties & OOP Methods',
      id: 'Applied Skills',
      issuer: 'Microsoft',
      type: 'Software Development',
      icon: Award
    },
    {
      name: 'IBM Cybersecurity Analyst Professional',
      id: 'Professional Certificate',
      issuer: 'IBM',
      type: 'Cybersecurity',
      icon: ShieldCheck
    },
    {
      name: 'Fortinet NSE 1 & 2 Network Security Associate',
      id: 'NSE 1 & 2',
      issuer: 'Fortinet',
      type: 'Network Security',
      icon: ShieldCheck
    },
    {
      name: 'Soft Skills Certification',
      id: 'NPTEL',
      issuer: 'NPTEL',
      type: 'Professional Development',
      icon: Award
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">
          Professional <span>Certifications</span>
        </h2>

        <div className="certifications-grid">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <div 
                key={idx} 
                className="cert-card glass-panel"
              >
                <div>
                  {/* Badge Header */}
                  <div className="cert-header">
                    <span className="cert-type">
                      {cert.type}
                    </span>
                    <Icon size={24} className="cert-icon" />
                  </div>

                  <h3 className="cert-title">
                    {cert.name}
                  </h3>
                </div>

                <div className="cert-footer">
                  <span className="cert-issuer">{cert.issuer}</span>
                  {cert.id && (
                    <span className="cert-id">
                      {cert.id}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
