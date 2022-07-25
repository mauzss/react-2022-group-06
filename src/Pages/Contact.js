import React from 'react';

import Alert from 'react-bootstrap/Alert';

const Contact = () => {
	return (
		<div className="center">
			<Alert variant="info">
				<Alert.Heading>Contact me</Alert.Heading>
				<p>
					<b>Email: </b>gabriel_martinez_2409@hotmail.es
				</p>
				<p>
					<b>Phone: </b> +54 9 2995242888
				</p>
				<hr />
				<p className="mb-0">
					Si necesitas un programador con ganas de trabajar, buscame.
				</p>
			</Alert>
			<Alert variant="secondary">
				<Alert.Heading>Info about page</Alert.Heading>
				<p>
					<b>Contenidos Usados: </b>
				</p>
				<p>
					React-Router
					<br />
					React-bootstrap
					<br />
					Firebase User Authentication
					<br />
					Promise
					<br />
					useState
					<br />
					Recorrer un Json para obtener datos del grupo y Navbar
					<br />
				</p>
			</Alert>
		</div>
	);
};

export default Contact;
