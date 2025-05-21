import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <img 
          src="/images/cdw-logo.png" 
          alt="CDW Logo" 
          className="footer-logo"
        />
        <p className="copyright">
          © {currentYear} CDW. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;