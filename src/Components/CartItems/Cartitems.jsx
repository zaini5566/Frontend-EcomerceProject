import React, { useContext } from 'react'
import './Cartitems.css'
import { ShopContext } from '../../Contaxt/ShopContext'
import removeicon from '../Assets/cart_cross_icon.png'
import { useNavigate } from 'react-router-dom';



function Cartitems() {
    const {getTotalAmount,all_Product,cartItem,Romovefromcart } = useContext(ShopContext);
    const    navigate = useNavigate (); 

    const proceed = () => {
        // Check if there are any items in the cart
        const hasItemsInCart = all_Product.some((e) => cartItem[e.id] > 0);
    
        if (!hasItemsInCart) {
            alert("Cart is Empty");
        } else {
            navigate('/order');
        }
    }


    return (
        <div className='cartitemsz'>

            <div className="cartitemformatemain">
                <p>Priducts</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quty</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_Product.map((e)=>{
                if(cartItem[e.id]>0){
                    return <div key={e.id}> 
                        <div className="cartitemfrmate  cartitemformatemain">
                            <img src={e.image} className='carticonporducticon' alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitemquty'>{cartItem[e.id]}</button>
                            <p>${e.new_price*cartItem[e.id]}</p>
                            <img  className='cartitemremove'onClick={() => { Romovefromcart(e.id) }} src={removeicon} alt="" />
                        </div>
                        <hr/>
                          </div>
                }
                return null; 
            })} 
         
            <div className="cartitems-down">
                <div className="cartitemTotal">
                    <h3>Cart Totals</h3>
                    <div>
                        <div className="cartitem-total-item">
                              <p>subTotal</p>
                              <p>${getTotalAmount()}</p>
                          
                            </div>
                            <hr />
                              <div className="cartitem-total-item">
                                <p>Shipping Fee </p>
                                <p>Free</p>
                              </div>
                              <hr />
                              <div className='cartitem-total-item'>
                                <h3>Total</h3>
                                <h3>${getTotalAmount()}</h3>
                              </div>
                        <button onClick={proceed}>Proceed to Chackout</button>
                    </div>
                </div>
                    {/* <div className="cartitem-promocode">
                        <p>If you have promo code, Enter it here</p>
                        <div className="cartitempromo-box">
                            <input type="text" name="" placeholder='Promo Code' id="" />
                            <button>Submit</button>
                        </div>
                    </div> */}
            </div>

        </div>
    )
}

export default Cartitems