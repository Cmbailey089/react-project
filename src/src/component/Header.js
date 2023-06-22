import React, { useState } from 'react';
import Nav from './Navigation';
import Portfolio from './pages/portofolio';
import Resume from './pages/resume';
import Contact from './pages/contact';
import AboutMe from './pages/aboutMe';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    if (currentPage === 'portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'resume') {
      return <Resume />;
    }
    if (currentPage === 'contact') {
      return <Contact />;
    }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}