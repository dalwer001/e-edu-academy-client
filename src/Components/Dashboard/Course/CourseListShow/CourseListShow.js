import React from 'react';

const CourseListShow = ({ course }) => {
    return (
        <div className="mt-3 mb-5 col-md-4">
            <div className="card mb-4 mt-3 border-light shadow" style={{ width: "100%", height: "100%" }}>
                <div className="card-header border-light d-flex justify-content-between">
                    {
                        course.image ? <img style={{ width: "8rem", height: "8rem" }} src={`data:image/png;base64,${course.image.img}`} alt="" />
                            :
                            <img style={{ width: "8rem", height: "8rem" }} className="img-fluid mb-3" src={`http://localhost:5500/${course.img}`} alt="" />
                    }
                    <div className="alert alert-light h-50 fw-bold" role="alert">{course.status}</div>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-primary fw-bolder">{course.title}</h5>
                    <p className="card-title">{course.description}</p>
                    <div className="card-footer d-flex justify-content-between border-light ">
                        <p className='text-primary fs-4 fw-bolder'>${course.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseListShow;