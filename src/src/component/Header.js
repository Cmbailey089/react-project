import React, { useState } from 'react';
import Nav from './Navigation';
import Portfolio from './pages/portofolio';
import Resume from './pages/resume';
import Contact from './pages/contact';
import AboutMe from './pages/aboutMe';
import headerImg from './img/tropical-header.jpg'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={{ backgroundImage: `url(${headerImg})`,
    backgroundSize: 'cover',
     }}
     className='body-page'>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}