import React from 'react'
import { useSelector } from 'react-redux'
import candle1 from '../Images/candle1.webp'
import candle2 from '../Images/candle 2.avif'
import candle3 from '../Images/candle 3.jpg'
import candle4 from '../Images/candle4.jpg'

const ProdDetail = () => {
const Product=useSelector(state => state.Product)
  return (
   <>
   {Product &&
    <div>
      {Product === 1 ? <div className='prodDetail'>
         <div><h1>English Rose & Oud</h1></div>
         <div className='desContainer'>
            <p><h3>Description</h3>Whether you're seeking a moment of relaxation, a touch of romance, or simply a luxurious escape 
                from the ordinary, our English Rose & Oud candle invites you to indulge in the art of sensory bliss. 
                Elevate your space with this exquisite fusion of nature's beauty and the mystique of the Orient, encapsulated 
                in a single, captivating flame."<br/><br/>
                The English Rose & Oud candle is more than just a fragrance; it's an experience. As the wick flickers to life, 
                the room becomes a sanctuary of tranquility, embracing you with the comforting embrace of a garden in full bloom 
                and the exotic allure of faraway lands. 
                Let the delicate balance of floral sweetness and woody depth elevate your surroundings,
                 creating an ambiance that is both refined and enchanting.
                </p>
            <img src={candle1} alt="img" />
            </div>
         <div className='prodPrice'><h2>Rs 1800 - Rs 5000</h2>
         <button>Add To Cart</button>
         </div>
        

         </div> : ""}
      {Product === 2 ? <div className='prodDetail'>
        <div><h1>Lavender & Chamomile</h1></div>
         <div className='desContainer'>
            <p><h3>Description</h3>Whether you're seeking a moment of relaxation, a touch of romance, or simply a luxurious escape 
                from the ordinary, our Lavender & Chamomile candle invites you to indulge in the art of sensory bliss. 
                Elevate your space with this exquisite fusion of nature's beauty and the mystique of the Orient, encapsulated 
                in a single, captivating flame."<br/><br/>
                The Lavender & Chamomile is more than just a fragrance; it's an experience. As the wick flickers to life, 
                the room becomes a sanctuary of tranquility, embracing you with the comforting embrace of a garden in full bloom 
                and the exotic allure of faraway lands. 
                Let the delicate balance of floral sweetness and woody depth elevate your surroundings,
                 creating an ambiance that is both refined and enchanting.
                </p>
            <img src={candle2} alt="img" />
            </div>
         <div className='prodPrice'><h2>Rs 1800 - Rs 5000</h2>
         <button>Add To Cart</button>
         </div>
         </div> : ""}
      {Product === 3 ? <div className='prodDetail'> 
      <div><h1>Sea Salt & White Lily</h1></div>
         <div className='desContainer'>
            <p><h3>Description</h3>Whether you're seeking a moment of relaxation, a touch of romance, or simply a luxurious escape 
                from the ordinary, our Sea Salt & White Lily candle invites you to indulge in the art of sensory bliss. 
                Elevate your space with this exquisite fusion of nature's beauty and the mystique of the Orient, encapsulated 
                in a single, captivating flame."<br/><br/>
                The Sea Salt & White Lily is more than just a fragrance; it's an experience. As the wick flickers to life, 
                the room becomes a sanctuary of tranquility, embracing you with the comforting embrace of a garden in full bloom 
                and the exotic allure of faraway lands. 
                Let the delicate balance of floral sweetness and woody depth elevate your surroundings,
                 creating an ambiance that is both refined and enchanting.
                </p>
            <img src={candle3} alt="img" />
            </div>
         <div className='prodPrice'><h2>Rs 1800 - Rs 5000</h2>
         <button>Add To Cart</button>
         </div>
      </div> : ""}
      {Product === 4 ? <div className='prodDetail'> 
      <div><h1>Night Blooming Jasmine</h1></div>
         <div className='desContainer'>
            <p><h3>Description</h3>Whether you're seeking a moment of relaxation, a touch of romance, or simply a luxurious escape 
                from the ordinary, our Night Blooming Jasmine candle invites you to indulge in the art of sensory bliss. 
                Elevate your space with this exquisite fusion of nature's beauty and the mystique of the Orient, encapsulated 
                in a single, captivating flame."<br/><br/>
                The Night Blooming Jasmine is more than just a fragrance; it's an experience. As the wick flickers to life, 
                the room becomes a sanctuary of tranquility, embracing you with the comforting embrace of a garden in full bloom 
                and the exotic allure of faraway lands. 
                Let the delicate balance of floral sweetness and woody depth elevate your surroundings,
                 creating an ambiance that is both refined and enchanting.
                </p>
            <img src={candle4} alt="img" />
            </div>
         <div className='prodPrice'><h2>Rs 1800 - Rs 5000</h2>
         <button>Add To Cart</button>
         </div>
      </div> : ""}
    </div>}
    </>
  )
}

export default ProdDetail
