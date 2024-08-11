import React from 'react'
import './Discriptionbox.css'
import ProductDisplay from '../ProductDispaly/ProductDisplay';

function Discriptionjbox(props) {
const {product} = props;
  
  return (
    <div className='Discriptonbox'>
        <div className="discriptionbox-navigator">
            <div className="dispcription-nav-box">Discription</div>
            <div className="dispcription-nav-box fade">Reviews (122)</div>
        </div>
        <div className="discriptionbox-discript">
          
        {product.discription}

        </div>

        
    </div>

  )
}

export default Discriptionjbox