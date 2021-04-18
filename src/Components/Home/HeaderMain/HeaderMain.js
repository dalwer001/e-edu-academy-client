import React from 'react';
import header from '../../../images/header.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faComments } from '@fortawesome/free-solid-svg-icons';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main style={{ height: '100vh' }} className="row d-flex align-items-center mx-0">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#3A4256' }} className="fw-bolder">e.Edu Academy is <br /> Changing Learning</h1>
                <p className="text-secondary">Our courses support learning professionals to gain the knowledge and skills needed to design and deliver digital learning products.We are always waiting to help you and you can get any kind of support from us.</p>

                <button className="border-gradient-green mx-2 mt-4"><FontAwesomeIcon icon={faSearch} /> Discover Courses</button>
                <button className="border-gradient-red mt-4"><FontAwesomeIcon icon={faComments} /> Talk to us</button>
            </div>
            <div className="col-md-6">
                <img src={header} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;