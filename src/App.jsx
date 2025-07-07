import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import DronePage from './pages/services/DronePage';
import LoanPage from './pages/services/LoanPage';
import SubsidyPage from './pages/services/SubsidyPage';
import EcommercePage from './pages/services/EcommercePage';
import ProjectPage from './pages/services/ProjectPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('en');

  const renderPage = () => {
    switch(currentPage) {
      case 'drone': return <DronePage language={language} />;
      case 'loan': return <LoanPage language={language} />;
      case 'subsidy': return <SubsidyPage language={language} />;
      case 'ecommerce': return <EcommercePage language={language} />;
      case 'project': return <ProjectPage language={language} />;
      default: return <LandingPage setCurrentPage={setCurrentPage} language={language} setLanguage={setLanguage} />;
    }
  };

  return (
    <Layout setCurrentPage={setCurrentPage} language={language} setLanguage={setLanguage}>
      {renderPage()}
    </Layout>
  );
}

export default App;