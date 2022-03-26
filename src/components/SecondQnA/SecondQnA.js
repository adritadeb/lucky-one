import React from 'react';
import './SecondQnA.css';

const SecondQnA = () => {
    return (
        <div>
            <div className='second-ans'>
                <h2>2. What are the differences between props and state?</h2>
                <p>--- The main difference between props and state is props can not change, but a  state can change by this.setState. Props are read-only, and it is immutable. But, the state is changeful, and it is mutable. Also, the state is internal, and components control it. But, props are external. Props pass data from one component to another. The state holds information about components.</p>
            </div>
        </div>
    );
};

export default SecondQnA;