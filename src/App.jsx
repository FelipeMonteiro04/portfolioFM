import React from 'react';
import './App.css';

function App() {
  const projects = [
    {
      title: "Parking Lot Management System",
      tech: "Java",
      desc: "Software desktop em Java para controlo de acessos, tarifários e gestão de ocupação de parques."
    },
    {
      title: "EFatura_Mobile",
      tech: "Kotlin",
      desc: "Aplicação Android para consulta, gestão e emissão de faturas digitais com foco em usabilidade."
    },
    {
      title: "Sistema de Monitoramento e Gestão de Pecuária",
      tech: "Kotlin",
      desc: "Aplicação mobile destinada ao monitoramento e gestão de pecuária e atividades afins."
    },
    {
      title: "parkingRecognizer",
      tech: "Python, OpenCV",
      desc: "Sistema de visão computacional em Python para deteção e monitorização de lugares de estacionamento em tempo real."
    },
    {
      title: "EventPlatform",
      tech: "Python",
      desc: "Sistema Web simples para registo e gestão de eventos."
    }
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid #ccc', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Felipe Miguel Vieira Monteiro</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>Software Engineering Student | Full-Stack Developer</p>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
          <a href="https://github.com/FelipeMonteiro04" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/felipe-monteiro-1a89082a5" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:felipe12monteiro@gmail.com">Email</a>
        </div>
      </header>

      {/* About */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2>Sobre Mim</h2>
        <p style={{ lineHeight: '1.6' }}>
          Estudante de Engenharia Informática e de Computadores focado em desenvolvimento de software 
          (Node.js, NestJS, React, PostgreSQL e Docker) e com base sólida em redes e cibersegurança.
        </p>
      </section>

      {/* Tech Stack */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2>Principais Tecnologias</h2>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          {['Node.js', 'NestJS', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'Python', 'Git'].map((tech) => (
            <span key={tech} style={{ background: '#eee', padding: '0.4rem 0.8rem', borderRadius: '4px', fontWeight: 'bold' }}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2>Projetos Académicos & Práticos</h2>
        <div style={{ display: 'grid', gap: '1.5rem', marginTop: '1rem' }}>
          {projects.map((proj, idx) => (
            <div key={idx} style={{ border: '1px solid #ddd', padding: '1.2rem', borderRadius: '8px' }}>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>{proj.title} <small style={{ fontSize: '0.8rem', color: '#666' }}>({proj.tech})</small></h3>
              <p style={{ margin: 0, color: '#444' }}>{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;