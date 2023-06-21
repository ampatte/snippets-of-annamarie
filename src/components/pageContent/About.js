import React from 'react';

import mee from '../../assets/portraits/mee.jpg';
import loveletters from '../../assets/backgrounds/loveletters1.jpg';

import { Paper, Card, Stack } from '@mui/material';

export default function About() {

  return (

    <div className='about'>    
      <Stack>
     
        <Paper 
          className='cards'
          elevation={8} 
          style={{
            textAlign:'center',
            fontSize:'xx-large',
            fontFamily:'WindSong'}}
        >About Me
        </Paper>

        <Card 
          className='cards'
          elevation={8}
          style={{ 
            backgroundImage:`url(${loveletters})`,
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
            backgroundSize:'cover'}}
          >
          <img 
            className='img' 
            component="img"
            title="Anna Marie Patterson"
            alt="Anna Marie Patterson"
            src={mee}
            style={{
              width:'20%',
              border:'thin double',
              borderColor:'#4c4c4d',
              borderRadius:'.4rem'}}
          />
        </Card>   

        <Paper 
          className='cards'
          elevation={8} 
          style={{
            padding:'2%',
            marginBottom:'5%'}}
        >
          My name is Anna Marie, and I am a Full Stack Web Developer. I am a former preschool and art teacher turned techie. Embarking on this career change has been such an exciting journey. The most facinating part about web development is seeing the "how" behind what is displayed on the screen. I am especially interested in the style element of development. Designing and Creating something new, has always been a point of motivation. Now that has been translated into a love for web development. I come from a large family, where two of my four brothers are successful software developers. Becoming the third in the family is a goal of mine that I'm prepared to acheive.
          </Paper>
      </Stack>
    </div>
  );
}
