import React from 'react';

export default function Contact() {
  return (
    <section className="container">
      <h2>Let's Connect</h2>
      <p style={{ color: '#9ca3af', marginTop: '0.5rem', marginBottom: '2rem', maxWidth: '500px' }}>
        I'm always open to talking architecture, computer networking paradigms, or potential technical collaborations.
      </p>
      <div className="card" style={{ maxWidth: '400px' }}>
        <h3>Inquiries & Communications</h3>
        <p style={{ margin: '0.5rem 0 1rem 0' }}>Feel free to drop a message directly via email or check my active logs.</p>
        <a href="chaitchinu@gmail.com" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 'bold' }}>chaitchinu@gmail.com</a>
      </div>
    </section>
  );
}