import React from 'react';
import Project from './Project';
import { Paper, Card, Stack } from '@mui/material';
import pexelsMigueláPadriñán from '../../assets/backgrounds/pexelsMigueláPadriñán.jpg';

function Portfolio() {

  return (
    <div>
      <Stack>
        <Paper 
            className='cards'
            elevation={8} 
            style={{
              textAlign:'center',
              fontSize:'xx-large',
              fontFamily:'WindSong',
              border:'thick double',
              borderColor:'4c4c4d'}}
          >Portfolio
        </Paper>
        
        <Card         
          className='cards'
          elevation={8} 
          style={{
            backgroundImage:`url(${pexelsMigueláPadriñán})`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',            
            marginBottom:'2%',
            padding:'1%'}} 
          >
          <Project/>
        </Card>
      </Stack>
    </div>
  );
}
export default Portfolio;