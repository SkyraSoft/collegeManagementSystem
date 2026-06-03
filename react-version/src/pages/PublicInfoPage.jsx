import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { infoPages } from '../data/publicContent';

const PublicInfoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pageData = infoPages[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!pageData) {
    return (
      <div className="container" style={{ padding: '10rem 2rem', textAlign: 'center' }}>
        <h2>Page Not Found</h2>
        <p>The information you are looking for does not exist or has been moved.</p>
        <button onClick={() => navigate('/home')} className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Home</button>
      </div>
    );
  }

  return (
    <>
      <section className="page-header" style={{ padding: '5rem 0' }}>
        <div className="container">
          {pageData.badge && (
            <span className="badge" style={{ background: 'rgba(255,255,255,0.12)', color: 'white', border: '1px solid rgba(255,255,255,0.18)' }}>
              {pageData.badge}
            </span>
          )}
          <h1 data-aos="fade-up" style={{ marginBottom: '0.75rem' }}>{pageData.title}</h1>
          {pageData.subtitle && (
            <p data-aos="fade-up" data-aos-delay="100" style={{ color: '#cbd5e1', maxWidth: '760px', margin: 0 }}>
              {pageData.subtitle}
            </p>
          )}
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div 
            className="rich-text-content" 
            dangerouslySetInnerHTML={{ __html: pageData.content }}
            style={{ lineHeight: '1.8', fontSize: '1.1rem' }}
          />
          
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <p style={{ color: 'var(--text-muted)' }}>Need more help?</p>
            <Link to="/contact" className="btn btn-outline" style={{ marginTop: '1rem' }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PublicInfoPage;
