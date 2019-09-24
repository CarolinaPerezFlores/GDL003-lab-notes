import React from 'react';
import Card from 'react-bootstrap/Card';

class Note extends React.Component {
  constructor (props) {
    super(props);

    this.noteTitle= props.noteTitle;
    this.noteContent= props.noteContent;
    this.noteId= props.noteId;
  }
  

  handleRemove(id) {
    this.props.removeNote(id)
  }

  render(){
       
    return (
      <Card style={{ width: '18rem', float:"right"}}>
      <Card.Body>
        <Card.Title key={this.noteId}>
        {this.noteTitle} 
        </Card.Title>

        <Card.Text  key={this.noteId}>
        {this.noteContent}
        </Card.Text>

        <Card.Link href="#">Edith</Card.Link>
        <Card.Link href="#" onClick={()=>this.handleRemove(this.noteId)}>Delete</Card.Link>
      </Card.Body>
    </Card>
    );
  }
};

export default Note;




