import React from 'react';
import { Jumbotron as Jumbo, Container,Button} from 'react-bootstrap';
import styled from 'styled-components';
import CansBackground from '../assets/images/cans-background.jpg';

const Styles = styled.div`
    .jumbo {
        display: flex;
        align-items: center;
        background: url(${CansBackground}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 100vh;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.7;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        
    }

    .text-header {
        text-align: center;
        z-index: 0;
        opacity: 1;
        font-size: 5rem;
        color: white;
        font-family: "Poppins", sans-serif;
    }

    .text-header-para {
        z-index: 0;
        opacity: 1;
        text-align: center;
        font-size: 2rem;
        color: #efefef;
        font-family: "Poppins", sans-serif;
    }

    .container{
        margin-bottom:2rem;
    }

`;

const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1 className="text-header">Welcome to <b> Kachra Seth </b></h1>
                <p className="text-header-para">Sell Your Trash at your <b>door step </b> and contribute in <b>proper waste managment</b>.So that we can make our country <b>green and clean. </b></p>
            </Container>
        </Jumbo>
    </Styles>
);


export default Jumbotron;