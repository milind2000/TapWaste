import React from 'react';
import { Form, Button, Jumbotron as Jumbo } from 'react-bootstrap';
import CansBackground from '../assets/images/cans-background.jpg';
import styled from 'styled-components';
import classes from './Register.module.css';

const Styles = styled.div`
    .jumbo {
			  padding: 0;
        display: flex;
				align-items: center;
				justify-content: center;
        background: url(${CansBackground}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 100vh;
        position: relative;
		}
		.registerNowText {
			font-weight: bold;
			color: white;
		}
`;

const registerPage = () => (
	<Styles>
		<Jumbo fluid className="jumbo">
			{/* <div className="overlay"></div> */}
			<section className={classes.registerContainer}>
				<Form className={classes.registerForm}>
					<Form.Group>
						<Form.Label>Username</Form.Label>
						<Form.Control type="text" placeholder="Username" />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Remember me" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Register
          </Button>
					<Form.Group>
						<Form.Text className={classes.textToRegister}>
							New to Kachra Seth? <a className="registerNowText" href="/register">Sign up now</a>
    				</Form.Text>
					</Form.Group>
				</Form>

			</section>
		</Jumbo>
	</Styles>

);

export default registerPage;