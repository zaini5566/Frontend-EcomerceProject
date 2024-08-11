import React, { createContext, useEffect, useState } from 'react'


export const ShopContext = createContext(null);

const getDefauldCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}
 const url = 'https://backend-ecomerce-3zhr.onrender.com';
const ShopContextProvider = (props) => {

    const [all_Product, setAll_Product] = useState([])

    const [cartItem, setcartItem] = useState(getDefauldCart());

    useEffect(()=>{
       fetch(url + '/allproducts')
       .then((response)=>response.json())
       .then((data)=>setAll_Product(data))

       if(localStorage.getItem('auth-token')){
        fetch(url + '/getcart',{
            method:'POST', 
            headers:{
                Accept:'application/form-data', 
                'auth-token':`${localStorage.getItem('auth-token')}`, 
                'Content-Type':'application/json', 
            }, 
            body:"", 
        })
        .then((response)=>response.json())
        .then((data)=>setcartItem(data)); 
       }
    },[])

    const addtocart = (itemId) => {
        setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        if (localStorage.getItem('auth-token')){
            fetch(url + '/addtocart', {
                method:'POST', 
                headers:{
                    Accept:'application/form -data',
                    'auth-token':`${localStorage.getItem('auth-token')}`, 
                    'Content-Type':'application/json'
                }, 
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data)); 
        }
    }
    const Romovefromcart = (itemId) => {
        setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if(localStorage.getItem('auth-token')){
            fetch(url + '/removefromcart ', {
                method:'POST', 
                headers:{
                    Accept:'application/form -data',
                    'auth-token':`${localStorage.getItem('auth-token')}`, 
                    'Content-Type':'application/json'
                }, 
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data)); 
        }
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
    
        for (const itemId in cartItem) {
            if (cartItem[itemId] > 0) {
                // Find the product information based on the itemId
                let itemInfo = all_Product.find(product => product.id === Number(itemId));
    
                if (itemInfo) {
                    // If new_price is undefined, use 0 as the default value
                    let productPrice = itemInfo.new_price || 0;
                    totalAmount += productPrice * cartItem[itemId];
                } else {
                    console.error(`Product with ID ${itemId} not found`);
                }
            }
        }
        return totalAmount;
    }
    

    const gettotalcartitems = () => {
        let totalitem = 0; 
        for(const item in cartItem){
            if(cartItem[item]>0)
            {
                totalitem += cartItem[item];
            }
        }
        return totalitem; 
    }

    const clearCart = () => {
        setcartItem(getDefauldCart());
    };
     
    const contaxtValue = { gettotalcartitems, getTotalAmount, all_Product, cartItem, addtocart, Romovefromcart,clearCart, url   };
    return (
        <ShopContext.Provider value={contaxtValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;