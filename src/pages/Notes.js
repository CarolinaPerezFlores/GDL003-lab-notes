import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/database';
import Note from '../components/Note'
import NoteEdith from '../components/NoteEdith'
import ListNew from '../components/ListNew'
import Container from '@material-ui/core/Container';
import Navbar from '../components/Navbar';
import '../components/styles/Notes.css'
import LogoNotepad from '../images/sticky-note.png'
import GridExamplesPage from '../components/Grid'
import Login from '../components/Login';

class Notes extends React.Component {
  constructor(){
    super();
    this.state = {
      notes:[
        // {noteId: 1, noteContent:'note 1'},
       ]
    }
    
    this.db= firebase.database().ref().child('notes')

    this.addNote= this.addNote.bind(this);
    this.removeNote= this.removeNote.bind(this);
  }

  componentDidMount() {
    // const notes = this.state.notes;
    const {notes} = this.state;
    this.db.on ('child_added', snap => {
      notes.push({
        noteId: snap.key,
        noteTitle: snap.val().noteTitle,
        noteContent: snap.val().noteContent
      })
   this.setState({notes: notes})
   });

   this.db.on('child_removed', snap=> {
     for (let i = 0; i < notes.length; i ++){
       if (notes[i].noteId === snap.key ){
         notes.splice(i, 1);
       }
     }
     this.setState({notes});
   } )
  }

  removeNote(noteId){
 this.db.child(noteId).remove();
  }
  
  addNote(title, text){
    // let { notes } = this.state;
    // notes.push({
    //   noteId: notes.length + 1,
    //   noteContent: note
    // });
    // this.setState({ notes:notes})

     this.db.push().set({ noteTitle: title, noteContent: text});
    //this.db.collection('notes').add({ noteContent: note, noteTitle: note});
    

    } 

  render() {
    return (
    <div>
         <div className="Notes__header">
           <div className="DivHeader">
              <img className="ImageSecond" src={LogoNotepad}></img>
              <p className="TitleDos">    Take Note   </p>
          </div>
         
          </div>
        
          <div>
           <Login /> 
          </div>
         
   
     

      <div className="sectMain">
        <NoteEdith  addNote={this.addNote}/>
      </div>

      <div className="sectSecond">
        {this.state.notes.map(note => {
            return(
              <div>
              <Note 
              noteContent={note.noteContent} 
              noteTitle={note.noteTitle} 
              noteId={note.noteId}
              kay={note.noteId}
              removeNote={this.removeNote}
              />
              </div>
            )
          })
          }
       
      
      {/* </Container>  */}
      {/* <GridExamplesPage /> */}
            
      </div>
     </div>
    );
  }
}

export default Notes;