import React from 'react';
import "./HomeStyles.css"

import Hero from '../Components/Hero/Hero';
import Proyectos from '../Components/Proyectos/Proyectos';

const Home = () => {
	return (
		<div>
			<Hero />
			<Proyectos />
		</div>
	);
};

export default Home;
