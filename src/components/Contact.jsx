import React, { useState } from 'react'
import logo from '../Images/Logo.png'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <div id="contactContainer">
      <div id='contactForm'>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label><br/>
        <input
          type="text"
          id="name"
          placeholder='Enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />

        <label htmlFor="email">Email:</label><br/>
        <input
          type="email"
          id="email"
          placeholder='Enter your e-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <label htmlFor="message">Message:</label><br/>
        <textarea
          id="message"
          value={message}
          placeholder='Enter any message'
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <br />

        <button type="submit">Submit</button>
      </form>
      </div>
      <div id='contactImg'> <img src={logo} alt="" /></div>
     
    </div>
  )
}

export default Contact
