import React from 'react';
import Jumbotron from '../components/Jumbotron';
import { Container, Image, Row } from 'react-bootstrap';

//External css
import classes from './Home.module.css';

//Images
import ScheduleImg from '../assets/images/schedule.png';
import EncashImg from '../assets/images/encash.png';
import SegregateImg from '../assets/images/segregate.png'
import Newspaper from '../assets/images/newspapers.png';
import Metal from "../assets/images/metal.png";
import Plastic from '../assets/images/plasticss.png';
import Ewaste from '../assets/images/ewaste.jpg';

const homePage = () => (
    <div>
        <Jumbotron />
        <Container>
            <Row id="myServicesRow" className="d-flex justify-content-space-around ">
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
            <Row id="categories" className="d-flex justify-content-center">
                <h2 className={classes.ihead}>WHAT WE COLLECT!</h2>
            </Row>

            <Row id="items" className="d-flex justify-content-center">
                <div className="col-lg-3 col-md-6 text-center">
                    <Image src={Newspaper} />
                    <h4 className={classes.itemHead}>All sorts of Papers</h4>
                    <ul>
                        <li>Newspapers</li>
                        <li>Books</li>
                        <li>Carton Boxes </li>
                        <li> Packing Materials</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <Image src={Metal} />
                    <h4 className={classes.itemHead}>All sorts of Metal</h4>
                    <ul >
                        <li>Jar/Cans</li>
                        <li>Old Utensils</li>
                        <li>Aluminium/Copper</li>
                        <li> Iron/Tin</li>
                        <li> Electric Wire</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <Image src={Plastic} />
                    <h4 className={classes.itemHead}>All sorts of Plastics</h4>
                    <ul>
                        <li>Plastic Bottles</li>
                        <li>Cans/Jars</li>
                        <li>Other plastic materials</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <Image src={Ewaste} />
                    <h4 className={classes.itemHead}>All sorts of E-waste</h4>
                    <ul>
                        <li>TV</li>
                        <li>Computers</li>
                        <li>Other Electronic items</li>
                    </ul>
                </div>
            </Row>
        </Container>
    </div>
)

export default homePage;