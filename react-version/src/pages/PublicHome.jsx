import React from 'react';

const PublicHome = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content" data-aos="fade-right">
              <span className="badge">Admissions 2026 Open</span>
              <h1>Unlocking the <span>Future</span> of Global Talent</h1>
              <p>Skyra Institute provides a world-class environment where innovation meets tradition. Join thousands of students building the next generation of tech and business.</p>
              <div className="hero-actions">
                <a href="/admission" className="btn btn-primary">Get Started <i className="fas fa-chevron-right"></i></a>
                <a href="/about" className="btn btn-outline">Learn More</a>
              </div>
            </div>
            <div className="hero-visual" data-aos="fade-left">
              <img src="/college_campus_hero.png" alt="Skyra Campus" className="hero-main-img" />
              <div className="floating-card card-1">
                <div className="program-icon" style={{ margin: 0 }}><i className="fas fa-star"></i></div>
                <div>
                  <h4 style={{ fontSize: '1rem' }}>Top Tier Faculty</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>From Global Universities</p>
                </div>
              </div>
              <div className="floating-card card-2">
                <div className="program-icon" style={{ margin: 0 }}><i className="fas fa-rocket"></i></div>
                <div>
                  <h4 style={{ fontSize: '1rem' }}>98% Placement</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>In Fortune 500 Companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding" id="about">
        <div className="container">
          <div className="hero-grid" style={{ gridTemplateColumns: '0.9fr 1.1fr', gap: '6rem' }}>
            <div className="hero-visual" data-aos="fade-right">
              <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1498&auto=format&fit=crop" alt="Campus Life" className="hero-main-img" />
              <div className="floating-card" style={{ bottom: '-20px', left: '-20px', background: 'var(--primary)', color: 'white' }}>
                <div className="program-icon" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><i className="fas fa-quote-left"></i></div>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>"Excellence is not a skill, it's an attitude."</p>
              </div>
            </div>
            <div className="hero-content" data-aos="fade-left">
              <span className="badge">Legacy of Excellence</span>
              <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>A Gateway to Your <br /><span>Professional Success</span></h2>
              <p>Since 1995, Skyra Institute of Technology has been at the forefront of academic innovation. We don't just teach subjects; we cultivate the leaders, thinkers, and creators of tomorrow. Our curriculum is built on the pillars of <strong>Research, Innovation, and Real-world Application</strong>.</p>
              <p style={{ marginBottom: '2rem' }}>When you inquire today, you're not just asking about a course—you're taking the first step into a community that values your ambition and supports your unique journey toward greatness.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left' }}>
                <div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}><i className="fas fa-certificate"></i> Accredited</h4>
                  <p style={{ fontSize: '0.9rem' }}>Globally recognized degrees and certifications.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}><i className="fas fa-globe-americas"></i> Global Network</h4>
                  <p style={{ fontSize: '0.9rem' }}>Connect with 25,000+ alumni in 40+ countries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="container" data-aos="fade-up">
        <div className="stats-bar">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>25k+</h3>
              <p>Alumni Worldwide</p>
            </div>
            <div className="stat-item">
              <h3>150+</h3>
              <p>Research Projects</p>
            </div>
            <div className="stat-item">
              <h3>40+</h3>
              <p>Partner Universities</p>
            </div>
            <div className="stat-item">
              <h3>$12M</h3>
              <p>Scholarships Awarded</p>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <section className="section-padding" id="programs">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="badge">Our Expertise</span>
            <h2>World-Class Programs</h2>
            <p>Designed in collaboration with industry leaders to ensure our graduates are ready for the evolving demands of the global workforce.</p>
          </div>
          <div className="program-grid">
            <div className="program-card" data-aos="fade-up" data-aos-delay="100">
              <div className="program-img">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop" alt="Computer Science" />
              </div>
              <div className="program-body">
                <div className="program-icon"><i className="fas fa-laptop-code"></i></div>
                <h3>Computer Science & AI</h3>
                <p>Dive deep into machine learning, cybersecurity, and cloud architecture with hands-on labs.</p>
                <a href="/admission" style={{ marginTop: '1.5rem', display: 'inline-block', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>Apply Now →</a>
              </div>
            </div>
            <div className="program-card" data-aos="fade-up" data-aos-delay="200">
              <div className="program-img">
                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1471&auto=format&fit=crop" alt="Business" />
              </div>
              <div className="program-body">
                <div className="program-icon"><i className="fas fa-briefcase"></i></div>
                <h3>Global Business Management</h3>
                <p>Master leadership, finance, and entrepreneurship in an increasingly connected world.</p>
                <a href="/admission" style={{ marginTop: '1.5rem', display: 'inline-block', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>Apply Now →</a>
              </div>
            </div>
            <div className="program-card" data-aos="fade-up" data-aos-delay="300">
              <div className="program-img">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop" alt="Engineering" />
              </div>
              <div className="program-body">
                <div className="program-icon"><i className="fas fa-tools"></i></div>
                <h3>Advanced Engineering</h3>
                <p>From robotics to sustainable energy, build solutions for the world's greatest challenges.</p>
                <a href="/admission" style={{ marginTop: '1.5rem', display: 'inline-block', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>Apply Now →</a>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="section-padding" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="badge">Success Stories</span>
            <h2>Voices of Skyra</h2>
            <p>Hear from our alumni who have transitioned from students to global professionals.</p>
          </div>
          <div className="program-grid">
            <div className="program-card" style={{ padding: 0 }} data-aos="fade-up">
              <div style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '0.2rem', color: 'var(--accent)', marginBottom: '1rem' }}>
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <p style={{ fontStyle: 'italic', marginBottom: '2rem' }}>"The AI program at Skyra changed my life. The hands-on labs and mentorship from faculty were instrumental in me landing a role at Google."</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} alt="Alex Rivera" />
                  <div>
                    <h4 style={{ fontSize: '1rem' }}>Alex Rivera</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>B.Sc Computer Science, Class of '23</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="program-card" style={{ padding: 0 }} data-aos="fade-up" data-aos-delay="100">
              <div style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '0.2rem', color: 'var(--accent)', marginBottom: '1rem' }}>
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <p style={{ fontStyle: 'italic', marginBottom: '2rem' }}>"The business curriculum is so aligned with the real world. I was able to start my own startup while still in my final year!"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} alt="Sarah Chen" />
                  <div>
                    <h4 style={{ fontSize: '1rem' }}>Sarah Chen</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>MBA, Class of '22</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="program-card" style={{ padding: 0 }} data-aos="fade-up" data-aos-delay="200">
              <div style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '0.2rem', color: 'var(--accent)', marginBottom: '1rem' }}>
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <p style={{ fontStyle: 'italic', marginBottom: '2rem' }}>"Skyra's engineering labs are world-class. I worked on a robotics project that won a national award. Highly recommended."</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} alt="James Miller" />
                  <div>
                    <h4 style={{ fontSize: '1rem' }}>James Miller</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>B.E. Mechanical, Class of '24</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ background: 'var(--primary-dark)', color: 'white', borderRadius: '4px', margin: '4rem 2rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white' }} data-aos="fade-up">Ready to Start Your Journey?</h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto 2.5rem' }} data-aos="fade-up" data-aos-delay="100">
            Join Skyra Institute and build your future with world-class education and industry-leading experts.
          </p>
          <div className="cta-actions" data-aos="fade-up" data-aos-delay="200">
            <a href="/admission" className="btn" style={{ background: 'white', color: 'var(--primary)', padding: '1rem 2.5rem', borderRadius: '4px' }}>Apply Now <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem' }}></i></a>
            <a href="/contact" className="btn" style={{ background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.3)', padding: '1rem 2.5rem', marginLeft: '1rem', borderRadius: '4px' }}>Contact Us</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PublicHome;
