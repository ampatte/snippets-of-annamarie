import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import open_the_door from '../../assets/backgrounds/open_the_door.jpg';
import TextField from '@mui/material/TextField'

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
      const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    setName('');
    setEmail('');
    setMessage('');
  }
  return (
    <div style={
      { backgroundImage:`url(${open_the_door})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        height:'100vh'
      }}>
      <h1 style={{paddingTop:'74px'}}>Contact Me</h1>
        <div class="mb-3">
          <form autoComplete='off' className="form">
            <TextField 
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="Name"
              variant="outlined"
              color='secondary'
              fullWidth
              required
              />
            <TextField 
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Email"
              variant="outlined"
              color='secondary'
              fullWidth
              required
            />
            <TextField 
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder="Message"
              variant="outlined"
              color='secondary'
              multiline
              rows={4}
              fullWidth
              required
              />
          
              <div class="mb-3">
            <label form="exampleFormControlTextarea1" class="form-label">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          <button type="submit" className="mui-btn mui-btn--raised" onClick={handleFormSubmit}>
          Submit
        </button></div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </div>
    </div>
    
  );
}
export default Contact