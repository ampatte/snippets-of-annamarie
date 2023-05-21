import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { AlignHorizontalRight } from '@mui/icons-material';



function Nav({pages, setCurrentPage}) {

  console.log(setCurrentPage)


  
  return (
    <div 
      className='nav'
    >
      <Tabs 
        AlignHorizontalRight
        style={{
          marginBottom:'0%',
          marginTop:'0%'
        }}
      >             
      <p 
        style={{ 
          fontFamily:'Windsong', fontSize:'xx-large', paddingRight:'2rem',
        }}>Snippets of Anna Marie
      </p> 
        <Tab label="About Me" 
            href='#about' onClick={() => setCurrentPage('about')}/>

        <Tab label="Portfolio" 
          href='#portfolio' onClick={() => setCurrentPage('portfolio')}/>

        <Tab label="Contact Me" 
          href='#contact' onClick={() => setCurrentPage('contact')}/>
      
        <Tab label="Resume" 
          href='#resume' onClick={() => setCurrentPage('resume')}/>
          
      </Tabs>
    </div>
  );
}

export default Nav;