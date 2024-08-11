import React, { useContext, useEffect, useState } from 'react';
import  styleorder from './MyOrder.module.css'
import {ShopContext} from '../../Contaxt/ShopContext'

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const {url} = useContext(ShopContext)
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(url + '/myorders', {
                    headers: {
                        'auth-token': localStorage.getItem('auth-token')
                    }
                });
                const data = await response.json();
                if (data.success) {
                    setOrders(data.orders);
                } else {
                    console.error('Failed to fetch orders:', data.errors);
                }
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div>
            <div className={styleorder.cartitems}>
            <h1>My Orders</h1>
            <div className={styleorder.cartitemformatemain}>
                <p className={styleorder.title}>Date</p>
                <p className={styleorder.title}>Product</p>
                <p className={styleorder.title}>Title</p>
                <p className={styleorder.title}>Price</p>
                <p className={styleorder.title}>Quty</p>
                <p className={styleorder.title}>Total</p>
                <p className={styleorder.title}>Status</p>
            </div>
            <hr />
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                orders.map(order => (
                    <div key={order._id}>
                        {/* <h2>Order ID: {order._id}</h2> */}
                 
                     
                             
                               
                            {order.products.map(product => (
                                <div key={product.id}  className={` ${styleorder.cartitemformatemain}`}>
                                           <p>{new Date(order.date).toLocaleString()}</p>
                                    <img src={product.image} alt={product.name}  className={styleorder.carticonporducticon} />
                                        <p><strong>{product.name}</strong></p>
                                        <p> ${product.price}</p>
                                        <p>{product.quantity}</p>
                                        <p>${product.quantity * product.price}</p>
                                        {/* <ul><li>Processing</li></ul> */}
                                        <p><span>&#x25cf;</span><b>{order.status}</b></p>
                                       
                                </div>
                                 
                            ))}
                        
                            
                    </div>
                ))
            )}
             </div>
        </div>
    );
};

export default MyOrders;
