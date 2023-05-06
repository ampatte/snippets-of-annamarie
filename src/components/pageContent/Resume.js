import React from 'react';
import resume from '../../assets/backgrounds/resume-2-1616792.jpg';

 function Resume() {
  return (
    <div className='resume' style={
      { backgroundImage:`url(${resume})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        height:'100vh'
      }}>
      <h1>Resume</h1>
      <p>
    
      </p>
    </div>
  );
}

export default Resume;