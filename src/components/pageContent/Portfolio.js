import React from 'react';
import Project from './Project';

import pexelsMigueláPadriñán from '../../assets/backgrounds/pexelsMigueláPadriñán.jpg';

function Portfolio() {

  return (
    <div
      className='portfolio'
      style={
        { backgroundImage:`url(${ pexelsMigueláPadriñán })`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          height:'100vh'
        }}>
    
      <h1 style={{marginTop:'74px', fontFamily: 'Instrument Serif', fontWeight:'bold'}}>Portfolio</h1>
      
      <Project/>

    </div>
  );
}
export default Portfolio;