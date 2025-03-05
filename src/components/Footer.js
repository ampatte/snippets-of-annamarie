import React from 'react';
import Tab from '@mui/material/Tab';

function Footer() {
    return (
    <footer className='footer'>
        <div>
              
                <Tab 
                    label="github" 
                    className='' 
                    href= "https://github.com/ampatte" 
                    target='_'/>
                <Tab 
                    label='LinkedIn'
                    className='' 
                    href= "https://www.linkedin.com/in/anna-marie-patterson-"
                    target='_'/>
                <Tab
                    label='Stack Overflow'
                    className='link' 
                    href= "https://stackoverflow.com/users/21505790/ampatte"
                    target='_'/>
            
        </div>
    </footer>
    );
}
export default Footer;