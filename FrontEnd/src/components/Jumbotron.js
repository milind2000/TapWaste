import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import classes from './Jumbotron.module.css';


const Jumbotron = () => (
    <Jumbo fluid className={classes.jumbo}>
        <div className={classes.overlay}></div>
        <Container>
            <h1 className={classes.textHeader}>Welcome to <b> Tap Waste </b></h1>
            <p className={classes.textHeaderPara}>Sell Your Trash at your <b>door step </b> and contribute in <b>proper waste managment</b>.So that we can make our country <b>green and clean. </b></p>
            <div className={classes.myCoutainer}>
            <a href="/login" className={classes.jumboButton}><b>Get Started</b></a>  
            </div>
        </Container>
    </Jumbo>
);


export default Jumbotron;