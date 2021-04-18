import React, { useState } from 'react';
import NavbarDashboard from '../NavbarDashboard/NavbarDashboard';
import Sidebar from '../Sidebar/Sidebar';


const AddAdmin = () => {
    const [admin, setAdmin] = useState({})

    const handleBlur = e => {
        const newInfo = { ...admin }
        newInfo[e.target.name] = e.target.value;
        setAdmin(newInfo);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()

        formData.append('email', admin.email)

        fetch('https://safe-fjord-30428.herokuapp.com/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    e.target.reset();
                    alert('Admin Created Successfully !');
                }
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="container-fluid p-0" >
            <NavbarDashboard></NavbarDashboard>
            <div className="row mx-0">
                <div className='col-md-2 p-0'>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 mx-auto">
                    <h1 className="border-bottom mb-2 text-brand">Add Admin</h1>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Admin Email</label>
                            <input onBlur={handleBlur} type="email" class="form-control col-md-8" name="email" placeholder="Enter email" />
                        </div>
                        <button type="submit" class="btn btn-brand shadow">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;