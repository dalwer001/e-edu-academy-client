import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../../App';
import NavbarDashboard from '../../NavbarDashboard/NavbarDashboard';
import Sidebar from '../../Sidebar/Sidebar';
import CourseListShow from '../CourseListShow/CourseListShow';





const CourseList = () => {
    const [courses,setCourses] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5500/courseList?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [loggedInUser.email])

    return (
        <div className="fluid-container">
            <NavbarDashboard></NavbarDashboard>
            <div className="row  mx-0">
                <div className='col-md-2 p-0'>
                    <Sidebar></Sidebar>
                </div>
                <div className=" col-md-10 p-4 mx-auto">
                <h1 className="border-bottom mb-2 text-brand">Course List</h1>
                    <div className="row"> 
                        {
                            courses.map(course => <CourseListShow course={course}></CourseListShow>)
                        }
                    </div>

                </div>
            </div>
        </div>

    );
};

export default CourseList;