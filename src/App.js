import './App.css';
import React, { useState } from 'react';
import Page from './components/Page';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [pages] = useState([
    {
      name: 'about me'
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
