import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class FormInfo extends Component {
    render() {
        return (
            <div>
                
      <Modal show={this.props.flag} >
        <Modal.Header>
          <Modal.Title>Fruits</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={this.props.updatefruit}>
    <Form.Group className="mb-3" >
    <Form.Label>name</Form.Label>
    <Form.Control type="test" name="name"  defaultValue={this.props.name}/>
    <Form.Text className="text-muted">
    
    </Form.Text>

  </Form.Group>
  
  <Form.Group className="mb-3" >
    <Form.Label>image</Form.Label>
    <Form.Control type="test" name="image"  defaultValue={this.props.image}/>
    <Form.Text className="text-muted">
    
    </Form.Text>
    
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>price</Form.Label>
    <Form.Control type="test" name="price" defaultValue={this.props.price}/>
    <Form.Text className="text-muted">
    
    </Form.Text>
    
  </Form.Group>
  

  <Button variant="primary" type="submit" >
    update
  </Button>
</Form>




        </Modal.Body>
       
      </Modal>
                
            </div>
        );
    }
}

export default FormInfo;