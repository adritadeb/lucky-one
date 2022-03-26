import React from 'react';
import './FirstQnA.css';

const FirstQnA = () => {
    return (
        <div>
            <h1>QnA Section</h1>
            <div className='first-ans'>
                <h2>1. How does react work?</h2>
                <p>--- React works in declarative code. If there are changes in the data of react element, react creates a new browser DOM. It has a virtual DOM, which compares with the newly created browser DOM. Then, it lists down all the changes and adds these in DOM. React compares these two DOMs by diff algorithm. Fiber finds which process will be efficient for updating changes.</p>
            </div>
        </div>
    );
};

export default FirstQnA;