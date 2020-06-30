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
                    <Gravatar email="i@example.com" default="identicon" size={150} />
                </div>
                <div className={classes.profileDetails}>
                    <p>Name : Kinetic kkhhhhhhhhhhhhhhhhhhh</p>
                    <p>age : 19</p>                   
                    <p>Name : Kinetic kkhhhhhhhhhhhhhhhhhhh</p>
                    <p>age : 19</p> 
                    <p>Name : Kinetic kkhhhhhhhhhhhhhhhhhhh</p>
                    <p>age : 19</p>
                </div>
            </Row>
        </div>
            <Row className="d-flex justify-content-center m-3">
                <button className={classes.editProfileButton}>Edit Profile</button>
            </Row>

        </>

    );
}

export default dashboard;