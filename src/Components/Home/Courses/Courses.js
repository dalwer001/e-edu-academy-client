import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import CoursesDetail from '../CoursesDetail/CoursesDetail';
import './Courses.css';




const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('https://safe-fjord-30428.herokuapp.com/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <section className=" fluid-container mt-5 background-service" >
            <div className="text-center">
                <h5 style={{ color: '#4027d3ce', fontSize: '60px', marginTop: '10px' }} className="border-bottom ">Our <span className="spn-color">Courses</span> </h5>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 py-5 row container">
                    {
                        courses.length ? "" : <Spinner animation="border" className="mx-auto" variant="success" />

                    }
                    {
                        courses.map(course => <CoursesDetail course={course} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Courses;

