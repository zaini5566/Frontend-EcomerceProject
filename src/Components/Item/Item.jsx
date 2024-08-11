import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

function Item(props) {
  return (


    <div className='item'>
      <Link to={`/product/${props.id}`}> <img onClick={window.scrollTo(1,1)}  src={props.image} alt="" width="100%"/></Link>
        <p>{props.name}</p>
        <div className='item_price'>
            <div className='item_price_new'>
                ${props.new_price}
            </div>
            <div className='item_price_old'> 
                ${props.old_price} 
            </div>
        </div>
    </div>
  )
}

export default Item