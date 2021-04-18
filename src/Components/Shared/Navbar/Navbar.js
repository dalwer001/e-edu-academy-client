import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';
import firebase from "firebase/app";
import './Navbar.css';





const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            let signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                password: '',
                photo: '',
                error: '',
                success: false
            }
            setLoggedInUser(signedOutUser);
        })
            .catch((error) => {

            });
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light background">
            <div class="container-fluid">
                <Link class="navbar-brand" to="#"><img src={logo} alt="" className="logo" /></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav  mb-2 mb-lg-0 ms-auto ">
                        <li class="nav-item ">
                            <Link class=" nav-link fw-bolder  mx-3" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class=" nav-link fw-bolder   mx-3" to="#courses" id="courses" >Our Courses</Link>
                        </li>
                        <li class="nav-item">
                            <Link class=" nav-link fw-bolder   mx-3" to="" >Authors</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bolder   mx-3" to="">Why Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bolder   mx-3" to="/dashboard">Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <Link class=" nav-link  fw-bolder  mx-3" href="" >Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/login" className="nav-link text-primary fw-bolder" onClick={handleSignOut}>{loggedInUser.email ? 'Logout' : 'Login'}</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="#" className="nav-link active text-primary fw-bolder">{loggedInUser.name || loggedInUser.email}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;