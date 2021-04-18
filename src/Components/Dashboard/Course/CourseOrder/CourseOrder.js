import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../../App';
import NavbarDashboard from '../../NavbarDashboard/NavbarDashboard';
import Sidebar from '../../Sidebar/Sidebar';
import ProcessPayment from '../ProcessPayement/ProcessPayment';

const CourseOrder = () => {
    const [courseOrders, setCourseOrders] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { id } = useParams();

const handlePaymentSuccess = paymentId => {
    const orderDetails = {
        ...loggedInUser,
        title:title,
        price:price,
        description:description,
        image:image,
        paymentId,
        orderTime: new Date()
    }

    fetch('http://localhost:5500/addOrder', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(orderDetails)
    })
        .then(res => res.json())
        .then(data => {
            if (data) {
                alert('your payment completed successfully.')
            }
        })
}

    useEffect(() => {
        fetch(`http://localhost:5500/courseOrder/${id}`)
            .then(res => res.json())
            .then(data => setCourseOrders(data));
    }, [id])

    const {title,price,image,description} = courseOrders;


    return (
        <div className="fluid-container  ">
            <NavbarDashboard></NavbarDashboard>
            <div className="row mx-0">
                <div className='col-md-2 p-0'>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 mx-auto">
                    <h1 className="border-bottom mb-2 text-brand">Course Order</h1>
                    <div className="container">
                        <form>
                            <div class="row mb-3">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">User Name</label>
                                <div class="col-sm-10">
                                    <input type="text" defaultValue={loggedInUser.name} class="form-control" id="inputEmail3" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputPassword3" class="col-sm-2 col-form-label">User Email</label>
                                <div class="col-sm-10">
                                    <input type="email" defaultValue={loggedInUser.email} class="form-control" id="inputPassword3" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputPassword3" class="col-sm-2 col-form-label">Course Name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" value={title} />
                                </div>
                            </div>
                        </form>

                        <div className="col-md-12 bg-light shadow p-5 rounded">
                            <h3 className="text-primary">Payment</h3>
                            <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CourseOrder;