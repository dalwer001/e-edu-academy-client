
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faList, faListAlt, faCommentDots, faPlus, faThLarge, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';



const Sidebar = () => {
    const [loggedInUser, setLoggedInUSer] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  
    useEffect(() => {
        fetch(`https://safe-fjord-30428.herokuapp.com/isAdmin`, {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })

        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-12 py-5 " style={{ height: "100vh" }}>
            <ul className="list-unstyled">

                { !isAdmin &&
                    <div>
                        <li>
                            <Link to="/courseOrder/:id" className="text-white text-decoration-none">
                                <FontAwesomeIcon icon={faBook} /> <span>Course Order</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/courseList" className="text-white text-decoration-none">
                                <FontAwesomeIcon icon={faList} /> <span>Course List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Reviews" className="text-white text-decoration-none">
                                <FontAwesomeIcon icon={faCommentDots} /><span>Review</span>
                            </Link>
                        </li>
                    </div>
                }


                {isAdmin &&
                    <div>
                        <li>
                            <Link to="/ordersList" className="text-white text-decoration-none">
                                <FontAwesomeIcon icon={faListAlt} /> <span>Orders List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addCourse" className="text-white text-decoration-none">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Course</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addAdmin" className="text-white text-decoration-none" >
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manageCourses" className="text-white text-decoration-none" >
                                <FontAwesomeIcon icon={faThLarge} /> <span>Manage Service</span>
                            </Link>
                        </li>
                    </div>
                }
            </ul>
        </div>
    );
};

export default Sidebar;