import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { academicDepartments } from '../data/publicContent';

const PublicDepartment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dept = academicDepartments[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!dept) {
    return (
      <div className="container" style={{ padding: '10rem 2rem', textAlign: 'center' }}>
        <h2>Department Not Found</h2>
        <p>The academic department you are looking for does not exist.</p>
        <button onClick={() => navigate('/academics')} className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Academics</button>
      </div>
    );
  }

  return (
    <>
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 33, 71, 0.85), rgba(0, 33, 71, 0.95)), url(${dept.image})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          padding: '8rem 0 6rem 0'
        }}
      >
        <div className="container">
          <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
            Academic Department
          </span>
          <h1 data-aos="fade-up" style={{ color: 'white' }}>{dept.title}</h1>
          <p data-aos="fade-up" data-aos-delay="100" style={{ color: '#cbd5e1' }}>
            {dept.subtitle}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-content" data-aos="fade-right">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>About the Department</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>{dept.description}</p>
              
              <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>Programs Offered</h3>
              <ul className="feature-list" style={{ marginTop: '1rem' }}>
                {dept.programs.map((prog, idx) => (
                  <li key={idx}><i className="fas fa-graduation-cap"></i> {prog}</li>
                ))}
              </ul>

              <div style={{ marginTop: '3rem' }}>
                <Link to="/admission" className="btn btn-primary">Apply Now</Link>
                <Link to="/academics" className="btn btn-outline" style={{ marginLeft: '1rem' }}>View All Departments</Link>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <div style={{ background: 'var(--bg-subtle)', padding: '3rem', borderRadius: '4px', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>Department at a Glance</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {dept.stats.map((stat, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>{stat.label}</span>
                      <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)' }}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PublicDepartment;
