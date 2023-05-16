import * as React from 'react';
import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Nav() {
    return (
        <Accordion className='nav' style={{
          backgroundColor:'rgb(253, 150, 132)',
          position:'absolute'
        }}
        >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontFamily:'Windsong', fontSize:'xx-large', textAlign:'center'}}> Snippets of Anna Marie </Typography>
        </AccordionSummary>
        
        <AccordionDetails>
          <Link className="link" to="/About" style={{color:'green'}}>
            About Me
          </Link>
          <Link className="link" to="/Portfolio" style={{color:'green'}}>
            |Portfolio
          </Link>
          <Link className="link" to="/Contact" style={{color:'green'}}>
            |Contact Me
          </Link>
          <Link className="link" to="/Resume" style={{color:'green'}}>
            |Resume
          </Link>
        </AccordionDetails>
      </Accordion>    
        
    );
}

export default Nav;