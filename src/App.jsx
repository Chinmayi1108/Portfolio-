import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');

  // Simple state router to render the correct view seamlessly
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-wrapper">
      <Navbar setActivePage={setActivePage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;