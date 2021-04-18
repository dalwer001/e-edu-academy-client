import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import FooterDetail from '../FooterDetail/FooterDetail';

const Footer = () => {
    const ourAddress = [
        { favicon:faMapMarkerAlt, title:'Address :', name: "Dhaka-1210, Bangladesh" },
        { favicon:faPhone,title:'Phone :', name: "+8801733223366" },
        { favicon:faEnvelope,title:'email :', name: "e.eduacademy@gmail.com" }
    ]
    const Company = [
        { name: "About", link: "#" },
        { name: "Talk To Us", link: "#" },
        { name: "Help", link: "#" }
    ]
    const Links = [
        { name: "Courses",  link: "#"  },
        { name: "Tutors",  link: "#"  },
        { name: "Quiz and Tests",  link: "#"  }
    ]
    return (
        <footer className="footer-area clear-both bg-dark ">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-4">
                    <FooterDetail key={1} menuTitle="Links" menuItems={Links} />
                    </div>

                    <div className="col-md-4">
                    <FooterDetail key={2} menuTitle="Company" menuItems={Company} />
                    </div>
                    
                    <div className="col-md-4">
                    <FooterDetail key={3} menuTitle="Contact" menuItems={ourAddress}>
                    <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                    </ul>
                        <div className="mt-3">
                            <h6 className="text-white">Call now</h6>
                            <button className="btn btn-brand mb-3">+8801733223366</button>
                        </div>
                    </FooterDetail>
                    </div>
                </div>
                <div className="row border-top ">
                <div className="copyRight col-md-6">
                    <p className="text-white">Copyright @ {(new Date()).getFullYear()} All Rights Reserved Prime-3 Group</p>
                </div>
                <div className="col-md-6 d-flex justify-content-between">
                    <a href="#" className="text-decoration-none" > Privacy Policy</a> <span className="text-white"> | </span>
                    <a href="#" className="text-decoration-none"> Terms and Conditions</a> <span className="text-white"> | </span>
                    <a href="#" className="text-decoration-none"> Refund Policy</a>
                </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;