import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children, setCurrentPage, language, setLanguage }) => {
  return (
    <div className="layout">
      <Navbar setCurrentPage={setCurrentPage} language={language} setLanguage={setLanguage} />
      <main className="main-content">
        {children}
      </main>
      <Footer setCurrentPage={setCurrentPage} language={language} />
    </div>
  );
};

export default Layout;