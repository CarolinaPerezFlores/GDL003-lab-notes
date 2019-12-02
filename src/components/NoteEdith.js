import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

class NoteEdith extends React.Component {
 constructor() {
  super();
  this.addNote= this.addNote.bind(this);
}

addNote(){
this.props.addNote(this.textInput.value, this.textInputDos.value)
this.textInput.value = '';
this.textInputDos.value= '';
this.textInput.focus();

}

  render(){
    return (
        
      <Card  style={{ width: '18rem', float:"center", margin: "auto" }} className="CardMini" className="CardMain">
      <Card.Body>
        <Card.Title>
        <Form.Control  ref={input => {this.textInput= input;}} type="text" placeholder="Title" name="titulo"  autocomplete="off"/>
        </Card.Title>
        <Card.Text>
        <Form.Control  ref={inputDos => {this.textInputDos= inputDos;}} type="text" placeholder="Text" name="textoNota"  autocomplete="off" />
        </Card.Text>
        <Card.Link onClick={this.addNote} href="#">Save</Card.Link>
      </Card.Body>
    </Card>
    
    );
  }
};

export default NoteEdith;
