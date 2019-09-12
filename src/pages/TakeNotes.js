import React from 'react';
import Navbar from '../components/Navbar';
import '../components/styles/Notes.css'
// import SignIn from '../components/NewForm'
import Login from '../components/Login';
// import NotesLogo from '../images/Lapiz.png'


class TakeNotes extends React.Component {


   
    state = {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
      },
    };
  
    // handleChange = e => {
    //   this.setState({
    //     form: {
    //       ...this.state.form,
    //       [e.target.name]: e.target.value,
    //     },
    //   });
    // };
  
    
    render() {
      return (

        
        <div >
          <div className="Notes__header">
          <img 
             className="Notes__avatar" 
             src="https://cdn.pixabay.com/photo/2017/03/18/17/46/notepad-2154581_960_720.png"
             alt="notita"
             />
          </div>
        
        
          <div>
           <Navbar /> 
           
          </div>
          <div >

             <div className="Notes__section-info">
             
             

              <Login />
              {/* <SignIn />               */}
              
              </div>

        
          </div>

          </div>     
              
       
      );
    }
  }



export default TakeNotes;