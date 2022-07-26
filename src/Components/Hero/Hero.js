import React from 'react';

//Bootstrap components
import Carousel from 'react-bootstrap/Carousel';

//Styled Hero
import './HeroStyle.css';

const Hero = () => {
	return (
		<Carousel variant="dark" className='margin'>
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
					<h6>
						Creacion de paginas web en react asi como tambien programas
						empresariales
					</h6>
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
					<h6>Analisis y gestion de base de datos relacionales.</h6>
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
					<h5>Base de datos relacionales</h5>
					<h6>Gestion de base de datos NoSql con firebase</h6>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="mongodb.png"
					alt="Third slide"
					width="1400"
					height="400"
				/>
				<Carousel.Caption>
					<h5>MongoDB</h5>
					<h6>Gestion de base de datos NoSql con MongoDB</h6>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Hero;
