import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/pageContent/About';
import Portfolio from './components/pageContent/Portfolio';
import Contact from './components/pageContent/Contact';
import Resume from './components/pageContent/Resume';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  

  return (
    <Router>
      <div className="App">
        <Header/>
          <Nav 
          />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/About" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Resume" element={<Resume />} />
          </Routes>
        <Footer/>
      </div>
    </Router>  
  );
}

export default App;
