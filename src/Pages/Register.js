import React from 'react';
import classes from './Register.module.css';

const registerPage = () => {
    return (
            <div className={classes.body1}>
                <div className={classes.contactForm}>
                    <h2>REGISTER</h2>
                    <form method="POST">
                        <p>Name</p>
                        <input type="text" name="" placeholder="Enter your name" />
                        <p>Username</p>
                        <input type="text" name="" placeholder="Enter your Username" />
                        <p>Address</p>
                        <input type="text" name="" placeholder="Enter your address" />
                        <p>Mobile Number</p>
                        <input type="text" name="" placeholder="Enter your MobileNo." />
                        <p>Password</p>
                        <input type="password" name="" placeholder="Enter Password" />
                        <p> Confirm Password</p>
                        <input type="password" name="" placeholder="Enter Password" />
                        <p> City</p>
                        <select id="cars" name="city">
                             <option value="volvo">Indore</option>
                         </select>
                        <input type="submit" name="" value="Sign Up" />
                    </form>
                </div>
            </div>
    );
}

export default registerPage;