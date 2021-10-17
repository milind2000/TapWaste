import React from 'react';
import classes from './About.module.css'
import { Container,Row } from 'react-bootstrap';
import GlobalImg from '../assets/images/global-warming.png';
import SmogImg from '../assets/images/smog-city.png';

const aboutPage = () => (
        <Container>
        
        <Row className="d-flex justify-content-center">
                <h2 className={classes.aboutHead}>ABOUT US</h2>
                <div className={classes.line}></div>
            </Row>
            

            <Row className="d-flex justify-content-left">
                <p className={classes.aboutPara}>Tap Waste was founded in 2021 to make dry-waste disposal sustainable and clean across the country. To ensure accuracy, we studied prior to founding and then worked on ground level to ensure the transparency in the system.So that everyone can get the required amount for their dry waste and also the collector get benefitted by it.</p>
            </Row>

            <Row className="d-flex justify-content-center">
                <h2 className={classes.missionHead}>MISSION</h2>
                <div className={classes.line}></div>
            </Row>

            <Row className="d-flex justify-content-center">
                <div>
            <img className={classes.global} src={GlobalImg} alt="globalwarming" />
            <p className={classes.missionPara}>Climate change and environmental degradation have been identified as one of the key issues plaguing us today. In that light, several national and international mandates have been undertaken to combat those components that harm the environment around us.</p>

       <p className={classes.missionPara}> Such steps include the National Action Plan on Climate Change by the Government of India, the U.N Framework Convention on Climate Change by the United Nations, and including ‘Climate Action’, and ‘Responsible Consumption and Production’ in the U.N Sustainable Development Goals (SDGs) which acts as a blueprint to ensure a sustainable future for each human.</p>
            </div>

                <div>
            <img className={classes.smog} src={SmogImg} alt="smog" />
            <p className={classes.smogPara}>A key component plaguing the environment is the unruly disposal of e-waste. Through the shadow economy and their methods of disposal, and the lack of awareness on the environmental degradation of unprocessed e-waste disposal, harmful toxics are released in the air that affect both the environment and humans.</p>

       <p className={classes.smogPara}> The effects of the poor air quality is most visible in Delhi, India where in recent times the air quality has been deemed unlivable. In addition to that, information on sustainable e-waste disposal and availing services for the same is not easily available either.</p>
            
            </div>

            <Row className="d-flex justify-content-center">
                <div className={classes.eline}></div>
                
            </Row>
            

            <Row className="d-flex justify-content-center">
                <p className={classes.endPara}>To ensure that the waste produced, from consumers or producers, is disposed sustainably, without negatively affecting the environment, by reaching out to the maximum number of people possible.</p>
                <p className={classes.endePara}>Through this, we further extend our commitment to the fulfilment of the SDGs and several national initiatives that aim at working towards the betterment of environment and ultimately preventing the harmful effects of climate change.</p>
      </Row>



            </Row>

            </Container>
)
 
export default aboutPage;