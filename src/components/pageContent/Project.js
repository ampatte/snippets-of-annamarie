import React from 'react';
import Card from '@mui/material/Card';

import TrackMyBusiness from '../../assets/projects/employeeTracker.png';
import WhatsTheWeather from '../../assets/projects/weatherApp.png';
import RecipeFinder from '../../assets/projects/recipeFinder.png';
import LifeInFocus from '../../assets/projects/loginPage.png';
import OnMyTeam from '../../assets/projects/OnMyTeam.png';
import TestTime from '../../assets/projects/quiz.png'

function Project() {

    return(
        <div className='project'>

            <Card  
            sx={{ 
                maxWidth:'60%', 
                marginLeft:'20%',
                marginBottom:'2%'
                }}>      
            <a href="https://ampatte.github.io/recipe-finder-app/">
                <img className='projects'
                src={RecipeFinder} 
                alt="Recipe Finder"
                ></img>
            </a>
            <a href= "https://github.com/ampatte/recipe-finder-app" style={{color:'green'}}> Recipe Finder Repo</a>
            </Card>

            <Card  
            sx={{ 
                marginBottom:'2%',
                maxWidth:'60vw', 
                marginLeft:'20%',
                }}>      
            <a href="https://ampatte.github.io/LifeInFocus/">
                <img className='projects'
                src={LifeInFocus} 
                alt="Life In Focus"
                ></img>
            </a>
            <a href= "https://github.com/ampatte/LifeInFocus" style={{color:'green'}}> Life In Focus Repo</a>
            </Card>

            <Card  
            sx={{ 
                marginBottom:'2%',
                maxWidth:'60vw', 
                marginLeft:'20%',
                }}>      
            <a href="https://ampatte.github.io/recipe-finder-app/">
                <img className='projects'
                src={WhatsTheWeather} 
                alt="What's The Weather"
                ></img>
            </a>
            <a href= "https://github.com/ampatte/WhatsTheWeather" style={{color:'green'}}> What's The Weather Repo</a>
            </Card>
            
            <Card
            sx={{ 
                marginBottom:'2%',
                maxWidth:'60%', 
                marginLeft:'20%',
                }}>      
            <a href="https://ampatte.github.io/TestTime/">
                <img className='projects'
                src={TestTime} 
                alt="Test Time!"
                ></img>
            </a>
            <a href= "https://github.com/ampatte/TestTime"style={{color:'green'}} > Test Time! Repo</a>
            </Card>
            
            <Card  
            sx={{ 
                marginBottom:'2%',
                maxWidth:'60%', 
                marginLeft:'20%',
                }}>      
            <a href="https://watch.screencastify.com/v/GPVcaU1jGiwceCd3X5C5">
                <img className='projects'
                src={TrackMyBusiness} 
                alt="Track My Business"
                ></img>
            </a>
            <a href="https://github.com/ampatte/TrackMyBusiness/"  style={{color:'green'}}> Track My Business Repo</a>
            </Card>

            <Card  
            sx={{ 
                maxWidth:'60%', 
                marginLeft:'20%',
                marginBottom:'5%'
                }}>      
            <a href="https://watch.screencastify.com/v/SWSUfCTzKQB19dqHJ2Eq">
                <img className='projects'
                src={OnMyTeam} 
                alt="On My Team"
                ></img>
            </a>
            <a href="https://github.com/ampatte/OnMyTeam/"  style={{color:'green'}}> On My Team Repo</a>
            </Card>

        </div>
    )

}

export default Project;