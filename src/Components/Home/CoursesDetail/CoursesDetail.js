import React from 'react';
import './CoursesDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

const CoursesDetail = ({ course }) => {
    const history = useHistory();
    const handleEnroll = (_id) => {
        history.push(`/courseOrder/${ _id }`);
    }
    return (
        <div className="mt-3 mb-5 col-md-4 ">
            <div className="card mb-4 mt-3 border-light card-design " style={{ width: "100%", height: "100%" }}>
                <div className="card-header border-light d-flex justify-content-center ">
                    {
                        course.image ? <img style={{ width: "15rem", height: "18rem" }} className="box" src={`data:image/png;base64,${course.image.img}`} alt="" />
                            :
                            <img style={{ width: "15rem", height: "18rem" }} className="img-fluid mb-3 box" src={`http://localhost:5500/${course.img}`} alt="" />
                    }
                    
                </div>
                <div className="card-body">
                    <h5 className="card-title text-primary fw-bolder">{course.title}</h5>
                    <p className="card-title">{course.description}</p>
                    <div className="card-footer d-flex justify-content-between border-light ">
                        <p className='text-primary fs-4 fw-bolder'>${course.price}</p>
                        <button className="border-gradient-green " onClick={()=>handleEnroll(course._id)}><FontAwesomeIcon icon={faBook} /> Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesDetail;