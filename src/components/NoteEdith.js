import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
// import $ from 'jquery';
// import Popper from 'popper.js';

class NoteEdith extends React.Component {
state = {};

handleChange = e => {
  // console.log({ 
  //   name: e.target.name,
  //   value: e.target.value
  //  });

  this.setState({
    // titulo: e.target.value,
   [e.target.name]: e.target.value,
  })

   
  };

   handleClick = e => {
    console.log("Botton was clicked");
    console.log(this.state)

};

  render(){
    return (
        <center>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>
        <Form.Control onChange={this.handleChange} type="text" placeholder="Title" name="titulo" value={this.state.titulo}/>
        </Card.Title>
        <Card.Text>
        <Form.Control onChange={this.handleChange} type="text" placeholder="Text" name="textoNota" value={this.state.textoNota}/>
        </Card.Text>
        <Card.Link onClick={this.handleClick} href="#">Save</Card.Link>
      </Card.Body>
    </Card>
    </center>
    );
  }
};

export default NoteEdith;
