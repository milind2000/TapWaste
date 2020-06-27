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
                    <span><i className="fa fa-recycle" style={{ fontSize: 190, marginTop: 32, marginBottom:32, color: "green" }}></i></span>
                    <h4 className={classes.serviceHead}>4. Recycle</h4>
                    <p className={classes.servicePara}>We'll help you do your bit for the environment, by getting the waste recycled!</p>
                </div>
            </Row>
            <h2>Home Page</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            <h3>Where can I get some?</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            <h3>Why do we use it?</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </Container>
    </div>
)

export default homePage;