import React from 'react';

//Bootstrap components
import Carousel from 'react-bootstrap/Carousel';

//Styled Hero
import './Hero';

const Hero = () => {
	return (
		<Carousel variant="dark">
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="react.png"
					alt="First slide"
					width="1400"
					height="400"
				/>
				<Carousel.Caption>
					<h5>React dev</h5>
					<p>
						Creacion de paginas web en react asi como tambien programas
						empresariales.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="mysql.png"
					alt="Second slide"
					width="1400"
					height="400"
				/>
				<Carousel.Caption>
					<h5>Base de datos relacionales</h5>
					<p className="shadowWhite">
						Analisis y gestion de base de datos relacionales.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="firebase.jpg"
					alt="Third slide"
					width="1400"
					height="400"
				/>
				<Carousel.Caption>
					<h5>Firebase</h5>
					<p>
						Gestion de base de datos NoSql con firebase
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="mongodb.jpg"
					alt="Third slide"
					width="1400"
					height="400"
				/>
				<Carousel.Caption>
					<h5>MongoDB</h5>
					<p>
						Gestion de base de datos NoSql con MongoDB
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Hero;
