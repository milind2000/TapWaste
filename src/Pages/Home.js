import React from 'react';
import Jumbotron from '../components/Jumbotron';
import { Container, Image, Row } from 'react-bootstrap';

//External css
import classes from './Home.module.css';

//Images
import ScheduleImg from '../assets/images/schedule.png';
import EncashImg from '../assets/images/encash.png';
import SegregateImg from '../assets/images/segregate.png'

const homePage = () => (
    <div>
        <Jumbotron />
        <Container>
            <Row id="myRow" className="d-flex justify-content-center">
                <h2 className={classes.serviceHead}>REDUCE, SEGREGATE, & RECYCLE</h2>
            </Row>

            <Row className="d-flex justify-content-center">
                <p className={classes.servicePara}>We follow a 4 Step Process to help you recycle your Dry Waste.</p>
            </Row>

            <Row className="d-flex justify-content-center">
                <div className="col-lg-3 col-md-6 text-center">
                    <Image src={SegregateImg} />
                    <h4 className={classes.serviceHead}>1. Segregate</h4>
                    <p className={classes.servicePara}>Keep all your Dry Waste like Plastic, Paper and Metal segregated, so it saves your time during pickup!</p>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <Image src={ScheduleImg} />
                    <h4 className={classes.serviceHead}>2. Schedule</h4>
                    <p className={classes.servicePara}>Contact us to schedule a pick up and we will collect the segregated waste from your doorstep!</p>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <Image src={EncashImg} />
                    <h4 className={classes.serviceHead}>3. Encash</h4>
                    <p className={classes.servicePara}>Cash for your Trash is instantly transferred to your account!</p>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <span><i className="fa fa-recycle" style={{ fontSize: 190, marginTop: 32, marginBottom: 32, color: "green" }}></i></span>
                    <h4 className={classes.serviceHead}>4. Recycle</h4>
                    <p className={classes.servicePara}>We'll help you do your bit for the environment, by getting the waste recycled!</p>
                </div>
            </Row>
        </Container>
    </div>
)

export default homePage;