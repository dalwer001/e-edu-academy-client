import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';
import firebase from "firebase/app";


const NavbarDashboard = () => {
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
        <div>
            <nav class="navbar navbar-expand-lg navbar-light background ">
                <Link class="navbar-brand" to="/"><img src={logo} alt="" className="logo" /></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                            <Link to="/home" className="nav-link active text-dark  fw-bolder">Home</Link>
                        </li>
                    <li class="nav-item">
                            <Link to="#" className="nav-link active text-dark  fw-bolder">{loggedInUser.name || loggedInUser.email}</Link>
                        </li>
                        <li>
                            <Link to="/login" className="nav-link text-light border-gradient-red fw-bolder" onClick={handleSignOut}>{loggedInUser.email ? 'Logout' : 'Login'}</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavbarDashboard;