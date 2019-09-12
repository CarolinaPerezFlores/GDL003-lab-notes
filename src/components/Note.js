import React from 'react';
import Card from 'react-bootstrap/Card';
// import $ from 'jquery';
// import Popper from 'popper.js';

class Note extends React.Component {
  render(){
    return (
      <Card style={{ width: '18rem', float:"right"}}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          {this.props.comentario}
        </Card.Text>
        <Card.Link href="#">Edith</Card.Link>
      </Card.Body>
    </Card>
    );
  }
};

export default Note;




