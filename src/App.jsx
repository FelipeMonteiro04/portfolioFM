import React from 'react';
import './App.css';

function App() {
  const skills = [
    {
      category: "Backend Development",
      items: ["Node.js", "NestJS", "TypeScript", "JavaScript (ES6+)"]
    },
    {
      category: "Frontend Development",
      items: ["React", "HTML5", "CSS", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Databases & DevOps",
      items: ["PostgreSQL", "Prisma ORM", "Docker", "Git", "GitHub"]
    },
    {
      category: "Networking & Systems",
      items: ["Routing & Switching", "LAN & WLAN Configuration", "UNIX/Linux Shell"]
    }
  ];

  const experience = [
    {
      company: "Huawei",
      role: "Seeds for the Future Participant",
      location: "Morocco",
      date: "Jul 2024",
      description: "Selected to represent Cape Verde in Huawei's flagship global technology program. Completed intensive training on Cloud Computing, AI fundamentals, 5G networks, and Business Model Canvas. Collaborated with Northern Africa teams on technology innovation projects and digital transformation solutions."
    }
  ];

  const projects = [
    {
      title: "Parking Lot Management System",
      tech: "Java",
      date: "2023",
      desc: "Java desktop software for access control, fee management, and space occupancy tracking."
    },
    {
      title: "EFatura_Mobile",
      tech: "Kotlin",
      date: "2024",
      desc: "Android application for digital invoice consultation, management, and issuance with a focus on usability."
    },
    {
      title: "Livestock Monitoring & Management System",
      tech: "Kotlin",
      date: "2024",
      desc: "Mobile application designed for livestock monitoring and farm management operations."
    },
    {
      title: "parkingRecognizer",
      tech: "Python, OpenCV",
      date: "2025",
      desc: "Computer vision system developed in Python for real-time detection and monitoring of parking spots."
    },
    {
      title: "EventPlatform",
      tech: "Python",
      date: "2025",
      desc: "Simple web platform for event registration and management."
    }
  ];

  const awards = [
    {
      title: "1st Place Winner - Huawei ICT Competition (\"Cloud Track\")",
      issuer: "Huawei",
      date: "Dec 2022 – Feb 2023"
    }
  ];

  const certifications = [
    { name: "JavaScript, TypeScript, and Node.js Course", issuer: "Udemy", date: "Sep 2026" },
    { name: "Agile Project Management", issuer: "HP LIFE", date: "Jul 2026" },
    { name: "Python Fundamentals 1", issuer: "Cisco Networking Academy", date: "Oct 2025" },
    { name: "Cybersecurity Basics", issuer: "ICANN", date: "Feb 2025" },
    { name: "UNIX/Linux Shell & Virtualization", issuer: "ISOC", date: "Aug 2024" },
    { name: "Python Programming Workshop", issuer: "UniCV", date: "Jun 2024" },
    { name: "Design and Deploy a Simple LAN and Wi-Fi", issuer: "ISOC / UniCV", date: "2024" },
    { name: "Introduction to Network Operations", issuer: "ISOC / UniCV", date: "2024" }
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2.5rem 1.5rem', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#222', lineHeight: '1.6' }}>
      
      {/* Header */}
      <header style={{ borderBottom: '2px solid #eaeaea', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.4rem', marginBottom: '0.3rem', color: '#111', fontWeight: '700' }}>Felipe Miguel Vieira Monteiro</h1>
        <p style={{ fontSize: '1.15rem', color: '#444', margin: '0 0 1rem 0', fontWeight: '500' }}>
          Computer Science & Engineering Student | Full-Stack Developer
        </p>
        <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', fontSize: '0.95rem' }}>
          <a href="https://www.linkedin.com/in/felipe-monteiro-9b4946316" target="_blank" rel="noreferrer" style={{ color: '#0066cc', textDecoration: 'none', fontWeight: '500' }}>
            LinkedIn
          </a>
          <a href="https://github.com/FelipeMonteiro04" target="_blank" rel="noreferrer" style={{ color: '#0066cc', textDecoration: 'none', fontWeight: '500' }}>
            GitHub
          </a>
          <span style={{ color: '#666' }}>📍 Praia, Cape Verde</span>
        </div>
      </header>

      {/* Summary */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: '0.4rem', color: '#111', fontSize: '1.4rem' }}>Summary</h2>
        <p style={{ color: '#444', margin: '0.8rem 0 0 0' }}>
          Computer and Informatics Engineering student focused on software development (Node.js, NestJS, React, PostgreSQL, and Docker) with a solid foundation in networking and cybersecurity. Skills developed through academic education, self-driven certifications, and hands-on projects. Strong adaptability, continuous learning mindset, and technical problem-solving skills, aiming to contribute to challenging IT projects.
        </p>
      </section>

      {/* Education */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: '0.4rem', color: '#111', fontSize: '1.4rem' }}>Education</h2>
        <div style={{ marginTop: '0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#111' }}>Universidade de Cabo Verde (UniCV)</h3>
            <p style={{ margin: '0.2rem 0 0 0', color: '#555', fontSize: '0.95rem' }}>
              Bachelor's Degree in Computer and Informatics Engineering — <i>Computer Science & Engineering</i>
            </p>
          </div>
          <span style={{ fontSize: '0.85rem', color: '#777', fontWeight: '500' }}>Praia, Cape Verde • Oct 2021 – Present</span>
        </div>
      </section>

      {/* Experience */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: '0.4rem', color: '#111', fontSize: '1.4rem' }}>Experience</h2>
        {experience.map((exp, idx) => (
          <div key={idx} style={{ marginTop: '0.8rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
              <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#111' }}>{exp.company} — <span style={{ fontWeight: 'normal', color: '#555' }}>{exp.role}</span></h3>
              <span style={{ fontSize: '0.85rem', color: '#777', fontWeight: '500' }}>{exp.location} • {exp.date}</span>
            </div>
            <p style={{ marginTop: '0.4rem', color: '#444', fontSize: '0.95rem' }}>{exp.description}</p>
          </div>
        ))}
      </section>

      {/* Academic Projects */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: '0.4rem', color: '#111', fontSize: '1.4rem' }}>Academic Projects</h2>
        <div style={{ display: 'grid', gap: '1rem', marginTop: '0.8rem' }}>
          {projects.map((proj, idx) => (
            <div key={idx} style={{ border: '1px solid #e2e8f0', padding: '1rem', borderRadius: '6px', backgroundColor: '#fafafa' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.3rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.05rem', color: '#111' }}>
                  {proj.title} <span style={{ fontSize: '0.85rem', color: '#0066cc', fontWeight: 'normal' }}>({proj.tech})</span>
                </h3>
                <span style={{ fontSize: '0.85rem', color: '#777', fontWeight: '500' }}>{proj.date}</span>
              </div>
              <p style={{ margin: 0, color: '#555', fontSize: '0.92rem' }}>{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: '0.4rem', color: '#111', fontSize: '1.4rem' }}>Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '0.8rem' }}>
          {skills.map((skillGroup, idx) => (
            <div key={idx} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.9rem', borderRadius: '6px' }}>
              <h3 style={{ fontSize: '0.95rem', margin: '0 0 0.4rem 0', color: '#0066cc' }}>{skillGroup.category}</h3>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#475569' }}>
                {skillGroup.items.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: '0.4rem', color: '#111', fontSize: '1.4rem' }}>Awards</h2>
        {awards.map((award, idx) => (
          <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '0.8rem' }}>
            <div>
              <strong style={{ color: '#111' }}>{award.title}</strong>
              <span style={{ color: '#666', marginLeft: '0.5rem' }}>— {award.issuer}</span>
            </div>
            <span style={{ fontSize: '0.85rem', color: '#777', fontWeight: '500' }}>{award.date}</span>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: '0.4rem', color: '#111', fontSize: '1.4rem' }}>Certifications</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.8rem', marginTop: '0.8rem' }}>
          {certifications.map((cert, idx) => (
            <div key={idx} style={{ padding: '0.6rem 0.8rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '5px' }}>
              <div style={{ fontWeight: '600', fontSize: '0.88rem', color: '#1e293b' }}>{cert.name}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>
                <span>{cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: '0.4rem', color: '#111', fontSize: '1.4rem' }}>Languages</h2>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '0.8rem', fontSize: '0.95rem', color: '#334155' }}>
          <div><strong>Portuguese:</strong> Native</div>
          <div><strong>English:</strong> Advanced / Professional Working Proficiency</div>
        </div>
      </section>

    </div>
  );
}

export default App;