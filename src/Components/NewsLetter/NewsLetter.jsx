import React from 'react'
import './NewsLetter.css'
function NewsLetter() {
  return (
    <div className="News-letter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Sbucsribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter