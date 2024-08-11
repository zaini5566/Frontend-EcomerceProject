import React, { useContext } from 'react'
import { ShopContext } from '../Contaxt/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadecrums/Breadcrum';
import ProductDisplay from '../Components/ProductDispaly/ProductDisplay';
import Discriptionjbox from '../Components/Disctiptoinbox/Discriptionjbox';
import RelatedProduct from '../Components/Relatedproduct/RelatedProduct';


const Product = () => {
  const {all_Product} = useContext(ShopContext) 
  const {productId} = useParams(); 
  const products = all_Product.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={products}/>
      <ProductDisplay product={products}/>
      {/* <Discriptionjbox product={products}/> */}
      {/* <RelatedProduct/> */}

    </div>
  )
}

export default Product 