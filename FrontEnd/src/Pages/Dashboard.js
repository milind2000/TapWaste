import React from 'react';
import Gravatar from 'react-gravatar';
import classes from './Dashboard.module.css';
import { Row } from 'react-bootstrap';

const dashboard = () => {
    return (
        <>
        <div className="d-flex justify-content-center m-3">
            <Row>
                <div className={classes.profileImg}>
                    <Gravatar email="i@example.com" default="identicon" size={100} />
                </div>
                <div className={classes.profileDetails}>
                    <p>Name : </p>
                    <p>Mobile Number : </p> 
                    <p> Address: </p> 
                    <p> City : </p>

                </div>
            </Row>
        </div>
            <Row className="d-flex justify-content-center m-3">
                <a href="/user-controls" className={classes.editProfileButton}>Edit Profile</a>
            </Row>

        </>

    );
}

export default dashboard;