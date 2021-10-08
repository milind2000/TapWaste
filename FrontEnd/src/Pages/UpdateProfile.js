import React from 'react';
import classes from './UpdateProfile.module.css';
import { Row } from 'react-bootstrap';

const UpdateProfile = () => {
    return (
        <>
        <div className="d-flex justify-content-center m-3">
            <Row>
                <div className={classes.profileUpdate}>
                    <p>New Address :  <input type="text" name="newadd" placeholder="Enter your address" /> </p> 
                    <p>New Mobile No. :  <input type="text" name="newmob" placeholder="Enter your mobile number" /> </p>
                    <p>New Password :  <input type="password" name="newpass" placeholder="Enter your password" /> </p>  
                    <p>Confirm Password :  <input type="password" name="newpasscnf" placeholder="Enter your new password" /> </p> 
                </div>
            </Row>
        </div>
            <Row className="d-flex justify-content-center m-3">
                <a href="/" className={classes.editProfileButton}>Update Changes</a>
            </Row>

        </>

    );
}

export default UpdateProfile;