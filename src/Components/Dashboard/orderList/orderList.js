import React, { useEffect, useState } from 'react';
import NavbarDashboard from '../NavbarDashboard/NavbarDashboard';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {

    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('https://safe-fjord-30428.herokuapp.com/ordersList')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])


    const statusUpdated = () => {
        fetch('https://safe-fjord-30428.herokuapp.com/ordersList')
            .then(res => res.json())
            .then(data => setOrder(data))
    }


    const handlePending = (id) => {

        const status = 'Pending'
        const user = { id, status };

        const url = `https://safe-fjord-30428.herokuapp.com/updateOrderList/${id}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Status Updated');
                    statusUpdated();
                }
            })
    }

    const handleOnGoing = (id) => {

        const status = 'On going'
        const user = { id, status };

        const url = `https://safe-fjord-30428.herokuapp.com/updateOrderList/${id}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Status Updated');
                    statusUpdated();
                }
            })
    }


    const handleDone = (id) => {

        const status = 'Done'
        const user = { id, status };

        const url = `https://safe-fjord-30428.herokuapp.com/updateOrderList/${id}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Status Updated');
                    statusUpdated();
                }
            })
    }


    return (
        <div className="fluid-container">
            <NavbarDashboard></NavbarDashboard>
            <div className="row mx-0">
                <div className='col-md-2 p-0'>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 mx-auto">
                    <h1 className="border-bottom mb-2 text-brand">Course Order</h1>
                    <h2 className=" mb-5 text-primary">Total Ordered List : {order.length}</h2>
                    <table class="table table-sm table-success text-center table-bordered ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Course</th>
                                <th scope="col">Price</th>
                                <th scope="col">Order Time</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            order.map(order =>
                                <tbody>
                                    <tr>
                                        <th scope="row">{order.name || order.email}</th>
                                        <td>{order.email}</td>
                                        <td>{order.title}</td>
                                        <td>${order.price}</td>
                                        <td>{order.orderTime}</td>
                                        <td><strong>{order.status}</strong></td>
                                        <td>
                                            <button onClick={() => handlePending(order._id)} className="alert alert-danger m-2 fw-bold">Pending</button>
                                            <button onClick={() => handleOnGoing(order._id)} className="alert alert-info m-2 fw-bold">On going</button>
                                            <button onClick={() => handleDone(order._id)} className="alert alert-success m-2 fw-bold">Done</button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderList;
