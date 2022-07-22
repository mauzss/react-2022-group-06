import React from 'react';
import { useState } from 'react';

//Bootstrap components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const SignupPage = () => {
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

	const register = async () => {};
	const login = async () => {};
	const logout = async () => {};

	return (
		<div>
			<Container>
				<br />
				<Row>
					<Col md={{ span: 6, offset: 3 }}>
						<Card style={{ width: '50rem' }}>
							<Card.Body>
								<Card.Title>SignUp - Crear usuario</Card.Title>
								<Form>
									<Row>
										<Col>
											<Form.Group className="mb-3" controlId="formBasicEmail">
												<Form.Label>Email address</Form.Label>
												<Form.Control type="email" placeholder="Enter email" />
												<Form.Text className="text-muted">
													We'll never share your email with anyone else.
												</Form.Text>
											</Form.Group>
										</Col>
										<Col>
											<Form.Group
												className="mb-3"
												controlId="formBasicPassword"
											>
												<Form.Label>Password</Form.Label>
												<Form.Control type="password" placeholder="Password" />
											</Form.Group>
										</Col>
									</Row>
									<Button variant="primary" type="submit">
										Create
									</Button>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<br />
				<Row>
					<Col md={{ span: 6, offset: 3 }}>
						<Card style={{ width: '50rem' }}>
							<Card.Body>
								<Card.Title>Login</Card.Title>
								<Form>
									<Row>
										<Col>
											<Form.Group className="mb-3" controlId="formBasicEmail">
												<Form.Label>Email address</Form.Label>
												<Form.Control type="email" placeholder="Enter email" />
												<Form.Text className="text-muted">
													We'll never share your email with anyone else.
												</Form.Text>
											</Form.Group>
										</Col>
										<Col>
											<Form.Group
												className="mb-3"
												controlId="formBasicPassword"
											>
												<Form.Label>Password</Form.Label>
												<Form.Control type="password" placeholder="Password" />
											</Form.Group>
										</Col>
									</Row>
									<Button variant="primary" type="submit">
										Login
									</Button>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<br />
				<Row>
					<Col md={{ span: 6, offset: 3 }}>
						<Card style={{ width: '50rem' }}>
							<Card.Body>
								<Card.Title>User - Logout</Card.Title>
								<Row>
									<Col>
										<p>Usuario Logueado: </p>
									</Col>
									<Col>
										<Button variant="primary" type="submit">
											Logout
										</Button>
									</Col>
								</Row>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default SignupPage;
