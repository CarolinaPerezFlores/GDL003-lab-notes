import React from 'react';
import Navbar from '../components/Navbar';
import '../components/styles/Notes.css';
import LogoNotepad from '../images/notepad.png'
// import SignIn from '../components/NewForm'

// import NotesLogo from '../images/Lapiz.png'

class TakeNotes extends React.Component {
    
    render() {
      return (      
  <div >
          <div className="Notes__header">
         
              <img src={LogoNotepad}></img>
              <h1>    Take Note   </h1>
        
       </div>
          <div>
           <Navbar/> 
          </div>
   </div>     
                  
      );
    }
  }



export default TakeNotes;