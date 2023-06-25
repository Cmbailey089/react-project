import React from 'react';
import headerImg from './img/tropical-header.jpg';

function Nav({ currentPage, handlePageChange }) {
  return (
    <div style={{ backgroundImage: `url(${headerImg})`,
    backgroundSize:'cover'
  }} className="header-tabs">
      <div className="nav-item">
        <a
          href="#aboutMe"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </div>
      <div className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </div>
      <div className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </div>
      <div className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Nav;
