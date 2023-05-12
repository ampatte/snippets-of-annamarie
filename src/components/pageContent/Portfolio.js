import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import pexelsMigueláPadriñán from '../../assets/backgrounds/pexelsMigueláPadriñán.jpg';
import WhatsTheWeather from '../../assets/projects/weatherApp.png';
import EmployeeTracker from '../../assets/projects/employeeTracker.png';
import RecipeFinder from '../../assets/projects/recipeFinder.png';
import JustAnnasTextEditor from '../../assets/projects/JATE.png';
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
      
      <Card sx={{ maxWidth: 325, marginLeft:'15%', inline:''}}
      >
      <CardMedia className='img' 
        component="img"
        height="325"
        style={
        { backgroundImage:`url(${LifeInFocus})`}}
      />
      </Card>

      <Card sx={{ maxWidth: 325, marginLeft:'15%', inline:''}}
      >
      <CardMedia className='img' 
        component="img"
        height="325"
        style={
        { backgroundImage:`url(${RecipeFinder})`}}
      />
      </Card>

      <Card sx={{ maxWidth: 325, marginLeft:'15%', inline:''}}
      >
      <CardMedia className='img' 
        component="img"
        height="325"
        style={
        { backgroundImage:`url(${WhatsTheWeather})`}}
      />
      </Card>
      
      <Card sx={{ maxWidth: 325, marginLeft:'15%', inline:''}}
      >
      <CardMedia className='img' 
        component="img"
        height="325"
        style={
        { backgroundImage:`url(${TestTime})`}}
      />
      </Card>

      <Card sx={{ maxWidth: 325, marginLeft:'15%', inline:''}}
      >
      <CardMedia className='img' 
        component="img"
        height="325"
        style={
        { backgroundImage:`url(${EmployeeTracker})`}}
      />
      </Card>
     <Card sx={{ maxWidth: 325, marginLeft:'15%', inline:''}}
      >
      <CardMedia className='img' 
        component="img"
        height="325"
        style={
        { backgroundImage:`url(${JustAnnasTextEditor})`}}
      />
      </Card>
    </div>
  );
}
export default Portfolio;