import React from 'react';
import './Bag.css';

const Bag = (props) => {
    const { img, name, price } = props.bag;
    return (
        <div className='bag-info'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>Price: {price}</h3>
            <button className='add-btn'>Add to Cart</button>
        </div>
    );
};

export default Bag;