import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navigate from './components/Nav';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';



function App() {
  const [currentPage, setCurrentPage] = useState('About');  

  const renderPage = () => {
    switch(currentPage) {
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Navigate 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
      />
      <main>
        {
          renderPage(currentPage)
        }
      </main>
        <br />
        <br />
        <br />
        <br />
        <Footer />
    
    </div>
  );
}

export default App;