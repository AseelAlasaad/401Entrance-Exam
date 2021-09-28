import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class FavCard extends Component {
    render() {
        return (
            <div>
                <Row xs={1} md={3}>
                    {this.props.favArr.map(item => {
                        return (<Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" onClick={()=>this.props.deletefruit(item._id)}>delete </Button>
                                    <Button variant="primary" onClick={()=>this.props.handelForm(item)}>update </Button>

                                </Card.Body>
                            </Card>
                        </Col>
                        )

                    })}
                </Row>
            </div>
        );
    }
}

export default FavCard;