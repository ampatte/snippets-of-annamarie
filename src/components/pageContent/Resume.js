import * as React from 'react';
import { Link } from "react-router-dom";
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
      <h1 style={{marginTop:'74px', fontFamily: 'WindSong', fontSize:'xxx-large', fontWeight:'bold', marginBottom:'0'}}>Resume</h1>

      <Card 
        style={{backgroundColor:'rgba(235, 255, 255, .7)', paddingLeft:'1%', paddingRight:'1%', paddingTop:''}}      
        sx={{ 
          maxWidth:'50%', 
          marginLeft:'40%',
          marginBottom:'2%',
          paddingTop:'1%'
          }}>
          <Paper >         
            <a 
              href="https://docs.google.com/document/d/1btesVOORUT0eY3Gn7iUExqPXqNvJLylycXO5Hy0w4Wo/edit?usp=sharing"
              style={
                {color: 'black', fontWeight:'bold'}}>
            Click here to view Resume
            </a>
          </Paper>
          <Paper elevation={8}>
            <p style={{fontWeight:'bold'}}>Technical Skills</p>
              <ul style={{fontWeight:'bold', textAlign:'left', paddingRight:'2%', paddingBottom:'1%'}}>
                <li>Programming Languages: HTML, CSS, JavaScript, SQL, Python-currently learning </li>
                  <br></br>
                <li>Libraries & Frameworks: Node, Express, React, JSX, Handlebars, jQuery, Bootstrap, Pure.CSS, Materialize, MERN stack, Mongoose</li>
                  <br></br>
                <li>Databases: MySQL, MongoDB</li>
                  <br></br>
                <li>Other Packages and Tools: Inquirer, Sequelize, GitHub, VS Code, Heroku, Insomnia, Atlas, Apollo, Slack</li>
              </ul>
          </Paper>
          <Paper elevation={8}>
            <p style={{fontWeight:'bolder'}}>Other Skills</p>
              <ul style={{fontWeight:'bold', textAlign:'left', paddingRight:'2%', paddingBottom:'1%', marginBottom:'0'}}>
                <li>Customer Service</li>              
                <li>Team Environment</li>
                <li>Administrative Duties</li>
                <li>Microsoft Word, Excel, Powerpoint, Teams</li>
                <li>Quick learner: I love to learn new things and am ready for my next challenge!</li>
              </ul>
          </Paper>         
            
        <Link to="/contact" className='link' style={{color: 'green'}}>
        Questions? Contact Me</Link>
        
      </Card>

    </div>
  );
}

export default Resume;