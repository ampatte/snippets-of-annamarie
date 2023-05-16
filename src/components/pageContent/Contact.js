import React, { useState, useRef } from 'react';
import Card from '@mui/material/Card';
import emailjs from '@emailjs/browser';
import { validateEmail, validatePhoneNumber } from '../../utils/helpers';
import tree from '../../assets/backgrounds/tree.jpg';

function Contact() {

  const form = useRef();

  const [errorMessage, setErrorMessage] = useState('');
    
  const sendEmail = (e) => {
    e.preventDefault();
    const email = form.current.email.value.trim();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
  
    const phone = form.current.phone.value
    

    if (!validatePhoneNumber(phone)) {
      setErrorMessage('Phone number is invalid')
      return;
    }

    emailjs
      .sendForm(
        'service_5lakbf7',
        'template_7r3kj4j',
        form.current,
        'cWOyCwMOFtVc9qOQi'
      )
      .then(
        (result) => {
        console.log(result.text);
        },
        (error) => {
        console.log(error.text);
        }
      );  
  };

  return (
    <div 
      className='contact'
      style={
        { backgroundImage:`url(${ tree })`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          height:'100vh'
        }}>
      <h1 style={{marginTop:'74px', fontFamily: 'Instrument Serif', fontWeight:'bold'}}>
      Contact Me</h1>

      <Card 
        className='cardForm'
        style={{backgroundColor: 'rgba(245,245,245, .5)', marginTop:'0', paddingTop:'0'}}>
        <p style={{fontFamily:'WindSong', fontSize:'xxx-large'}}>
          I'm open to work. Let's chat.
        </p>
        <p style={{fontFamily: 'Instrument Serif', fontSize:'x-large'}}>
          Do you have open opportunities? Are you looking to hire an up and coming developer?         
          Fill out your contact information below, and leave me a message. I will get back with you!
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
        </form>
      </Card>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        
    </div>    
  );
}
export default Contact