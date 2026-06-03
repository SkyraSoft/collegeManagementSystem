import React from 'react';

const PublicCampusLife = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="badge">Student Experience</span>
          <h1 data-aos="fade-up">Campus Life</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Experience a vibrant, inclusive, and dynamic campus environment where you can grow personally and professionally.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="program-grid">
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
    </>
  );
};

export default PublicCampusLife;
