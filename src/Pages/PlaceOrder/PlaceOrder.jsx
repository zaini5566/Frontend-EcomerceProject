import React, { useContext,useState } from 'react'
import  style from './PlaceOrder.module.css'
import removeicon from '../../Components/Assets/cart_cross_icon.png'
import { ShopContext } from '../../Contaxt/ShopContext'
import { useNavigate } from 'react-router-dom';



const PlaceOrder = () => {
    // const {getTotalAmount} = useContext(ShopContext);
    const {getTotalAmount,all_Product,cartItem,Romovefromcart,clearCart, url } = useContext(ShopContext);
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('auth-token') !== null);
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        phone: ''
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handlePlaceOrder = () => {
        if (!isLoggedIn) {
            navigate('/login');
        } else {
            const orderDetails = {
                deliveryInfo: { ...formData },
                products: all_Product.filter(product => cartItem[product.id] > 0).map(product => ({
                    id: product.id,
                    name: product.name,
                    price: product.new_price,
                    quantity: cartItem[product.id],
                    image: product.image
                })),
                totalAmount: getTotalAmount()
            };

            fetch(url + '/placeorder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('auth-token')
                },
                body: JSON.stringify(orderDetails)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log('Order placed successfully:', data);
                    clearCart();
                    navigate('/my-orders');
                } else {
                    console.error('Error placing order:', data.errors);
                }
            })
            .catch(error => {
                console.error('Error placing order:', error);
            });
        }
    };

    return (
        <form className={style.place_order}>
            <div className={style.place_order_left}>
                <p className={style.title}>Delivery Information</p>
                <div className={style.multi_fields}>
                    <input type="text" name="firstName"  placeholder='First name' onChange={handleInputChange} />
                    <input type="text" name="lastName"  placeholder='Last name' onChange={handleInputChange} />
                </div>
                <input type="email" name="email" placeholder='Email address' onChange={handleInputChange} />
                <input type="text" name="street" placeholder='Street' onChange={handleInputChange} />
                <div className={style.multi_fields}>
                    <input type="text" name="city" placeholder='City' onChange={handleInputChange} />
                    <input type="text" name="state" placeholder='State' onChange={handleInputChange} />
                </div>
                <div className={style.multi_fields}>
                    <input type="text" name="zipCode" placeholder='Zip Code' onChange={handleInputChange} />
                    <input type="text" name="country" placeholder='Country' onChange={handleInputChange} />
                </div>
                <input type="text" name="phone" placeholder='Phone Number' onChange={handleInputChange} />
               <div className={style.none}> </div> 
            </div> 

            <div className={style.place_order_right}>    
                <div className={style.cartitems}>
                    <div className={style.cartitemformatemain}>
                        <p>Products</p>
                        <p>Title</p>
                        <p>Quty</p>
                        <p>Remove</p>
                    </div>
                    <hr />
                    {all_Product.map((e) => {
                        if (cartItem[e.id] > 0) {
                            return <div key={e.id}> 
                                <div className={`${style.cartitemfrmate} ${style.cartitemformatemain}`}>
                                    <img src={e.image} className={style.carticonporducticon} alt="" />
                                    <p>{e.name}</p>
                                    <button className={style.cartitemquty}>{cartItem[e.id]}</button>
                                    <img className={style.cartitemremove} onClick={() => { Romovefromcart(e.id) }} src={removeicon} alt="" />
                                </div>
                                <hr/>
                            </div>
                        }
                        return null; 
                    })} 

                    <div className={style.cartitems_down}>
                        <div className={style.cartitemTotal}>
                            <h3>Cart Totals</h3>
                            <div>
                                <div className={style.cartitem_total_item}>
                                    <p>subTotal</p>
                                    <p>${getTotalAmount()}</p>
                                </div>
                                <hr />
                                <div className={style.cartitem_total_item}>
                                    <p>Shipping Fee </p>
                                    <p>Free</p>
                                </div>
                                <hr />
                                <div className={style.cartitem_total_item}>
                                    <h3>Total</h3>
                                    <h3>${getTotalAmount()}</h3>
                                </div>
                                <button type="button" onClick={handlePlaceOrder}>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder;