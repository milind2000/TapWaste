import React from "react";
import classes from './ProductControl.module.css';

const productControl = (props) => {
    return ( 
        <div className="container">
            <h2> {props.number}</h2>
        <button className={classes.Mybutton1} onClick={props.productRemoved} disabled={props.disabled}>-</button>
        <button className={classes.Mybutton1} onClick={props.productAdded}>+</button>
    </div>   
     );
}

export default productControl;