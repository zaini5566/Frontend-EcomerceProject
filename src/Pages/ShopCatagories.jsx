import React, { useContext } from 'react'
import './CSS/ShopCatagores.css'
import {ShopContext} from '../Contaxt/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

function ShopCatagories(props) {
  const {all_Product} = useContext(ShopContext);
  return (
    <div className='shop-Catagories' >
        <img className='shopcatagory-banner' src={props.banner} alt="" />
        {/* <div className="shopcatagroy-indexsosrt">
          <p>
            <span>Showig 1-12</span> out of 36
              </p>
              <div className="shopcatagori-sort">
                sort by <img src={dropdown_icon} alt="" />
              </div>
        </div> */}
        <div className="shpcatagories_products">
          {all_Product.map((item,i) => {
            if(props.category===item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} 
              new_price={item.new_price} old_price={item.old_price}/>
            }
            else {
              return null;
            }
          })}
        </div>
        {/* <div className="shopcategory-loardmore">
          Explore MOre
        </div> */}
    </div>
  )
}

export default ShopCatagories