import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="header-container">
        <img 
          src="/images/cdw-logo.png" 
          alt="CDW Logo" 
          className="cdw-logo"
        />
        <img 
          src="/images/logo-white.png" 
          alt="AutoHireX" 
          className="autohirex-logo"
        />
      </div>
    </header>
  );
}

export default Header;