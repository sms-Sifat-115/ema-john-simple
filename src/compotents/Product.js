
import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({product, handleAddToCart}) => {

  const {name, img, price, seller, ratings} = product;
   
    return (
        <div className='Product'>
          <img src={img} alt="" />  
          <div className='product-info'>
            <p className='product-name'>{name} </p>
            <p><small>Price: ${price}</small></p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings}</small></p>
          </div>
          <button onClick={ () => {handleAddToCart(product)}} className='btn-cart'>
            <p>Add to card <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
          </button>
        </div>
    );
};

export default Product;