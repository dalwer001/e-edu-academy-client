import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { toast } from 'react-toastify';
import NavbarDashboard from '../NavbarDashboard/NavbarDashboard';
import Sidebar from '../Sidebar/Sidebar';
toast.configure()

const ManageCourse = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://safe-fjord-30428.herokuapp.com/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const deleted = () => {
        fetch('https://safe-fjord-30428.herokuapp.com/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }

    const handleDelete = (id) => {

        fetch(`https://safe-fjord-30428.herokuapp.com/deleteCourse/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.error('Product Deleted Successfully', { position: toast.POSITION.TOP_RIGHT });
                    deleted();
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
                    <h1 className="border-bottom mb-2 text-brand">Manage Course</h1>
                    <div className="col-md-12">
                        <h3 className="mb-3 text-primary">Total Course: {courses.length}</h3>

                        <table className="table table-sm table-success text-center table-bordered " >
                            <thead>
                                <tr>
                                    <th className="w-25">Course Name</th>
                                    <th className="w-25">description</th>
                                    <th className="w-25">Price</th>
                                    <th className="w-25">Image</th>
                                    <th className="w-25">Action</th>
                                </tr>
                            </thead>
                            {
                                courses.map(course =>

                                    <tbody>
                                        <td className="w-25">{course.title}</td>
                                        <td className="w-25">{course.description}</td>
                                        <td className="w-25">${course.price}</td>
                                        <td className="w-25">
                                            {
                                                course.image ? <img style={{ width: "8rem", height: "8rem" }} src={`data:image/png;base64,${course.image.img}`} alt="" />
                                                    :
                                                    <img style={{ width: "8rem", height: "8rem" }} className="img-fluid mb-3" src={`https://safe-fjord-30428.herokuapp.com/${course.img}`} alt="" />
                                            }
                                        </td>
                                        <td className="w-25">
                                            <button className="btn border-gradient-red bg-danger text-white m-4"
                                                onClick={() => handleDelete(course._id)} >Delete</button>
                                        </td>
                                    </tbody>)
                            }
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ManageCourse;