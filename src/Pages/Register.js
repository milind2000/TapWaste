import React from 'react';
import classes from './Register.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const samplePage = () => {
    return (
            <div className={classes.body1}>
                <div className={classes.contactForm}>
                    <h2>Register</h2>
                    <Form className={classes.registerForm}>
                <Form.Group controlId="formName">
						<Form.Label className={classes.paraLabel}>Name</Form.Label>
						<Form.Control type="text" placeholder="Enter your Name" className="form-control form-control-sm" />
					</Form.Group>

                    <Form.Group controlId="formUsername">
						<Form.Label className={classes.paraLabel}>Mobile Number</Form.Label>
						<Form.Control type="text" placeholder="Enter your mobile number" className="form-control form-control-sm"/>
					</Form.Group>

					<Form.Group controlId="formUsername">
						<Form.Label className={classes.paraLabel}>Username</Form.Label>
						<Form.Control type="text" placeholder="Username" className="form-control form-control-sm"/>
					</Form.Group>

                    <Form.Group controlId="formPassword">
						<Form.Label className={classes.paraLabel}>Password</Form.Label>
						<Form.Control type="password" placeholder="Set your Password" className="form-control form-control-sm" />
					</Form.Group>

                    <Form.Group controlId="formConfirmPassword">
						<Form.Label className={classes.paraLabel}>Confirm Password</Form.Label>
						<Form.Control type="password" placeholder="Password" className="form-control form-control-sm" />
					</Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label className={classes.paraLabel}>Select your City</Form.Label>
                         <Form.Control as="select" className="form-control form-control-sm">
                            <option>Indore</option>
                            <option>Bhopal</option>
                            <option>Delhi</option>
                            <option>Bengluru</option>
                            <option>Chennai</option>
                        </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className={classes.paraLabel}>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" className="form-control form-control-sm" />
                                <Form.Text className="text-muted">
                                  <b>We'll never share your email with anyone else.</b>
                                </Form.Text>
                            </Form.Group>

					<Button variant="primary" type="submit">
						Register
                    </Button>
				</Form>
                    <div>
                        <p>Already a user? <a href="/login">Login Now</a></p>
                    </div>
                </div>
            </div>
    );
}

export default samplePage;