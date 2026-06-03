import React from 'react';
import { Link } from 'react-router-dom';

const PublicAcademics = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="badge">Explore Our Programs</span>
          <h1 data-aos="fade-up">Academics at Skyra</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Discover a diverse range of undergraduate and graduate programs designed to foster critical thinking, innovation, and leadership.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Our Faculties</h2>
            <p>World-class education delivered across multiple disciplines.</p>
          </div>
          <div className="program-grid">
            <div className="program-card" data-aos="fade-up">
              <div className="program-body">
                <div className="program-icon"><i className="fas fa-laptop-code"></i></div>
                <h3>Computer Science & IT</h3>
                <p>Leading the digital frontier with degrees in AI, Cyber Security, and Software Engineering.</p>
                <Link to="/academics/computer-science" className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>View Programs</Link>
              </div>
            </div>
            <div className="program-card" data-aos="fade-up" data-aos-delay="100">
              <div className="program-body">
                <div className="program-icon"><i className="fas fa-chart-line"></i></div>
                <h3>Business & Management</h3>
                <p>Shaping future leaders through finance, marketing, and global business strategies.</p>
                <Link to="/academics/business" className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>View Programs</Link>
              </div>
            </div>
            <div className="program-card" data-aos="fade-up" data-aos-delay="200">
              <div className="program-body">
                <div className="program-icon"><i className="fas fa-flask"></i></div>
                <h3>Engineering & Sciences</h3>
                <p>Innovating solutions for tomorrow's challenges in mechanical, civil, and environmental engineering.</p>
                <Link to="/academics/engineering" className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>View Programs</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Apply?</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>Take the next step in your academic journey.</p>
          <Link to="/admission" className="btn btn-primary">Start Application</Link>
        </div>
      </section>
    </>
  );
};

export default PublicAcademics;
