import * as React from 'react';
import {Tab, Tabs} from '@mui/material';



function Nav({ pages, currentPage, setCurrentPage}) {

  
  return (
    <div className='nav'>     
      
    <Tabs
    variant="fullWidth"
    scrollButtons={true} 
    allowScrollButtonsMobile
    style={{
      fontSize:'small',
      flexDirection:'column'}}
    value={pages.findIndex(page => page.name === currentPage)}
    onChange={(event, value) => setCurrentPage(pages[value].name)}
  >              
       
        <Tab
          label="About" 
          href='#about' 
        />

        <Tab 
          label="Portfolio" 
          href='#portfolio' 
        />

        <Tab 
          label="Contact" 
          href='#contact' 
        />
      
        <Tab
          label="Resume" 
          href='#resume' 
        />
      </Tabs>          
    </div>
  );
}

export default Nav;