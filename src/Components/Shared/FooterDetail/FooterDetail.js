import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FooterDetail = (props) => {
    return (
        <div className="col-md-12">
            <h6 className="text-primary">{props.menuTitle ? props.menuTitle : " "}</h6>
            <ul className="list-unstyled mt-4">
                {
                    props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className=" text-white text-decoration-none"><FontAwesomeIcon className="icon active-icon" icon={item.favicon} /><span className="fw-bolder"> {item.title} </span> {item.name}</Link></li>)
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterDetail;