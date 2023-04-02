import React from 'react';
import mee from './../assets/portraits/mee.jpg';


export default function About() {
  return (
    <div className='about'>
      <h1>About Me</h1>
      <img className='img' src= {mee} alt='me'/>
      <p>
      My name is Anna Marie and I am a University of Minnesota Bootcamps Full Stack Web Development graduate! I am a former preschool teacher turned techie! Embarking on this complete career change has been such an exciting journey! For me, the most interesting part about programing is seeing the "how" of what is displayed on the screen and being a part of it's creation! In the past I've often said I should've been an engineer because I've always been interested in learning how things work. I am also very artsy! Painting on canvas and almost any DIY will keep me smiling for hours. I come from a large family, where two of my four brothers are successful software engineers. Becoming the third in the family is a goal of mine that I am working hard to acheive!
      </p>
    </div>
  );
}
