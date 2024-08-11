import React, { useContext, useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Item/Item'
import { ShopContext } from '../../Contaxt/ShopContext'

function Popular() {

   const{url} = useContext(ShopContext)
  const [popularProducts, setpopularProducts] = useState([]);

  useEffect(() => {
    fetch(url +'/popularinwomen')
      .then((response) => response.json())
      .then((data) => setpopularProducts(data));
  }, [])

  return (
    <div className='popular'>
      <div className='hrtag'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
      </div>
      <div className="popular_item">
        {popularProducts.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image}
            new_price={item.new_price} old_price={item.old_price} discription={item.discription} />
        })}
      </div>
    </div>
  )
}

export default Popular

