import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import DB_CONFIG from '../config/config';
import BottonG from '../images/bgoogle.png'
import BottonLogout from '../images/logout.png'
// import  { Link }  from 'react-router-dom'
import { withRouter } from "react-router-dom";
// import FirebaseConfig from '../Firebase';



class Login extends Component {

    handleClick = (props) => {
        const {  signInWithGoogle, history } = this.props;
        signInWithGoogle().then(() =>
        this.props.history.push('/TakeNotes/Notes')
        )
    }

    handleClickOut = (props) => {
        const {  signOut, history } = this.props;
        signOut().then(() =>
        this.props.history.push('/TakeNotes')
        )
    }

    render(){
        const { user, signOut, signInWithGoogle } = this.props;
        return (
            <div>
                {
                    user 
                    ? <a className="nav-item"> Hello, {user.displayName} </a>
                    : <a className="nav-item"> Please, sign in</a>
                }
                {
                      user
                      ?  <button   className="Botton_out" onClick={this.handleClickOut}> <img src={BottonLogout}></img>  Sign out</button>
                      :  <button className="Botton_one"  onClick={this.handleClick}><img src={BottonG}></img> sign in whith google</button>

                }
            </div>
        );
    }
}

const firebaseAppAuth = DB_CONFIG.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withRouter(withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login));