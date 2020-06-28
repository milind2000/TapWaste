import React from 'react';
import classes from './Login.module.css';

const samplePage = () => {
    return (
            <div className={classes.body1}>
                <div className={classes.contactForm}>
                    <h2>Login</h2>
                    <form>
                        <p>Username</p>
                        <input type="text" name="" placeholder="Username" />
                        <p>Password</p>
                        <input type="password" name="" placeholder="Enter Password" />
                        <p><input type="checkbox" /> <span className={classes.checkboxText}>Remember Me</span></p>
                        <input type="submit" name="" value="Sign In" />
                    </form>
                    <div>
                        <p>New to Kachra Seth? <a href="/register">Sign up now</a></p>
                    </div>
                </div>
            </div>
    );
}

export default samplePage;