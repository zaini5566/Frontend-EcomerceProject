import React from 'react'
import './Hero.css'
import  handimg from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import heroimg from '../Assets/hero_image.png'
import banner from '../Assets/Banner.png'


function Hero() {
  return (
    <div className='hero_section'>
    <img src='https://res.cloudinary.com/dzmefxevu/image/upload/v1725547483/products/product_1725547481818.jpg' alt="" />
        {/* <div className="hero_left">
            
                <h2>NEW ARRIVALS ONLY</h2>                
         
            <div className='hero_text' >
            <div className='handimg'>
                <h1>new </h1>
                 <img src={handimg} alt=""  height='150px'/>
                 </div>
                 <h1>collection</h1>
                 <h1>for everyone</h1>
             </div>
             <div className="hero_button">
                <div>Latest Collection</div>
                 <img src={arrow} alt="arrow" />
                </div>
        </div>
        <div className="hero_right">
             <img src={heroimg} alt="" height='100%'  />
        </div> */}
    </div> 
  )
}

export default Hero