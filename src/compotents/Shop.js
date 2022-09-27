import React, { useEffect, useState } from 'react';
import './Shop.css'
import { addToDb, getStoredCart }  from '../ema-john-resources/utilities/fakedb';
import Product from './Product';
import Cart from './Cart'


const Shop = () => {
    const [products, setProducts] = useState ([]);
    const [cart, setCart] = useState([]);
    useEffect (() => {
        fetch('./products.json')
        .then (res => res.json())
        .then( data => setProducts(data));
    }, []);
    useEffect(() =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart){
            const addedProduct = products.find(product=> product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
            setCart(savedCart);
        }
    }, [products]);
    const handleAddToCart = (products) => {
        let newCart = [];
        const exists = cart.find(product => product.id === products);
        if (!exists){
            products.quantity = 1;
            newCart = [...cart, products];
        }
        else {
            const rest = cart.filter(product => product.id !== products.id);
            exists.quantity = exists.quantity +1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(products.id);
    };
    return (
            <div className='shop-container'>
                <div className='product-container'>
                    {
                        products.map(product=><Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
                <div className='order-container'>
                    <Cart cart={cart}></Cart>
                </div>            
            </div>
    );
};

export default Shop;