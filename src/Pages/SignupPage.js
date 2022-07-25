import React from 'react';
import { useState } from 'react';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../Data/firebaseConfig';

//Bootstrap components
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const SignupPage = () => {
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
	//---------------------------------
	//OBTENER USUARIO CON SESION INICIADA
	//---------------------------------
	/*const [user, setUser] = useState({});
	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});*/
	const user = auth.currentUser;

	//---------------------------------
	//REGISTRAR a un usuario
	//---------------------------------
	const register = async () => {
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			console.log(user);
		} catch (error) {
			console.log(error.message);
			//const errorCode = error.code;
			//const errorMessage = error.message;
		}
	};
	//---------------------------------
	//Conectarse a un usuario
	//---------------------------------
	const login = async () => {
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
			);
			console.log(user);
		} catch (error) {
			console.log(error.message);
		}
	};
	//---------------------------------
	//DESLOGUEAR a un usuario
	//---------------------------------
	const logout = async () => {
		await signOut(auth);
	};

	return (
		<div>
			<Container>
				<br />
				<Row>
					<Col md={{ span: 6, offset: 3 }}>
						<Card style={{ width: '50rem' }}>
							<Card.Body>
								<Card.Title>SignUp - Crear usuario</Card.Title>

								<Row>
									<Col>
										<h6>Email address: </h6>
										<input
											type="email"
											placeholder="Enter email"
											onChange={(event) => {
												setRegisterEmail(event.target.value);
											}}
										/>
										<p className="text-muted">
											We'll never share your email with anyone else.
										</p>
									</Col>
									<Col>
										<h6>Password:</h6>
										<input
											type="password"
											placeholder="Password"
											onChange={(event) => {
												setRegisterPassword(event.target.value);
											}}
										/>
									</Col>
								</Row>
								<Button variant="primary" onClick={register}>
									Create
								</Button>
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

								<Row>
									<Col>
										<h6>Email address</h6>
										<input
											type="email"
											placeholder="Enter email"
											onChange={(event) => {
												setLoginEmail(event.target.value);
											}}
										/>
										<p className="text-muted">
											We'll never share your email with anyone else.
										</p>
									</Col>
									<Col>
										<h6>Password</h6>
										<input
											type="password"
											placeholder="Password"
											onChange={(event) => {
												setLoginPassword(event.target.value);
											}}
										/>
									</Col>
								</Row>
								<Button variant="primary" onClick={login}>
									Login
								</Button>
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
										<h6>User logged In:</h6>
										{user !== null ? user.email : ''}
									</Col>
									<Col>
										<Button
											variant="primary"
											onClick={logout}
											disabled={user !== null ? false : true}
										>
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
