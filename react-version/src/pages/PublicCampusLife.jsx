import React from 'react';

const PublicCampusLife = () => {
  return (
    <>
      <section className="page-header" style={{ padding: '6rem 0 5rem' }}>
        <div className="container">
          <span className="badge">Student Experience</span>
          <h1 data-aos="fade-up">Campus Life</h1>
          <p data-aos="fade-up" data-aos-delay="100" style={{ maxWidth: '760px' }}>
            Experience a vibrant, inclusive, and dynamic campus environment where you can grow personally and professionally through clubs, wellness, housing, and community life.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="campus-highlights-grid" data-aos="fade-up">
            <article className="campus-highlight-card">
              <h3>50+ student organizations</h3>
              <p>Explore leadership, innovation, culture, arts, and service opportunities with clubs that match your interests.</p>
            </article>
            <article className="campus-highlight-card">
              <h3>Wellness & support</h3>
              <p>Access fitness centers, counseling, mentoring, and wellness programs designed to help you thrive.</p>
            </article>
            <article className="campus-highlight-card">
              <h3>Live on campus</h3>
              <p>Choose residence halls with academic support, dining variety, and community events all in one place.</p>
            </article>
          </div>

          <div className="program-grid" style={{ marginTop: '2rem' }}>
            <div className="program-card" data-aos="fade-up">
              <div className="program-img">
                <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1470&auto=format&fit=crop" alt="Student Life" />
              </div>
              <div className="program-body">
                <h3>Clubs & Organizations</h3>
                <p>Join over 50 student-led clubs ranging from robotics and debate to cultural associations and performing arts.</p>
              </div>
            </div>
            <div className="program-card" data-aos="fade-up" data-aos-delay="100">
              <div className="program-img">
                <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop" alt="Athletics" />
              </div>
              <div className="program-body">
                <h3>Athletics & Fitness</h3>
                <p>Stay active with our state-of-the-art sports complex, intramural leagues, and varsity teams.</p>
              </div>
            </div>
            <div className="program-card" data-aos="fade-up" data-aos-delay="200">
              <div className="program-img">
                <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1469&auto=format&fit=crop" alt="Housing" />
              </div>
              <div className="program-body">
                <h3>Housing & Dining</h3>
                <p>Enjoy comfortable, modern residence halls and diverse dining options across our beautiful campus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="about-grid">
            <div data-aos="fade-right">
              <span className="badge" style={{ background: 'rgba(14, 116, 144, 0.08)', color: 'var(--secondary)', border: '1px solid rgba(14, 116, 144, 0.18)' }}>Why students love it</span>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>A community built for connection</h2>
              <p style={{ lineHeight: '1.8', color: 'var(--text-muted)' }}>
                From innovation labs and student events to wellness programs and residence hall traditions, Skyra offers a campus experience that supports both academic success and personal growth.
              </p>
              <ul className="feature-list" style={{ marginTop: '1.2rem' }}>
                <li><i className="fas fa-check-circle"></i> Festival nights, leadership workshops, and weekly socials</li>
                <li><i className="fas fa-check-circle"></i> Career mentoring, peer support, and campus resource hubs</li>
                <li><i className="fas fa-check-circle"></i> Safe, welcoming spaces for study, wellness, and friendship</li>
              </ul>
            </div>

            <div className="campus-spotlight" data-aos="fade-left">
              <h3>Upcoming campus experiences</h3>
              <div className="campus-event-item">
                <strong>Innovation Week</strong>
                <p>Prototype challenges, guest speakers, and student showcases across campus.</p>
              </div>
              <div className="campus-event-item">
                <strong>Wellness Fest</strong>
                <p>Fitness classes, mindfulness sessions, and wellness resources for every student.</p>
              </div>
              <div className="campus-event-item">
                <strong>Residence Life Socials</strong>
                <p>Community dinners, leadership activities, and evening events for first-year students.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PublicCampusLife;
