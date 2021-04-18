import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import NavbarDashboard from '../NavbarDashboard/NavbarDashboard';
import OrderList from '../orderList/orderList';
import Sidebar from '../Sidebar/Sidebar';






const Dashboard = () => {
    const [loggedInUser, setLoggedInUSer] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`https://safe-fjord-30428.herokuapp.com/isAdmin`, {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })

        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <section className="fluid-container ">
            <NavbarDashboard></NavbarDashboard>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 mx-auto">
                    {!isAdmin &&
                            <div>
                            <div class="text-center mt-3">
                                <h3>Select Course Please!!!</h3>
                                <Link to="/home">
                                    <button class="btn btn-success">Take Course</button>
                                </Link>
                            </div>
                        </div>
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Dashboard;