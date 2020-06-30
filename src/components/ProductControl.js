import React from "react";
import './ProductControl.module.css';

const productControl = (props) => {
    return ( 
        <div className="container">
            <h2> {props.number}</h2>
        <button onClick={props.productRemoved} disabled={props.disabled}>-</button>
        <button onClick={props.productAdded}>+</button>
    </div>   
     );
}

export default productControl;