import React from 'react';
import { Form, Button, Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';
import classes from './Register.module.css';

const Styles = styled.div`
    .jumbo {
			  padding: 0;
                display: flex;
				align-items: center;
				justify-content: center;
                position: relative;
                margin-bottom:0px;
                background: rgb(139,223,104);
                background: linear-gradient(0deg, rgba(139,223,104,1) 31%, rgba(45,130,253,1) 100%);
		}
`;

const registerPage = () => (
	<Styles>
		<Jumbo fluid className="jumbo">
			<section className={classes.registerContainer}>
				<Form className={classes.registerForm}>
                <Form.Group controlId="formName">
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" placeholder="Enter your Name" className="form-control form-control-sm" />
					</Form.Group>

                    <Form.Group controlId="formUsername">
						<Form.Label>Mobile Number</Form.Label>
						<Form.Control type="text" placeholder="Enter your mobile number" className="form-control form-control-sm"/>
					</Form.Group>

					<Form.Group controlId="formUsername">
						<Form.Label>Username</Form.Label>
						<Form.Control type="text" placeholder="Username" className="form-control form-control-sm"/>
					</Form.Group>

                    <Form.Group controlId="formPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Set your Password" className="form-control form-control-sm" />
					</Form.Group>

                    <Form.Group controlId="formConfirmPassword">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control type="password" placeholder="Password" className="form-control form-control-sm" />
					</Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select your City</Form.Label>
                         <Form.Control as="select" className="form-control form-control-sm">
                           <option>Indore</option>
                        </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" className="form-control form-control-sm" />
                                <Form.Text className="text-muted">
                                  <b>We'll never share your email with anyone else.</b>
                                </Form.Text>
                            </Form.Group>

					<Button variant="primary" type="submit">
						Register
                    </Button>
				</Form>

			</section>
		</Jumbo>
	</Styles>

);

export default registerPage;