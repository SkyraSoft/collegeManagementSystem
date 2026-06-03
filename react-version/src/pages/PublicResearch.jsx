import React from 'react';
import { Link } from 'react-router-dom';

const PublicResearch = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 33, 71, 0.85), rgba(0, 33, 71, 0.95)), url('https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1470&auto=format&fit=crop')`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          padding: '8rem 0 7rem 0'
        }}
      >
        <div className="container">
          <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
            Innovation & Discovery
          </span>
          <h1 data-aos="fade-up" style={{ color: 'white' }}>Research Initiatives</h1>
          <p data-aos="fade-up" data-aos-delay="100" style={{ color: '#cbd5e1', maxWidth: '700px' }}>
            Skyra Institute is at the forefront of groundbreaking research, tackling global challenges through multidisciplinary collaboration and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Floating Stats Bar */}
      <div className="container" data-aos="fade-up" style={{ position: 'relative', zIndex: 2 }}>
        <div className="research-stats-grid">
          <div className="research-stat-card">
            <i className="fas fa-microscope"></i>
            <h3>$45M+</h3>
            <p>Annual Funding</p>
          </div>
          <div className="research-stat-card">
            <i className="fas fa-flask"></i>
            <h3>250+</h3>
            <p>Active Projects</p>
          </div>
          <div className="research-stat-card">
            <i className="fas fa-file-contract"></i>
            <h3>120</h3>
            <p>Patents Filed</p>
          </div>
          <div className="research-stat-card">
            <i className="fas fa-handshake"></i>
            <h3>85+</h3>
            <p>Industry Partners</p>
          </div>
        </div>
      </div>

      {/* Research Centers Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <h2>Centers of Excellence</h2>
            <p>Our dedicated institutes bring together leading minds to solve specific societal and technical challenges.</p>
          </div>

          <div className="centers-grid">
            {/* Center 1 */}
            <div className="center-card" data-aos="fade-up">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop" alt="AI Institute" className="center-image" />
              <div className="center-content">
                <h3>Institute for Artificial Intelligence</h3>
                <p>Advancing machine learning, neural networks, and ethical AI deployment for the benefit of humanity.</p>
                <Link to="/contact" className="btn btn-outline" style={{ width: '100%' }}>Learn More</Link>
              </div>
            </div>

            {/* Center 2 */}
            <div className="center-card" data-aos="fade-up" data-aos-delay="100">
              <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1374&auto=format&fit=crop" alt="Sustainability Center" className="center-image" />
              <div className="center-content">
                <h3>Center for Global Sustainability</h3>
                <p>Developing renewable energy technologies, smart grids, and ecological conservation strategies.</p>
                <Link to="/contact" className="btn btn-outline" style={{ width: '100%' }}>Learn More</Link>
              </div>
            </div>

            {/* Center 3 */}
            <div className="center-card" data-aos="fade-up" data-aos-delay="200">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop" alt="Robotics Lab" className="center-image" />
              <div className="center-content">
                <h3>Advanced Robotics Lab</h3>
                <p>Pioneering the next generation of autonomous systems, medical robotics, and human-computer interaction.</p>
                <Link to="/contact" className="btn btn-outline" style={{ width: '100%' }}>Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Section: Opportunities & Breakthroughs */}
      <section className="section-padding" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="about-grid">
            
            {/* Left Column: Student Opportunities */}
            <div data-aos="fade-right">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Student Research</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                We believe that research is an integral part of the learning experience. The <strong>Undergraduate Research Opportunities Program (UROP)</strong> allows students to work directly alongside faculty on cutting-edge projects starting as early as their sophomore year.
              </p>
              
              <ul className="feature-list" style={{ marginBottom: '2rem' }}>
                <li><i className="fas fa-check-circle"></i> Paid Research Assistantships</li>
                <li><i className="fas fa-check-circle"></i> Summer Research Fellowships</li>
                <li><i className="fas fa-check-circle"></i> Annual Student Symposium</li>
                <li><i className="fas fa-check-circle"></i> Co-authorship Opportunities</li>
              </ul>
              
              <div style={{ background: 'white', padding: '2rem', borderRadius: '4px', border: '1px solid var(--border)' }}>
                <h4 style={{ color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Want to get involved?</h4>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Browse the current directory of faculty projects seeking student assistants.</p>
                <Link to="/contact" className="btn btn-primary">Browse Projects</Link>
              </div>
            </div>

            {/* Right Column: Recent Breakthroughs */}
            <div data-aos="fade-left">
              <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', color: 'var(--primary)' }}>Recent Breakthroughs</h2>
              
              <div className="breakthroughs-list">
                <div className="breakthrough-item">
                  <div className="breakthrough-date">
                    <span>Oct</span>
                    <small>2025</small>
                  </div>
                  <div className="breakthrough-details">
                    <h4>New highly-efficient solar cell architecture</h4>
                    <p>Researchers at the Sustainability Center have developed a perovskite solar cell that achieves 29.5% efficiency, setting a new global benchmark for renewable materials.</p>
                  </div>
                </div>

                <div className="breakthrough-item">
                  <div className="breakthrough-date">
                    <span>Aug</span>
                    <small>2025</small>
                  </div>
                  <div className="breakthrough-details">
                    <h4>AI model predicting protein folding</h4>
                    <p>The AI Institute published findings on a new neural network architecture capable of predicting complex protein structures 100x faster than previous generation models.</p>
                  </div>
                </div>

                <div className="breakthrough-item">
                  <div className="breakthrough-date">
                    <span>May</span>
                    <small>2025</small>
                  </div>
                  <div className="breakthrough-details">
                    <h4>Swarm robotics for disaster recovery</h4>
                    <p>A joint team of faculty and graduate students successfully deployed a swarm of autonomous micro-drones designed to map structurally compromised buildings.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/contact" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--secondary)', fontWeight: '600', textDecoration: 'none' }}>
                View all publications <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem', fontSize: '0.8rem' }}></i>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default PublicResearch;
