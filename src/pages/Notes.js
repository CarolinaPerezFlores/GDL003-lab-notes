import React from 'react';
import Note from '../components/Note'
import NoteEdith from '../components/NoteEdith'
// import FormNotes from '../components/FormNotes'
import ListNew from '../components/ListNew'
// import List from '../components/List';
import Container from '@material-ui/core/Container';

class Notes extends React.Component {
  
  render() {
    return (
    <div>
      <div>
        <ListNew />
      </div>

      <Container maxWidth="sm" style={{ width: '18rem', float:"center"}} > 
      <div>
      
      <br />
        <NoteEdith />
      </div>
      <div>
      <br />
        <Note comentario="holi crayoli"/>
      </div>
      <div>
      <br />
        <Note />
      </div>
      <div>
      <br />
        <Note />
      </div>
      <div>
      <br />
        <Note />
      </div>
      </Container> 
            
    </div>
     
    );
  }
}

export default Notes;