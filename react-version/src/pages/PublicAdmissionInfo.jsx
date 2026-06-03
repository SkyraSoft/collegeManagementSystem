import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { admissionPages } from '../data/admissionContent';

const PublicAdmissionInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const page = admissionPages[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!page) {
    return (
      <div className="container" style={{ padding: '10rem 2rem', textAlign: 'center' }}>
        <h2>Page Not Found</h2>
        <p>The admission information you are looking for does not exist.</p>
        <button onClick={() => navigate('/admission')} className="btn btn-primary" style={{ marginTop: '2rem' }}>
          Back to Admissions
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section
        className="page-header"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 33, 71, 0.88), rgba(0, 33, 71, 0.95)), url(${page.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '7rem 0 5rem',
        }}
      >
        <div className="container">
          <span
            className="badge"
            style={{ background: 'rgba(255,255,255,0.12)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            Admissions
          </span>
          <h1 data-aos="fade-up" style={{ color: 'white' }}>{page.title}</h1>
          <p data-aos="fade-up" data-aos-delay="100" style={{ color: '#cbd5e1', maxWidth: '650px' }}>
            {page.subtitle}
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="container" data-aos="fade-up" style={{ marginTop: '-2.5rem', position: 'relative', zIndex: 2 }}>
        <div className="admission-stats-bar">
          {page.stats.map((s, i) => (
            <div key={i} className="admission-stat">
              <i className={s.icon}></i>
              <div>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content + Sidebar */}
      <section className="section-padding">
        <div className="container">
          <div className="admission-layout">
            {/* Content Column */}
            <div className="admission-main">
              {/* Overview */}
              <div className="admission-block" data-aos="fade-up">
                <h2>Overview</h2>
                <p>{page.overview}</p>
              </div>

              {/* Requirements (if present) */}
              {page.requirements && (
                <div className="admission-block" data-aos="fade-up">
                  <h2>Application Requirements</h2>
                  <div className="requirements-list">
                    {page.requirements.map((req, i) => (
                      <div key={i} className="requirement-item">
                        <div className="requirement-number">{i + 1}</div>
                        <div>
                          <h4>{req.title}</h4>
                          <p>{req.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Deadlines (if present) */}
              {page.deadlines && (
                <div className="admission-block" data-aos="fade-up">
                  <h2>Important Deadlines</h2>
                  <table className="admission-table">
                    <thead>
                      <tr>
                        <th>Round</th>
                        <th>Application Deadline</th>
                        <th>Decision Notification</th>
                      </tr>
                    </thead>
                    <tbody>
                      {page.deadlines.map((d, i) => (
                        <tr key={i}>
                          <td><strong>{d.round}</strong></td>
                          <td>{d.date}</td>
                          <td>{d.notification}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Cost Table (tuition page) */}
              {page.costTable && (
                <div className="admission-block" data-aos="fade-up">
                  <h2>Estimated Cost of Attendance (2026–2027)</h2>
                  <table className="admission-table">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th style={{ textAlign: 'right' }}>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {page.costTable.map((row, i) => (
                        <tr key={i}>
                          <td>{row.item}</td>
                          <td style={{ textAlign: 'right', fontWeight: 600 }}>{row.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Scholarship List (scholarships page) */}
              {page.scholarshipList && (
                <div className="admission-block" data-aos="fade-up">
                  <h2>Available Scholarships</h2>
                  <div className="scholarship-grid">
                    {page.scholarshipList.map((s, i) => (
                      <div key={i} className="scholarship-card">
                        <div className="scholarship-header">
                          <h4>{s.name}</h4>
                          <span className="scholarship-amount">{s.amount}</span>
                        </div>
                        <p>{s.criteria}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="admission-block admission-cta-block" data-aos="fade-up">
                <h3>Ready to take the next step?</h3>
                <p>Submit your application today and join the Skyra community.</p>
                <Link to="/admission" className="btn btn-primary">Start Your Application</Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="admission-sidebar">
              <div className="sidebar-card" data-aos="fade-left">
                <h4>Admissions Navigation</h4>
                <nav className="sidebar-nav">
                  {page.sidebarLinks.map((link, i) => (
                    <Link
                      key={i}
                      to={link.to}
                      className={`sidebar-link ${link.to === `/admissions/${id}` ? 'active' : ''}`}
                    >
                      {link.label}
                      <i className="fas fa-chevron-right"></i>
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="sidebar-card" data-aos="fade-left" data-aos-delay="100">
                <h4>Need Help?</h4>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Our admissions counselors are here to guide you through every step.</p>
                <p style={{ marginBottom: '0.5rem' }}><i className="fas fa-phone" style={{ marginRight: '0.5rem', color: 'var(--primary)' }}></i> +1 888 SKYRA-IT</p>
                <p style={{ marginBottom: '1.5rem' }}><i className="fas fa-envelope" style={{ marginRight: '0.5rem', color: 'var(--primary)' }}></i> admissions@skyra.edu</p>
                <Link to="/contact" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>Contact Admissions</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default PublicAdmissionInfo;
