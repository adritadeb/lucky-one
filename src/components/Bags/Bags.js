import React, { useEffect, useState } from 'react';
import Bag from '../Bag/Bag';
import Cart from '../Cart/Cart';
import './Bags.css';

const Bags = () => {
    const [bags, setBags] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('productApi.json')
            .then(res => res.json())
            .then(data => setBags(data))
    }, [])
    const handleAddToCart = (selectedItem) => {
        let newCart = [];
        newCart = [...cart, selectedItem.name];
        setCart(newCart);
    };
    const handlePickOne = () => {
        let newCart = [];
        const randomIndex = parseInt(Math.random() * cart.length);
        const itemIndex = cart[randomIndex];
        newCart = [itemIndex];
        setCart(newCart)
    }
    const handleChooseAgain = () => {
        setCart([]);
    }
    return (
        <div>
            <h1><span className='header-part'>Increase</span> Collection</h1>
            <h3>Choose 4 items</h3>
            <div className='shop-container'>
                <div className='product-container'>
                    {
                        bags.map(bag => <Bag
                            key={bag.id}
                            bag={bag}
                            handleAddToCart={handleAddToCart}></Bag>
                        )
                    }
                </div>
                <div className='cart-container'>
                    <Cart
                        cart={cart}
                        handlePickOne={handlePickOne}
                        handleChooseAgain={handleChooseAgain}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Bags;