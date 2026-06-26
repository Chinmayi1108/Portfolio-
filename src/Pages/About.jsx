import React from 'react';

export default function About() {
  return (
    <section className="container">
      <h2>Technical Core Competencies</h2>
      <p style={{ color: '#9ca3af', marginTop: '0.5rem' }}>How I systematically break down my curriculum and self-studies:</p>
      
      <div className="grid">
        <div className="card">
          <h3>Object-Oriented Logic</h3>
          <p>Writing highly structured, error-resistant code focusing heavily on clean modular design principles and custom exception handling structures.</p>
          <div className="tag-container">
            <span className="tag">Java Core</span>
            <span className="tag">OOPs</span>
            <span className="tag">Robust I/O</span>
          </div>
        </div>

        <div className="card">
          <h3>Systems & Architecture</h3>
          <p>Analyzing low-level execution cycles, custom memory segmentation schemas, and instructions execution flows at the hardware level.</p>
          <div className="tag-container">
            <span className="tag">8086 Assembly</span>
            <span className="tag">Microprocessors</span>
          </div>
        </div>

        <div className="card">
          <h3>Networking Layouts</h3>
          <p>Deep-diving into stateful vs stateless addressing paradigms, custom IP subnetting equations, and foundational data transmission protocols.</p>
          <div className="tag-container">
            <span className="tag">TCP/IP Suite</span>
            <span className="tag">Subnetting</span>
          </div>
        </div>
      </div>
    </section>
  );
}