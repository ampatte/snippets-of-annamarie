import React from 'react';
import { Paper, Card } from '@mui/material';
import resume from '../../assets/backgrounds/resume.jpg';

 function Resume() {
  return (
    <div className='resume' style={
      { backgroundImage:`url(${resume})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        height:'100vh'
      }}>
      <h1 style={{marginTop:'74px', fontFamily: 'WindSong', fontSize:'xxx-large', fontWeight:'bold'}}>Resume</h1>
      
      <Card 
      style={{backgroundColor:'rgba(235, 255, 255, )'}}      
      sx={{ 
        maxWidth:'40%', 
        marginLeft:'50%',
        marginBottom:'2%'
        }}> 
        <a href="https://docs.google.com/document/d/1btesVOORUT0eY3Gn7iUExqPXqNvJLylycXO5Hy0w4Wo/edit?usp=sharing" target="_blank" rel="noreferrer">View Resume
        </a>
        <Paper elevation={8}>
          <p style={{fontWeight:'bolder'}}>Technical Skills</p>
            <ul style={{fontWeight:'bold', textAlign:'left', paddingRight:'2%'}}>
              <li>Programming Languages: HTML, CSS, JavaScript, SQL, Python (some knowledge, currently learning)</li>
              <li>Libraries & Frameworks: Node, Express, React, JSX, Handlebars, jQuery, Bootstrap, Pure.CSS, Materialize, MERN stack, Mongoose, </li>
              <li>Databases: MySQL, MongoDB</li>
              <li>Other Packages and Tools: Inquirer, Sequelize, GitHub, VS Code, Slack</li>
            </ul>
        </Paper>
        <Paper>
          <p style={{fontWeight:'bolder'}}>Other Skills</p>
            <ul style={{fontWeight:'bold', textAlign:'left', paddingRight:'2%'}}>
              <li>Customer Service</li>
              <li>Team Environment</li>
              <li>Microsoft Word, Excel, Powerpoint, Teams</li>
              <li>Quick learner: I love to learn new things and is ready for the next challenge!</li>
            </ul>
        </Paper>
      </Card>

    </div>
  );
}

export default Resume;