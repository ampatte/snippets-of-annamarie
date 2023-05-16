import React from 'react';
import contact from './Contact.js';
import mee from '../../assets/portraits/mee.jpg';
import loveletters from '../../assets/backgrounds/loveletters.jpg';

import { Paper, Card, CardMedia } from '@mui/material';

export default function About({pages, setCurrentPage}) {

  return (

    <div className='about' style={
      { backgroundImage:`url(${loveletters})`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        paddingTop:'10px',
        height:'100vh',
      }}>
      
      <Paper elevation={8} style={
        { backgroundColor: 'rgba(245, 240, 240, .9)',
          margin:'10% 15% 0',
          fontSize:'xxx-large',
          fontFamily:'WindSong',
          display:'flex',
        }}>About Me
      </Paper>
     
      <Card 
        sx={{
          maxWidth: 325,
          marginLeft:'15%',
          padding:'.2%'
        }}
      >
      <CardMedia 
        className='img' 
        component="img"
        height="325"
        title="Anna Marie Patterson"
        alt="Anna Marie Patterson"
        src={mee}
      />
      </Card>
      
      <Card style={
        { backgroundColor: 'rgba(245, 255, 255, .9)',
          margin:'0 15% 5% 15%',
          display:'flex',
          fontFamily: 'Instrument Serif',
          fontSize:'x-large',
          verticalAlign: 'middle',
          padding:'.5%'
        }
      }>            
        <Paper elevation={8}>
          My name is Anna Marie and I am a Full Stack Web Developer! I am a former preschool teacher turned techie! Embarking on this complete career change has been such an exciting journey! For me, the most interesting part about web development is seeing the "how" of what is displayed on the screen and being a part of it's creation! In the past I've often said I should've been an engineer because I'm so interested in learning how things work. I am also very artsy! Creating something new, whether painting on canvas or doing a DIY project will keep me busy for hours. Now that love has been translated into a love for web design! I come from a large family, where two of my four brothers are successful software developers. Becoming the third in the family is a goal of mine that I am ready to acheive!
        </Paper>

          <a href='#contact' 
            onClick={() => setCurrentPage('contact')}
            style={{color:'green'}}>
            Questions? Want to know more? Contact me!
          </a>

      </Card>
    </div>
  );
}
