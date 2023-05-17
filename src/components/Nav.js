import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



function Nav({pages, setCurrentPage}) {

  console.log(setCurrentPage)


  
  return (
        <div className='nav'
          style={{
          backgroundColor:'rgb(253, 150, 132)',
          position:'absolute',
          }}
        >
        
          <nav >
        
            <div> 
            <Tabs>  
            <Tab style={{ fontFamily:'Windsong', fontSize:'xx-large', textAlign:'center'}}> Snippets of Anna Marie </Tab>
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
          </nav>
        </div>
    );
}

export default Nav;