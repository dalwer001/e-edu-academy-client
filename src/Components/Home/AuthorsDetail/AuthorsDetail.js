import React from 'react';
import { Row } from 'react-bootstrap';




const AuthorsDetail = ({ author }) => {
    return (
            <div className="col-md-4 col-sm-6">
                <div className="card m-5 border-light  bg-dark" style={{ width: "10rem", height: "17rem" }}>
                    <div className="card-header border-light">
                        <img className="w-100 rounded-circle" src={author.authorImg} alt="pic" style={{ width: "8rem", height: "7.5rem" }} />
                    </div>
                    <div className="card-body text-center border-light">
                        <h6 className="text-primary fw-4">{author.name}</h6>
                        <p className="text-white fw-4">Consultant</p>
                        <a href="#" alt="pic" className="text-decoration-none" > View Profile</a>
                    </div>
                </div>
            </div>
    

    );
};

export default AuthorsDetail;