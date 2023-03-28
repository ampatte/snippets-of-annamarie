import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Page from './components/Page';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [pages] = useState([
    {
      name: 'about'
    },
    {
      name: 'portfolio'
    },
    {
      name: 'contact'
    },
    {
      name: 'resume'
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Header>
        <nav>
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        </nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
