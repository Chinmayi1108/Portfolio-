import React from 'react';

export default function Projects() {
  return (
    <section className="container">
      <h2>Featured System Implementations</h2>
      <p style={{ color: '#9ca3af', marginTop: '0.5rem', marginBottom: '3rem' }}>
        Deep-dives into systems architecture, logic emulation, and structural software designs.
      </p>

      <div className="grid">
        
        {/* Highlight Project: CircuitFlow AI */}
        <div className="card featured-card">
          <div className="card-badge">Flagship Project</div>
          <h3>CircuitFlow AI</h3>
          <p className="project-description">
            CircuitFlowAI is a web-based simulation platform that transforms engineering education into a risk-free
            , iterative process. By providing an interactive digital sandbox and an AI-driven tutor
            </p>
          
          <div className="project-highlights">
            <h5>Core Structural Implementations:</h5>
            <ul>
              <li>	Interactive Circuit Canvas: A seamless, drag-and-drop workspace for building and testing designs in real-time.
                <li>	AI-Powered Tutor:  Instant circuit analysis that flags errors, prevents damage, and suggests design improvements.</li>
              <li>Intelligent Search:  A smart component library that filters thousands of parts instantly to keep your workflow fast.</li>
              <li>	Unified Dashboard:  A clean, monochromatic design that integrates project building, testing, and learning into one screen.</li>

</li>
            </ul>
          </div>

          <div className="tag-container">
            
            <span className="tag">Simulation Logic</span>
            <span className="tag">Systems Execution</span>
          </div>
        </div>

        {/* Project 2 */}
        <div className="card">
          <h3>Modular Core Platform Layout</h3>
          <p>An exploration of deep UI hierarchy, building a custom modular framework leveraging React components and clean state routing mechanics.</p>
          <div className="tag-container">
            <span className="tag">React V18</span>
            <span className="tag">CSS Architecture</span>
            <span className="tag">Component Design</span>
          </div>
        </div>

       
      </div>
    </section>
  );
}