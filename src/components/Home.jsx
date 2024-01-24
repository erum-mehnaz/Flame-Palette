import React from 'react'
import banner3 from '../Images/banner3.webp'
import banner2 from '../Images/banner2.png'
import candle1 from '../Images/candle1.webp'
import candle2 from '../Images/candle 2.avif'
import candle3 from '../Images/candle 3.jpg'
import candle4 from '../Images/candle4.jpg'
import { useDispatch } from 'react-redux'
import { Product } from '../store/actions/Actions'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const Product1= () => {
      dispatch(Product(1))
      navigate("/product-detail")
    }
    const Product2= () => {
      dispatch(Product(2))
      navigate("/product-detail")
    }
    const Product3= () => {
      dispatch(Product(3))
      navigate("/product-detail")
    }
    const Product4= () => {
      dispatch(Product(4))
      navigate("/product-detail")
    }
  return (
    <div id='homeContainer'>
      <div id='bannerImg'>
        <img src={banner3} alt="img" />
        {/* <img src={banner2} alt="" /> */}
      </div>
      <div id='cards'>
        <div className='card'>
          <img src={candle1} alt="img" />
          <p className='description'>English Rose & Oud</p>
          <p className='price'>Rs 1800 - Rs 5000</p>
          <button onClick={Product1}>Shop Now</button>
        </div>
          
        <div className='card'>
          <img src={candle2} alt="img" />
          <p className='description'>Lavender & Chamomile</p>
          <p className='price'>Rs 1800 - Rs 5000</p>
          <button onClick={Product2}>Shop Now</button>
          </div>
        <div className='card'>
          <img src={candle3} alt="" />
          <p className='description'>Sea Salt & White Lily</p>
          <p className='price'>Rs 1800 - Rs 5000</p>
          <button onClick={Product3}>Shop Now</button>
          </div>
        <div className='card'>
          <img src={candle4} alt="" />
          <p className='description'>Night Blooming Jasmine</p>
          <p className='price'>Rs 1800 - Rs 5000</p>
          <button onClick={Product4}>Shop Now</button>
          </div>
      </div>
      
      
    </div>

  )
}

export default Home
