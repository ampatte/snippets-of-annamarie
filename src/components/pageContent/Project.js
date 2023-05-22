import React from 'react';
import { Card, Stack } from '@mui/material';

import TrackMyBusiness from '../../assets/projects/employeeTracker.png';
import WhatsTheWeather from '../../assets/projects/weatherApp.png';
import RecipeFinder from '../../assets/projects/recipeFinder.png';
import LifeInFocus from '../../assets/projects/loginPage.png';
import OnMyTeam from '../../assets/projects/OnMyTeam.png';
import TestTime from '../../assets/projects/quiz.png'

function Project() {

    return(
        <div>
            <Stack 
                className='project'
                direction="row" 
                spacing={2}
            >
                <Card 
                    className='projects'
                    >      
                    <a 
                        href="https://ampatte.github.io/recipe-finder-app/"
                        target='_'>
                        <img 
                            className='projectImg'
                            src={RecipeFinder} 
                            alt="Recipe Finder"
                            title="Go to Recipe Finder"
                        ></img>
                    </a>
                        <p>Recipe Finder displays recipes based on the ingredients entered.
                            <br></br><br></br>
                            Team Project-Role: CSS, HTML
                            <br></br> <br></br>                
                            JavaScript, HTML, CSS, Pure.CSS, Google Fonts, Edamam Nutrition API & Recipe API 
                            <br></br> <br></br><br></br>                         
                        </p>
                    
                    <a className='buttonLink'
                        href= "https://github.com/ampatte/recipe-finder-app" 
                        style={{color:'black'}}
                        target='_'
                        >View Recipe Finder Repo</a>
                </Card>

                <Card 
                    className='projects'
                    style={{paddingBottom:'1%'}}
                >       
                    <a 
                        href="https://ampatte.github.io/LifeInFocus/"
                        target='_'
                        >
                        <img className='projectImg'
                            src={LifeInFocus} 
                            alt="Life In Focus"
                            title="Go to Life In Focus"
                        ></img>
                    </a>
                        <p> Life In Focus is a daily motivational journaling App
                            <br></br><br></br>
                            Team Project-Role: File Structure, music player, styling, Mutations, Apollo & Backend: debugging
                            <br></br><br></br>
                            MERN Stack(MongoDB, Express, React, Node), JXS, Material UI, CSS
                        </p>
                        
                    <a className='buttonLink'
                        href= "https://github.com/ampatte/LifeInFocus" 
                        style={{color:'black'}}
                        target='_'
                        >View LifeInFocus Repo
                    </a>
                </Card>
                <Card  
                className='projects'
                style={{paddingBottom:'1%'}}
            >      
                <a 
                    href="https://watch.screencastify.com/v/GPVcaU1jGiwceCd3X5C5"
                    target='_'
                >
                    <img 
                        className='projectImg'
                        src={TrackMyBusiness} 
                        alt="Track My Business"
                        title='Watch Track My Business Walkthrough'
                    ></img>
                </a>
                        <br></br><br></br>
                    <p>Track My Business: an Employee Tracker
                        <br></br> <br></br>                                    
                        Sole Contributor
                        <br></br> <br></br>                        
                        JavaScript, Node, Inquirer, MySQL, Console.table pkg
                    </p><br></br>
                
                <a className='buttonLink'
                    href="https://github.com/ampatte/TrackMyBusiness/" 
                    target='_' 
                    style={{color:'black'}}
                >View TrackMyBusiness Repo
                </a>
            </Card>

            </Stack>

        <br></br>

            <Stack 
                className='project'
                direction="row" 
                spacing={2}
                minHeight='30%'
            >
                <Card 
                    className='projects'
                    style={{paddingBottom:'1%'}}
                >      
                    <a 
                        href="https://ampatte.github.io/WhatsTheWeather/"
                        target='_'
                        >
                        <img className='projectImg'
                            src={WhatsTheWeather} 
                            alt="What's The Weather?"
                            title="Go to What's The Weather?"
                        ></img>
                    </a>  
                        <p>Weather Dashboard                                                
                            <br></br><br></br> 
                            Sole Author
                            <br></br> <br></br>                          
                            JavaScript, HTML, CSS, Bootstrap, Open Weather API
                        </p>
                    
                    <a className='buttonLink'
                        href= "https://github.com/ampatte/WhatsTheWeather" 
                        style={{color:'black'}}
                        target='_'
                        >View What's The Weather Repo
                    </a>
                </Card>
                <Card className='projects'>      
                    <a 
                        href="https://ampatte.github.io/TestTime/"
                        target='_'
                    >
                        <img 
                            className='projectImg'
                            src={TestTime} 
                            alt="Test Time!"
                            title='Go to Test Time!'
                        ></img>  
                    </a>                    
                            <br></br><br></br>
                        <p>Test Time!: a timed, multiple choice coding quiz.
                            <br></br><br></br>
                            Sole Author
                            <br></br><br></br>
                            JavaScript, HTML, CSS, Bootstrap
                        </p>
                    
                    <a className='buttonLink'
                        href= "https://github.com/ampatte/TestTime" 
                        target='_'
                        style={{color:'black'}} 
                    >View TestTime! Repo
                    </a>
                </Card>
               <Card 
               className='projects'
               style={{paddingBottom:'1%'}}
            >      
                    <a 
                        href="https://watch.screencastify.com/v/SWSUfCTzKQB19dqHJ2Eq"
                        target='_'
                        >
                        <img 
                            className='projectImg'
                            src={OnMyTeam} 
                            alt="On My Team"
                            title='Watch On My Team Walkthrough'
                        ></img>
                    </a>
                            
                        <p>On My Team: a Team Profile Generator                        
                            <br></br><br></br>
                            Sole Contributor
                            <br></br><br></br>
                            JavaScript, Node.js, Inquirer, HTML, CSS, Bootstrap                            
                        </p>
                    <a className='buttonLink'
                        href="https://github.com/ampatte/OnMyTeam/" 
                        target='_'
                        style={{color:'black'}}
                    >View OnMyTeam Repo
                    </a>
                </Card>
            </Stack>    
        </div>
    )

}

export default Project;