import './App.css';
import React, { useState } from 'react';
import Page from './components/Page';
import Nav from './components/Nav';
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

  const [currentPage, setCurrentPage] = useState(pages[0].name);
  
  return (
    <div className="App">
      <Header/>
        <Nav 
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <main>
          <Page currentPage={currentPage}></Page>
        </main>
      <Footer/>
    </div>  
  );
}

export default App;
