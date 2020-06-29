import React from 'react';

const productControl = (props) => {
    return ( 
        <div>
        <button onClick={props.productRemoved} disabled={props.disabled}>Less</button>
        <p>{props.number}</p>
        <button onClick={props.productAdded}>More</button>
    </div>   
     );
}

export default productControl;