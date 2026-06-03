import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../PublicWebsite.css';

const PublicLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="public-website-body">
      {/* Emergency Alert Banner */}
      {showAlert && (
        <div className="alert-banner">
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span><strong>Campus Update:</strong> Fall 2026 Admissions are now open. Priority deadline is approaching.</span>
            <button className="close-alert" onClick={() => setShowAlert(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}

      {/* Top Utility Nav */}
      <div className="utility-nav">
        <div className="container">
          <div className="utility-links">
            <a href="#">Current Students</a>
            <a href="#">Faculty & Staff</a>
            <a href="#">Alumni</a>
            <a href="#">Parents</a>
            <span className="divider">|</span>
            <Link to="/login" className="portal-link"><i className="fas fa-lock"></i> Portal Login</Link>
          </div>
        </div>
      </div>

      <header id="header" className={isScrolled ? 'scrolled' : ''}>
        <div className="container">
          <nav>
            <Link to="/home" className="logo">
              <i className="fas fa-graduation-cap"></i>
              Skyra Institute
            </Link>

            <ul className="nav-links mega-menu-nav">
              <li><Link to="/home">Home</Link></li>
              
              {/* Academics Mega Menu */}
              <li className="dropdown">
                <Link to="/academics">Academics <i className="fas fa-chevron-down text-xs" style={{ fontSize: '0.7em', marginLeft: '4px' }}></i></Link>
                <div className="dropdown-menu">
                  <div className="dropdown-col">
                    <h4>Colleges & Schools</h4>
                    <Link to="/academics/computer-science">Computer Science</Link>
                    <Link to="/academics/business">Business & Management</Link>
                    <Link to="/academics/engineering">Engineering</Link>
                  </div>
                  <div className="dropdown-col">
                    <h4>Resources</h4>
                    <Link to="/info/academic-calendar">Academic Calendar</Link>
                    <Link to="/info/course-catalog">Course Catalog</Link>
                    <Link to="/info/library">Library</Link>
                  </div>
                </div>
              </li>

              {/* Admissions Mega Menu */}
              <li className="dropdown">
                <Link to="/admission">Admissions <i className="fas fa-chevron-down text-xs" style={{ fontSize: '0.7em', marginLeft: '4px' }}></i></Link>
                <div className="dropdown-menu">
                  <div className="dropdown-col">
                    <h4>Apply</h4>
                    <Link to="/admissions/undergraduate">Undergraduate</Link>
                    <Link to="/admissions/graduate">Graduate</Link>
                    <Link to="/admissions/international">International</Link>
                  </div>
                  <div className="dropdown-col">
                    <h4>Financial Aid</h4>
                    <Link to="/admissions/tuition">Tuition & Fees</Link>
                    <Link to="/admissions/scholarships">Scholarships</Link>
                  </div>
                </div>
              </li>

              <li><Link to="/research">Research</Link></li>
              <li><Link to="/campus-life">Campus Life</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            
            <div className="nav-actions">
              <button className="search-btn" style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: 'var(--primary)' }}><i className="fas fa-search"></i></button>
              <Link to="/admission" className="btn btn-primary" style={{ marginLeft: '1.5rem' }}>Apply Now</Link>
            </div>
          </nav>
        </div>
      </header>

      <main style={{ minHeight: '80vh', paddingTop: '140px' }}>
        <Outlet />
      </main>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <Link to="/home" className="footer-logo">
                <i className="fas fa-graduation-cap"></i>
                Skyra Institute
              </Link>
              <address style={{ color: '#cbd5e1', fontStyle: 'normal', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                123 Innovation Way<br />
                Silicon Valley, CA 94025<br />
                United States
              </address>
              <div className="social-links">
                <a href="#" className="social-btn"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-btn"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-btn"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-btn"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            
            <div className="footer-col">
              <h4 className="footer-heading">Academics</h4>
              <ul className="footer-links">
                <li><Link to="/admissions/undergraduate">Undergraduate Programs</Link></li>
                <li><Link to="/admissions/graduate">Graduate Programs</Link></li>
                <li><Link to="/admissions/international">International Students</Link></li>
                <li><Link to="/info/library">Library Services</Link></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4 className="footer-heading">Admissions</h4>
              <ul className="footer-links">
                <li><Link to="/admission">Apply Now</Link></li>
                <li><Link to="/admissions/tuition">Tuition & Financial Aid</Link></li>
                <li><Link to="/events">Visit Campus</Link></li>
                <li><Link to="/contact">Request Information</Link></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4 className="footer-heading">Resources</h4>
              <ul className="footer-links">
                <li><Link to="/contact">Contact Directory</Link></li>
                <li><Link to="/about">Careers at Skyra</Link></li>
                <li><Link to="/contact">Emergency Information</Link></li>
                <li><Link to="/info/title-ix">Campus Safety (Clery Act)</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="bottom-bar">
            <p>&copy; {new Date().getFullYear()} Skyra Institute of Technology. All Rights Reserved.</p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/info/title-ix" style={{ textDecoration: 'none', color: 'inherit' }}>Title IX</Link>
              <Link to="/info/accessibility" style={{ textDecoration: 'none', color: 'inherit' }}>Accessibility</Link>
              <Link to="/info/title-ix" style={{ textDecoration: 'none', color: 'inherit' }}>Non-Discrimination</Link>
              <Link to="/info/privacy" style={{ textDecoration: 'none', color: 'inherit' }}>Privacy Policy</Link>
              <Link to="/info/privacy" style={{ textDecoration: 'none', color: 'inherit' }}>Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
