import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <section className="contact  py-5">
            <div className="container ">
                <div className="section-header text-center text-white mb-5">
                    <h5 className="text-primary" style={{ fontSize: '3rem' }}>Contact</h5>
                    <h1>Always  connect with us</h1>
                </div>
                <div className="row ">
                    <div className="col-md-6">
                    <p style={{ fontSize: '3rem' }} className="fw-bolder contact-text">
                            Get hands on <br/> the Great Courses
                            <br/> you like.
                    </p>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid magnam unde quis facilis hic quam nulla enim impedit harum, vitae veritatis fuga adipisci culpa necessitatibus iste temporibus laudantium accusamus officia.</small>
                    </div>
                    <div className="col-md-6 mx-auto mt-2">
                        <form action="">
                            <div className="form-group m-2">
                                <input type="text" className="form-control" placeholder="Email Address *" />
                            </div>
                            <div className="form-group m-2">
                                <input type="text" className="form-control" placeholder="Subject *" />
                            </div>
                            <div className="form-group m-2">
                                <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                            </div>
                            <div className="form-group text-center m-2">
                                <button type="button" className="btn btn-brand" href="#"> Submit </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;