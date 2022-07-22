import React from 'react';
import /*useLocation, useNavigate,  Link */ 'react-router-dom';

//Bootstrap
import Container from 'react-bootstrap/Container';
import { Navbar as Navbarbootstrap, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

//Styled Navbar
import './NavbarStyle.css';

const Navbar = () => {
	return (
		<div>
			<nav>
				<Navbarbootstrap bg="dark" variant="dark">
					<Container>
						<Navbarbootstrap.Brand href="#home">
							<img
								src="logo-navbar.png"
								width="30"
								height="30"
								className="d-inline-block align-top"
								alt="logo"
							/>
						</Navbarbootstrap.Brand>
						<Nav className="me-auto">
							<LinkContainer to="/">
								<Nav.Link>Home</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/group">
								<Nav.Link>Group</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/contact">
								<Nav.Link>Contact</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/signup">
								<Nav.Link>Test Login</Nav.Link>
							</LinkContainer>
						</Nav>
					</Container>
				</Navbarbootstrap>
			</nav>
		</div>
	);
};

export default Navbar;
