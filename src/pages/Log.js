import React from 'react';
// import header from '../images/badge-header.svg';
// import Badge from '../components/Badge';
// import BadgeForm from '../components/BadgeForm';
 import Navbar from '../Components/Navbar';
 //import { Link } from 'react-router-dom';
// <Link to="/log/notes" >New Notes</Link> 
// import List from '../components/List';
import Login from '../Components/Login'
class Log extends React.Component {
 
    
//   pner a cada div el className

   
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
        <div>
           <Navbar /> 
          <div >
            {/* <img className="img-fluid" src={header} alt="Logo" /> */}
          </div>
  
          <div >Hola
            <div >
              <Login />
              <div >
                {/* <Badge */}
                  {/* firstName={this.state.form.firstName}
                  lastName={this.state.form.lastName}
                  twitter={this.state.form.twitter}
                  jobTitle={this.state.form.jobTitle}
                  email={this.state.form.email}
                  avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon" */}
               
              </div>
  
              <div >
                {/* <BadgeForm
                  onChange={this.handleChange}
                  formValues={this.state.form} */}
               
              </div>
            </div>
          </div>
        </div>
      );
    }
  }



export default Log;