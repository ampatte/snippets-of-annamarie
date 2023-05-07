import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Nav({pages, setCurrentPage}) {
    console.log(setCurrentPage)
    return (
        <Accordion className='nav' style={{
          backgroundColor:'rgb(253, 162, 132)',
          position:'absolute'
        }}
        >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontFamily: 'Instrument Serif'}}><h2>Anna Marie Patterson</h2></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                <a href='#about me' onClick={() => setCurrentPage(pages[0].name)}>
                About Me  
                </a></li>

                <li className="nav-item">
                <a href='#portfolio' onClick={() => setCurrentPage(pages[1].name)}>
                | Portfolio 
                </a></li>

                <li className="nav-item">
                <a href='#contact' onClick={() => setCurrentPage(pages[2].name)}>
                | Contact Me
                </a></li>

                <li className="nav-item">
                <a href='#resume' onClick={() => setCurrentPage(pages[3].name)}>
                | Resume
                </a></li> 
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>    
        
    );
}

export default Nav;