import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
class FruitCard extends Component {
    render() {
        return (
            <div>
                <Row xs={1} md={3}>
         {this.props.data.map(item=>{
             return (  <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  {item.price}
                </Card.Text>
                <Button variant="primary" onClick={()=>this.props.addFav(item.name,item.image,item.price)}>Add to fav</Button>
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

export default FruitCard;