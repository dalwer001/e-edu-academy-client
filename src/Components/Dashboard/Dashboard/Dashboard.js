import React from 'react';
import { Link } from 'react-router-dom';
import NavbarDashboard from '../NavbarDashboard/NavbarDashboard';
import Sidebar from '../Sidebar/Sidebar';





const Dashboard = () => {

    return (
        <section className="fluid-container ">
            <NavbarDashboard></NavbarDashboard>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 mx-auto">
                    <div>
                        <div class="text-center mt-3">
                            <h3>Select Course Please!!!</h3>
                            <Link to="/home">
                                <button class="btn btn-success">Take Course</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;