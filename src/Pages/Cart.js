import React from 'react';
import { Container, Image, Row} from 'react-bootstrap';


import classes from './Cart.module.css';


import NewsImg from '../assets/images/news.png';
import BoxImg from '../assets/images/box.png';
import BookImg from '../assets/images/study.png';
import PlasticImg from '../assets/images/plastic.png';
import AluImg from "../assets/images/pressure-cooker.png";
import AcImg from '../assets/images/air-conditioner.png';
import FridgeImg from '../assets/images/refrigerator.png';
import WashingImg from '../assets/images/notification.png';
import BatteryImg from '../assets/images/starter.png';
import EwasteImg from '../assets/images/iphone.png';
import CaseImg from '../assets/images/cpu.png';
import LcdImg from '../assets/images/lcd.png';
import WireImg from '../assets/images/cable.png';

const cartPage = () => (
    <div>
                <Container>
        <Row id="services" className="d-flex justify-content-center">
                <h2 className={classes.head}>Add what you want to sell!!</h2>
            </Row>
         <Row className="d-flex justify-content-center">

                <div className="item col-lg-4 col-md-6 text-center mb-5">
                    <h5 className={classes.itemHead}>NewsPaper</h5>
                    <Image src={NewsImg} />              
                </div>

                <div className="col-lg-4 col-md-6 text-center mb-5">
                    <h5 className={classes.itemHead}>CardBoard</h5>
                    <Image src={BoxImg} />              
                </div>

                <div className="col-lg-4 col-md-6 text-center mb-5">
                    <h5 className={classes.itemHead}>Books</h5>
                    <Image src={BookImg} />              
                </div>
            </Row>
            <Row className="d-flex justify-content-center mb-5">
                <div className="col-lg-4 col-md-6 text-center">
                    <h5 className={classes.itemHead}>Mixed Plastic</h5>
                    <Image src={PlasticImg} />              
                </div>

                <div className="col-lg-4 col-md-6 text-center mb-5">
                    <h5 className={classes.itemHead}>Aluminium</h5>
                    <Image src={AluImg} />              
                </div>

                <div className="col-lg-4 col-md-6 text-center mb-5">
                    <h5 className={classes.itemHead}>AC</h5>
                    <Image src={AcImg} />              
                </div>

                <div className="col-lg-4 col-md-6 text-center mb-5">
                    <h5 className={classes.itemHead}>Refrigerator</h5>
                    <Image src={FridgeImg} />              
                </div>

                <div className="col-lg-4 col-md-6 text-center mb-5">
                    <h5 className={classes.itemHead}>Washing Machine</h5>
                    <Image src={WashingImg} />              
                </div>

                <div className="col-lg-4 col-md-6 text-center mb-5">
                    <h5 className={classes.itemHead}>Battery</h5>
                    <Image src={BatteryImg} />              
                </div>

                <div className="col-lg-4 col-md-6 text-center mb-5">
                    <h5 className={classes.itemHead}>E-Waste</h5>
                    <Image src={EwasteImg} />              
                </div>

                <div className="col-lg-4 col-md-6 text-center mb-5">
                    <h5 className={classes.itemHead}>CPU</h5>
                    <Image src={CaseImg} />              
                </div>

                <div className="col-lg-4 col-md-6 text-center mb-5">
                <h5 className={classes.itemHead}>LCD-LED</h5>
                    <Image src={LcdImg} />              
                </div>

                <div className="col-lg-4 col-md-6 text-center mb-5">
                    <h5 className={classes.itemHead}>Isolation Wire</h5>
                    <Image src={WireImg} />              
                </div>

            </Row>
        </Container>
    </div>
)

export default cartPage;