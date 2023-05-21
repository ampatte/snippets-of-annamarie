import * as React from 'react';
import contact from './Contact.js';
import { Paper, Card, Stack } from '@mui/material';
import resume from '../../assets/backgrounds/resume.jpg';

 function Resume({pages, setCurrentPage}) {
  return (
    <div className='resume'>    
      <Stack>

        <Paper 
          className='cards'
          elevation={8} 
          style={{
            marginTop:'10%',
            textAlign:'center',
            fontSize:'xx-large',
            fontFamily:'WindSong',
            border:'thick double',
            borderColor:'black'}}
        >Resume
        </Paper>
        
        <Card 
          className='cards'
          elevation={8} 
          style={{
            backgroundImage:`url(${resume})`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',            
            marginBottom:'5%',
            padding:'1%'}}  
        >
      
          <Paper 
            className='cardPaper'
            elevation={8}>         
            <a 
              href="https://docs.google.com/document/d/1btesVOORUT0eY3Gn7iUExqPXqNvJLylycXO5Hy0w4Wo/edit?usp=sharing"
              style={
                {color: 'black', fontWeight:'bold'}}>
            Click here to view Resume
            </a>
          </Paper>

          <Paper 
            className='cardPaper'
            elevation={8}>
            <p style={{fontWeight:'bold'}}>Technical Skills</p>
              <ul style={{
                fontWeight:'bold',
                textAlign:'left',
                paddingRight:'2%', 
                paddingBottom:'1%'}}>
                <li>Languages: HTML, CSS, JavaScript, SQL </li>
                  <br></br>
                <li>Libraries & Frameworks: Node, Express, React, JSX, Handlebars, jQuery, EmailJS, Bootstrap, Pure.CSS, Materialize, MERN stack, Mongoose</li>
                  <br></br>
                <li>Databases: MySQL, MongoDB</li>
                  <br></br>
                <li>Other Packages and Tools: Inquirer, Sequelize, GitHub, VS Code, Heroku, Insomnia, Atlas, Apollo, Slack</li>
              </ul>
          </Paper>

          <Paper 
            className='cardPaper'
            elevation={8}>
            <p style={{fontWeight:'bolder'}}>Other Skills</p>
              <ul style={{fontWeight:'bold', textAlign:'left', paddingRight:'2%', paddingBottom:'1%', marginBottom:'0'}}>
                <li>Customer Service</li>              
                <li>Team Environment</li>
                <li>Administrative Duties</li>
                <li>Microsoft Office: Word, Excel, Powerpoint, Teams</li>
                <li>Quick learner: I love to learn new things and am ready for my next challenge!</li>
              </ul>
          </Paper>         
                      
        </Card>
        
      </Stack>
    </div>
  );
}

export default Resume;