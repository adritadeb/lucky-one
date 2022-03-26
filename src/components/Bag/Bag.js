import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Bag.css';

const Bag = ({ bag, handleAddToCart }) => {
    const { img, name, price } = bag;
    return (
        <div className='bag-info'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>Price: {price}</h3>
            <button className='add-btn' onClick={() => handleAddToCart(bag)}>Add to Cart
                <FontAwesomeIcon className='cart-icon' icon={faCartPlus}></FontAwesomeIcon></button>
        </div>
    );
};

export default Bag;