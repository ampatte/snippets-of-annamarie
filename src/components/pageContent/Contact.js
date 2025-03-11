import React, { useState, useRef } from 'react';
// import Card from '@mui/material/Card';
import { Paper, Card, Stack } from '@mui/material';
import emailjs from '@emailjs/browser';
import { validateEmail, validatePhoneNumber } from '../../utils/helpers';
import tree from '../../assets/backgrounds/tree.jpg';

function Contact() {

  const form = useRef();

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
    
  const sendEmail = (e) => {
    e.preventDefault();
    const email = form.current.email.value.trim();
    const phone = form.current.phone.value.trim();    
    
    // setErrorMessage('');
    // setSuccessMessage('');

    if (!validateEmail(email)) {
      setErrorMessage('a valid Email required ');
      return;
      }    
    
    if (!validatePhoneNumber(phone)) {
      setErrorMessage('Phone number is invalid')
      return;
      }

    emailjs
      .sendForm(
        'service_zs1060e',
        'template_7r3kj4j',
        form.current,
        'cWOyCwMOFtVc9qOQi'
      )
      .then(
        (result) => {
        console.log('Success!', result.text);
        setSuccessMessage('Your message has been sent successfully!');
          if (form.current) {
          form.current.reset();
          }
        }, 

        (error) => {
        console.log( error.text);
        setErrorMessage('Failed to send email. Please try again');  
        },
      );  
    };

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
        >Contact Me
        </Paper>
      
        <Card         
          className='cards'
          elevation={8} 
          style={{
            backgroundImage:`url(${tree})`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',            
            marginBottom:'2%',
            padding:'1%'}} 
          >

          <Card 
            className='cardForm'
            style={{
              backgroundColor: 'rgba(245,245,245, .5)'}}
          >
            
            <p style={{fontFamily: 'Instrument Serif', fontSize:'xx-large', padding:'2%'}}>
              Do you have open opportunities? Are you looking to hire an up and coming developer?         
              Fill out your contact information below, and leave me a message. You can also email me directly at ampatterson1@hotmail.com. I will get back with you!
            </p>
            <p style={{ fontFamily:'WindSong', fontSize:'xx-large'}}>Thank you!</p>

            <form
              ref={form}
              onSubmit={sendEmail}
              autoComplete='off'>         
              <input
                className="form"
                placeholder="Name"
                name="name"
                type="text" 
                style={{
                  width:'44%'
                }}               
              />           
              <input
                className='form'
                placeholder="Phone Number"
                name="phone"
                type="phone"
                style={{
                  width:'44%'
                }}  
              />
              <input
                className='form'
                placeholder="Email"
                name="email"
                type="email"
                style={{
                  width:'91%'
                }}  
              />  
              <input
                className='form'
                placeholder="Message" 
                name="message"
                type="text"
                style={{
                  width:'91%',
                  height:'7rem'
                }}  
              />            
              <input
                className='form'
                type="submit"
                value="Send"
              />

              <div
                className='cardform'
                style={{
                  fontWeight:'bolder',
                  padding:'1%'
                }}
              >
                {errorMessage && (
                  <p className="error-text">{errorMessage}</p>   
                )}
                {successMessage && (
                  <p className="success-message">{successMessage}</p>
                )}
              </div>

            </form>
          </Card>

          
        </Card>
      </Stack>   
    </div>    
  );
}

export default Contact