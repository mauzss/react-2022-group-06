import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Members = ({ memberIndex, data }) => {
	return (
		<div>
			{data[memberIndex].map((item) => (
				<div className="member">
					<Card style={{ width: '18rem' }} className='center'>
						<Card.Img variant="top" src={item.img} />
						<Card.Body>
							<Card.Title>{item.nombre} {item.apellido}</Card.Title>
							<Card.Text>{item.text}</Card.Text>
						</Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroup.Item><img src='linkedin.png' width="30" height="30"></img> <Card.Link href={item.linkedin}>LinkedIn</Card.Link></ListGroup.Item>
							<ListGroup.Item><img src='Github.png' width="30" height="30"></img> <Card.Link href={item.github}>Github</Card.Link></ListGroup.Item>
							<ListGroup.Item><img src='instagram.png' width="30" height="30"></img> <Card.Link href={item.instagram}>Github</Card.Link></ListGroup.Item>
						</ListGroup>
					</Card>
				</div>
			))}
		</div>
	);
};

export default Members;
