import React from 'react';
import Navbar from '../components/Navbar';
import '../components/styles/Notes.css';
import LogoNotepad from '../images/sticky-note.png'
import Login from '../components/Login';
import LoginMain from '../components/LoginMain';
// import SignIn from '../components/NewForm'

// import NotesLogo from '../images/Lapiz.png'

class TakeNotes extends React.Component {
    
    render() {
      return (      
  <div className="ContainerFirts" >
         

          {/* <div>
           <Navbar/> 
          </div> */}
          <div className="LoginMain">
         <img src={LogoNotepad} className="ImageMain"></img>
         <h1 className="Title">    Take Note   </h1>
         <LoginMain />
   
  </div>
   </div>     
                  
      );
    }
  }
export default TakeNotes;