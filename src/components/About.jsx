import React from 'react'
import img from '../Images/handMade.png'
const About = () => {
  return (
    <div id='aboutContainer'>
      <div id='aboutDesc'>
      <h1>About Us</h1>
      <p>Welcome to <b>Flame-Palette</b>, where passion meets craftsmanship to illuminate your world with the warm glow 
      of handmade candles. <br/>
From cozy scents to elegant designs, we take pride in creating candles that inspire moments of tranquility and joy.
At <b>Flame-Palette</b>, each candle is more than just wax and wick; it's a carefully crafted work of art. 
Our candles are hand-poured with precision, using only the finest materials to ensure a quality that surpasses expectations. 
As a small business, we prioritize sustainability and eco-friendly practices. <br />
Whether you're looking to add a touch of elegance to your home, searching for the perfect gift, or simply treating yourself to a 
moment of relaxation, <b>Flame-Palette</b> is here to light up your life.
Thank you for choosing us to be a part of your journey.</p>
      </div>
      <div id='aboutImg'>
        <img src={img} alt="" />
      </div>
     
    </div>
  )
}

export default About
