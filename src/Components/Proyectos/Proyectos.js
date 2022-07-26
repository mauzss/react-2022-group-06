import React from 'react';

//Styled ProyectosStyle.css
import './ProyectosStyle.css';

//stylos de bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Proyectos = () => {
	return (
		<div>
			<div className="center">
				<Row>
					<Col>
						<div class="nine">
							<h1>
								Nuestros Trabajos
								<br />
								<span>Style for your eyes</span>
							</h1>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<Card
							className="card text-white bg-dark mb-3 card-black"
							style={{ width: '18rem' }}
						>
							<Card.Img variant="top" src="portafolio-mgm.netlify.app.png" />
							<Card.Body>
								<Card.Title>Portfolio</Card.Title>
								<Card.Text>
									Uno de los primeros trabajos de Codo a Codo 4.0.
								</Card.Text>
								<Card.Link href="https://portafolio-mgm.netlify.app">
									Link Portfolio CSS
								</Card.Link>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card
							className="card text-white bg-dark mb-3 card-black"
							style={{ width: '18rem' }}
						>
							<Card.Img variant="top" src="sello-mistico.png" />
							<Card.Body>
								<Card.Title>Luna Magica</Card.Title>
								<Card.Text>
									Lectura de cartas del tarot - trabajos de Codo a Codo 4.0.
								</Card.Text>
								<Card.Link href="https://luna-magica-astral.netlify.app">
									Link Luna Magica Astral
								</Card.Link>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col>
						<Card
							className="card text-white bg-dark mb-3 card-black"
							style={{ width: '18rem' }}
						>
							<Card.Img variant="top" src="areacircle-rectangle.jpg" />
							<Card.Body>
								<Card.Title>Calculadora de Area</Card.Title>
								<Card.Text>
									Calculadora de Area de un circulo y un triangulo reactangulo
								</Card.Text>
								<Card.Link href="https://desafios-martinez-marcos-gabriel.netlify.app/desafio2.html">
									Link Calculadora Area
								</Card.Link>
							</Card.Body>
						</Card>
					</Col>
					<Col></Col>
				</Row>
			</div>
		</div>
	);
};

export default Proyectos;
