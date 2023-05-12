import React from 'react';
import { Paper } from '@mui/material';
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
      <Paper elevation={8} >
      <a href="https://ampatte.github.io/LifeInFocus/" target="_blank" rel="noreferrer"></a>
      </Paper>
    </div>
  );
}

export default Resume;