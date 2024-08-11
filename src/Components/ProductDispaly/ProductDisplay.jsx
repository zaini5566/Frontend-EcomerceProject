import React, { useContext } from 'react'
import './ProductDispaly.css'
import sart_icon from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Contaxt/ShopContext';

function ProductDisplay(props) {
    const { product } = props;
   const {addtocart} = useContext(ShopContext); 
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdispaly-imglist">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdispaly-img">
                    <img className='main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <p>{product.name}</p>
                <div className="productdisplay-rightstar">
                    <img src={sart_icon} alt="" />
                    <img src={sart_icon} alt="" />
                    <img src={sart_icon} alt="" />
                    <img src={sart_icon} alt="" />
                    <img src={star_dull} alt="" />
                </div>
                <div className="dispalyright-prices">
                    <div className="oldprice"> ${product.old_price}</div>
                    <div className="newprice">${product.new_price}</div>
                </div>
  
                    <button onClick={()=>{addtocart(product.id)}}>ADD TO CART</button>
                    <p className="productdisplay-right-category"> <span>Category :</span>{product.category}</p>
                    {/* <p className="productdisplay-right-category"> <span>Tags :</span>Modren, Latest</p> */}
               
                <div className="product_Short_Discription">
                   {product.discription }
                </div>



            </div>
        </div>
    )
}

export default ProductDisplay