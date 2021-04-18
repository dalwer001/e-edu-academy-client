import React from 'react';
import './WhyUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faPaperPlane, faRuler, faCertificate } from '@fortawesome/free-solid-svg-icons';
import learn from '../../../images/whyus1.jpg';
import learning from "../../../images/whyus2.jpg";

const WhyUs = () => {
    return (
        <section className="fluid-container" >
            <div className=" text-center border-bottom">
                <h1 className="fw-bolder mt-5 text-brand">Why We Are Best</h1>
                <small>LEARNING VIA APP NEVER GETS EASIER</small>
            </div>
            <div className="container mt-5 d-flex align-items-center">
                <div className=" row">
                    <div className="col-md-4 col-sm-12">
                        <h2 className=" fw-bold">The Prodigious eLearning Courses for you</h2>
                        <p className="underline mt-2"></p>

                        <p className="mt-5 text-secondary mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sequi ducimus aliquid sapiente sunt accusamus blanditiis perspiciatis veniam dicta sint! In quos tempora ipsam maxime.</p>

                        <p className=" fw-4"><FontAwesomeIcon icon={faLightbulb} className="text-brand  mx-2" />   Creative Study Pattern</p>
                        <p className=" fw-4"><FontAwesomeIcon icon={faPaperPlane} className="text-brand mx-2" /> Quick Crash Courses</p>
                        <p className=" fw-4"><FontAwesomeIcon icon={faRuler} className="text-brand  mx-2" /> Provided with Experimental Examples</p>
                        <p className=" fw-4"><FontAwesomeIcon icon={faCertificate} className="text-brand mx-2" /> Certification Awarded</p>

                        <button className="border-gradient-green mt-4">Discover New Courses</button>
                    </div>

                    <div className="col-md-8  d-flex align-items-center px-5 mt-5 mb-4">
                        <div className="col-md-6 ">
                                <img src={learn} alt="" className="w-100 rounded img-shadow " style={{height:'350px'}} />
                            </div>
                            <div className="col-md-6 ">
                                <img src={learning} alt="" className="w-100 mt-5 rounded img-shadow" style={{height:'350px'}} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;