import React from 'react';
import './Cart.css'

const Cart = ({cart}) => { 
    
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const products of cart){
        quantity = quantity + products.quantity;
        total = total + products.price * products.quantity;
        shipping = shipping + products.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const subTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h1>Ordered Items</h1>
            <p>selected items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Sub-Total: ${subTotal}</h4>
        </div>
    );
};

export default Cart;