import React from 'react';
import Box from '@mui/material/Box'
import pexelsMigueláPadriñán from '../../assets/backgrounds/pexelsMigueláPadriñán.jpg';
import employeeTracker from '../../assets/backgrounds/employeeTracker.png';
//import recipeFinderApp from '../../assets/backgroundsrecipeFinderApp.jpg';
import loginPage from '../../assets/backgrounds/loginPage.png';
import quiz from '../../assets/backgrounds/quiz.png';

// const sampleOne ={
//   name: '',
//   description:'',
// }
// < name={sampleOne.name} description={sampleOne.description}>
// <a href= "https://github.com/ampatte"> GitHub </a>

function Portfolio() {
  return (
    <div
      className='contact'
      style={
        { backgroundImage:`url(${ pexelsMigueláPadriñán })`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          height:'100vh'
        }}>
    
      <h1 style={{marginTop:'74px', fontFamily: 'Instrument Serif', fontWeight:'bold'}}>Portfolio</h1>
      <Box
      
        style={
          { backgroundImage:`url(${ employeeTracker })`,
            
          }}>
          [Github repo](https://github.com/ampatte/TrackMyBusiness)
      </Box>
      <Box
        style={
          { backgroundImage:`url(${ loginPage })`,
          }}>
      </Box>
      <Box
        style={
          {
          }}>
          </Box>
      <Box
        style={
          { backgroundImage:`url(${ quiz })`,
          }}>
          </Box>

     
    </div>
  );
}
export default Portfolio;