import React, { useContext, useEffect, useState } from 'react'
import './NewCollection.css'
import Item from '../Item/Item'

import { ShopContext } from '../../Contaxt/ShopContext'
function NewCollection() {

  const {url} = useContext(ShopContext)
  const [new_collection, setnew_collection] = useState([]); 
  useEffect(()=>{
    fetch(url + '/newcollection').then((response)=>response.json())
    .then((data)=>setnew_collection(data)); 
  },[])

  return (
    <div className='new-collections'>
        <div className='hrtag'>
    <h1>NEW COLLECTION</h1>
    <hr />
    </div>
    <div className="collections">
     {new_collection.map((item, i) => {
        return <Item key={i} id={item.id} name={item.name} image={item.image} 
        new_price={item.new_price} old_price={item.old_price}/>
     })}
    </div>        
    </div>
  )
}

export default NewCollection 