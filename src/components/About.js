import React from 'react';
import mee from '../assets/portraits/mee.jpg';
import loveletters from '../assets/backgrounds/loveletters.jpg';

export default function About() {
  return (
    <div className='about' style={
      { backgroundImage:`url(${loveletters})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        height:'100vh'
      }}>
      
      <h1 style={{ color:'white', fontFamily:'sans-serif'}}>About Me</h1>
      
      <div className='img' style={
        { backgroundImage:`url(${mee})`,
          backgroundRepeat:"no-repeat",         
          height: 560,
        }
      }></div>
      <div style={
        { height:'30vh',
          width:'30vw',
          float:'inline-end'
        }
      }>
        <p style={
          { color: 'white',
            backgroundColor:'rgba(128,128,128,0.7)',
            Opacity: .9,align:"right"
        }}>
        My name is Anna Marie and I am a University of Minnesota Bootcamps Full Stack Web Development graduate! I am a former preschool teacher turned techie! Embarking on this complete career change has been such an exciting journey! For me, the most interesting part about programing is seeing the "how" of what is displayed on the screen and being a part of it's creation! In the past I've often said I should've been an engineer because I've always been interested in learning how things work. I am also very artsy! Painting on canvas and almost any DIY will keep me smiling for hours. I come from a large family, where two of my four brothers are successful software engineers. Becoming the third in the family is a goal of mine that I am ready to acheive!
        </p>
        </div>      
      
    </div>
  );
}
