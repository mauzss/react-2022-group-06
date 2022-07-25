import React from 'react';

//stylos de bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Proyectos = () => {
	return (
		<div>
			<div className="center">
				<Row>
					<Col>Nuestros Trabajos</Col>
				</Row>
				<Row>
					<Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src="holder.js/100px180" />
							<Card.Body>
								<Card.Title>Portfolio</Card.Title>
								<Card.Text>
									Uno de los primeros trabajos de Codo a Codo 4.0.
								</Card.Text>
								<Button variant="primary">Ver pagina</Button>
							</Card.Body>
						</Card>
					</Col>
                    <Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src="holder.js/100px180" />
							<Card.Body>
								<Card.Title>Luna Magica</Card.Title>
								<Card.Text>
									Lectura de cartas del tarot - trabajos de Codo a Codo 4.0.
								</Card.Text>
								<Button variant="primary">Ver pagina</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Proyectos;
