import React from 'react';
import mee from '../../assets/portraits/mee.jpg';
import loveletters from '../../assets/backgrounds/loveletters.jpg';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function About() {
  return (
    <div className='about' style={
      { backgroundImage:`url(${loveletters})`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        height:'100vh',
      }}>
      
      <h1 style={{ color:'white', fontFamily:'sans-serif', paddingTop:'10px'}}>About Me</h1>
      
      <Card sx={{ maxWidth: 345, marginLeft:'5%'}}
      >
      <CardMedia className='img' 
        component="img"
        height="340"
        style={
        { backgroundImage:`url(${mee})`}}
      />
      </Card>
      
      <div className='Card' style={
        { backgroundColor: 'transparent',       
          textAlign: 'center',
          paddingBottom:'10%',
          paddingLeft:'5%',
          paddingRight:'5%'
        }
      }>
            
        <p style={
          {
            display: 'table-cell',
            verticalAlign: 'middle',
            color: 'white'
          }
        }>
        My name is Anna Marie and I am a University of Minnesota Bootcamps Full Stack Web Development graduate! I am a former preschool teacher turned techie! Embarking on this complete career change has been such an exciting journey! For me, the most interesting part about web development is seeing the "how" of what is displayed on the screen and being a part of it's creation! In the past I've often said I should've been an engineer because I've always been interested in learning how things work. I am also very artsy! Painting on canvas and almost any DIY will keep me smiling for hours. I come from a large family, where two of my four brothers are successful software engineers. Becoming the third in the family is a goal of mine that I am ready to acheive!
        </p>     
      </div>
    </div>
  );
}
