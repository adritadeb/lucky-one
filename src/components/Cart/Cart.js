import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleChooseAgain }) => {
    return (
        <div>
            <h3>Selected Items</h3>
            {
                cart.map(item => <p>{item}</p>)
            }
            <div className='cart-btn'>
                <button className='pick-btn'>Pick One</button>
                <button onClick={() => handleChooseAgain()} className='choose-btn'>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;