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
        paddingTop:'20px'
      }}>
      
      <span style={
        { fontFamily: 'WindSong',
          paddingTop:'60px',
          backgroundColor: 'rgba(253, 162, 132, 0.5)',
          margin:'8% 41% 2% 41%',
          padding:'0 0 0 0',
          display:'flex',
        }}>
          <h2>About Me</h2>
        </span>
     
      <Card sx={{ maxWidth: 325, marginLeft:'15%', inline:''}}
      >
      <CardMedia className='img' 
        component="img"
        height="325"
        style={
        { backgroundImage:`url(${mee})`}}
      />
      </Card>
      
      <Card style={
        { backgroundColor: 'rgba(253, 162, 132, 0.5)',       
          textAlign: 'center',
          margin:'1% 15% 2% 15%',
          display:'flex',
          borderRadius:'25',
          fontFamily: 'Instrument Serif',
          fontWeight:'bolder',
          fontSize:'large',
          verticalAlign: 'middle',
        }
      }>            
        <p>
        My name is Anna Marie and I am a University of Minnesota Bootcamps Full Stack Web Development graduate! I am a former preschool teacher turned techie! Embarking on this complete career change has been such an exciting journey! For me, the most interesting part about web development is seeing the "how" of what is displayed on the screen and being a part of it's creation! In the past I've often said I should've been an engineer because I've always been interested in learning how things work. I am also very artsy! Painting on canvas and almost any DIY will keep me smiling for hours. I come from a large family, where two of my four brothers are successful software engineers. Becoming the third in the family is a goal of mine that I am ready to acheive!
        </p>     
      </Card>
    </div>
  );
}
