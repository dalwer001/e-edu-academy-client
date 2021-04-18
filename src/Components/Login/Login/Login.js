import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import './Login.css'
import { useHistory, useLocation } from 'react-router';
import loginLogo from '../../../images/login6.jpg';
import google from '../../../images/google.png';
import { UserContext } from '../../../App';
import './Login.css';
import Navbar from '../../Shared/Navbar/Navbar';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };



    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email, photoURL } = result.user;
            const signedInUser = { name: displayName, email, photoURL }
            console.log(signedInUser);
            setLoggedInUser(signedInUser);
            storeAuthToken();
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                // Handle error
            });
    }
    return (
        <div className="fluid-container">
            <div>
            <Navbar></Navbar>
            </div>
            <div className="container">
                <div className="col-md-12 p-5 mt-5">
                    <div className="text-center">
                        <img className="w-50" src={loginLogo} alt="" />
                    </div>
                    <div className=" mt-3 text-center">
                        <button className="btn-google w-50 border rounded text-primary shadow" onClick={handleGoogleSignIn} >
                            <img src={google} alt="" className="mx-2" /> Google Sign in</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Login;