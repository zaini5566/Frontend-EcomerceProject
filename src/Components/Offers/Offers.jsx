import React from 'react'
import './Offers.css'
import exlusive from '../Assets/exclusive_image.png'
function Offers() {
  return (
    <div className="offers">
        <div className="offer_left">
             <h1>EXLUSIVE</h1>
             <h1>OFFERS FOR YOU</h1>
             <p>ONLY ON BEST SELLERS PRODUCT</p>
             <button>CHEAK KNOW</button>
             
        </div>
        <div className="right">
            <img src={exlusive} alt=""/>
             
        </div>
    </div>
  )
}

export default Offers