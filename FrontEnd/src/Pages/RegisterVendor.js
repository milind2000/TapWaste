import React from 'react';
import classes from './Register.module.css';

const registerPage = () => {
    return (
            <div className={classes.body1}>
                <div className={classes.contactForm}>
                    <h2>REGISTER<p>(for vendors)</p></h2>
                    <form method="POST">
                        <p>Name</p>
                        <input type="text" name="" placeholder="Enter your name" />
                        <p>Email</p>
                        <input type="email" name="" placeholder="Enter your Email" />
                        <p>Address</p>
                        <input type="text" name="" placeholder="Enter your address" />
                        <p>Zone</p>
                        <input type="number" name="" placeholder="Enter your zone number" />
                        <p>Mobile Number</p>
                        <input type="tel" name="" placeholder="Enter your mobile number" />
                        <p>Pincode</p>
                        <input type="text" name="" placeholder="Enter your pincode" />
                        {/* <p> City</p>
                        <select id="cars" name="city">
                             <option value="volvo">Indore</option>
                         </select> */}
                        <p>Password</p>
                        <input type="password" name="" placeholder="Enter Password" />
                        <p> Confirm Password</p>
                        <input type="password" name="" placeholder="Enter Password" />
                        <input type="submit" name="" value="Sign Up" />
                    </form>
                </div>
            </div>
    );
}

export default registerPage;