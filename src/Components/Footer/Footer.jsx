import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import Istagram_logo from '../Assets/instagram_icon.png'
import watsapp_logo from '../Assets/whatsapp_icon.png'
import pintrest_logo from '../Assets/facebook.png'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
        <div className="footer_logo">
            <img src={footer_logo} alt="" />
            <p>SHOOPER</p>
        </div>
        <ul className="footer_links">
         <li> <Link to="/Privacy" className="custom-link" >Privacy</Link></li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="Foooter_social_links">
            <div className="footer_icon_container">
               <a href="https://www.instagram.com/jerry16718?igsh=MTh3cmw0bXN1aG93bA=="><img src={Istagram_logo} alt="" /></a> 
            </div>
            <div className="footer_icon_container">
               <a href="https://www.facebook.com/profile.php?id=100049795517646&mibextid=kFxxJD"><img src={pintrest_logo} alt="" /></a> 
            </div>
            <div className="footer_icon_container">
              <a href="https://wa.me/message/5IHGCB5KLOHDD1"><img src={watsapp_logo} alt="" /></a>  
            </div>
            
        </div>
        <div className="Footer_copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reseved</p>
        </div>


    </div>
  )
}

export default Footer