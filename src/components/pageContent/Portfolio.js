import React from 'react';
import Card from '@mui/material/Card';
import pexelsMigueláPadriñán from '../../assets/backgrounds/pexelsMigueláPadriñán.jpg';
import WhatsTheWeather from '../../assets/projects/weatherApp.png';
import TrackMyBusiness from '../../assets/projects/employeeTracker.png';
import RecipeFinder from '../../assets/projects/recipeFinder.png';
import OnMyTeam from '../../assets/projects/OnMyTeam.png';
import LifeInFocus from '../../assets/projects/loginPage.png';
import TestTime from '../../assets/projects/quiz.png';


// const sampleOne ={
//   name: '',
//   description:'',
// }
// < name={sampleOne.name} description={sampleOne.description}>
// <a href= "https://github.com/ampatte"> GitHub </a>

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
      
      <Card  
        sx={{ 
          marginBotton:'2%',
          maxWidth:'50%', 
          marginLeft:'15%',
          marginright:'15%',
          }}>      
        <a href="https://ampatte.github.io/recipe-finder-app/" target="_blank" rel="noreferrer">
          <img className='projects'
            src={RecipeFinder} 
            alt="Recipe Finder"
          ></img>
        </a>
        <a href= "https://github.com/ampatte/recipe-finder-app"> Recipe Finder Repo</a>
      </Card>

      <Card  
        sx={{ 
          marginBotton:'2%',
          maxWidth:'50%', 
          marginLeft:'15%',
          marginright:'15%',
          }}>      
        <a href="https://ampatte.github.io/LifeInFocus/" target="_blank" rel="noreferrer">
          <img className='projects'
            src={LifeInFocus} 
            alt="Life In Focus"
          ></img>
        </a>
        <a href= "https://github.com/ampatte/LifeInFocus"> Life In Focus Repo</a>
      </Card>

      <Card  
        sx={{ 
          marginBotton:'2%',
          maxWidth:'50%', 
          marginLeft:'15%',
          marginright:'15%',
          }}>      
        <a href="https://ampatte.github.io/recipe-finder-app/" target="_blank" rel="noreferrer">
          <img className='projects'
            src={WhatsTheWeather} 
            alt="What's The Weather"
          ></img>
        </a>
        <a href= "https://github.com/ampatte/WhatsTheWeather"> What's The Weather Repo</a>
      </Card>
      
      <Card
        sx={{ 
          marginBottom:'2%',
          maxWidth:'50%', 
          marginLeft:'15%',
          marginright:'15%',
          }}>      
        <a href="https://ampatte.github.io/TestTime/" target="_blank" rel="noreferrer">
          <img className='projects'
            src={TestTime} 
            alt="Test Time!"
          ></img>
        </a>
        <a href= "https://github.com/ampatte/TestTime"> Test Time! Repo</a>
      </Card>
      
      <Card  
        sx={{ 
          marginBotton:'2%',
          maxWidth:'50%', 
          marginLeft:'15%',
          marginright:'15%',
          }}>      
        <a href="https://ampatte.github.io/TrackMyBusiness/" target="_blank" rel="noreferrer">
          <img className='projects'
            src={TrackMyBusiness} 
            alt="Track My Business"
          ></img>
        </a>
        <a href= "https://watch.screencastify.com/v/GPVcaU1jGiwceCd3X5C5"> Track My Business Repo</a>
      </Card>

      <Card  
        sx={{ 
          maxWidth:'50%', 
          marginLeft:'15%',
          marginRight:'15%',
          marginBottom:'5%'
          }}>      
        <a href="https://ampatte.github.io/OnMyTeam/" target="_blank" rel="noreferrer">
          <img className='projects'
            src={OnMyTeam} 
            alt="On My Team"
          ></img>
        </a>
        <a href= "https://watch.screencastify.com/v/SWSUfCTzKQB19dqHJ2Eq"> On My Team Repo</a>
      </Card>
    </div>
  );
}
export default Portfolio;