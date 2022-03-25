import React, { useEffect, useState } from 'react';
import Bag from '../Bag/Bag';
import './Bags.css';

const Bags = () => {
    const [bags, setBags] = useState([]);
    useEffect(() => {
        fetch('productApi.json')
            .then(res => res.json())
            .then(data => setBags(data))
    }, [])
    return (
        <div className='shop-container'>
            <h1><span className='header-part'>Increase</span> Collection</h1>
            <h3>Choose 4 items</h3>
            <div>
                <div className='product-container'>
                    {
                        bags.map(bag => <Bag
                            bag={bag}
                            key={bag.id}></Bag>)
                    }
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Bags;