import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FeedBackShow.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';


const FeedBackShow = () => {

    const [reviews, setReviews] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect( () => {
        fetch('https://safe-fjord-30428.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    var settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <Slider {...settings} className="container h-100 mt-5">
        {
            reviews.map(review =>
                <div className="d-flex align-items-center">
                    <img className="img-fluid w-50 rounded-circle p-5" style={{ width: "20rem", height: "20rem" }} src={review.userImg}alt="" />
                    <div>
                    <h1 className=" text-brand">{review.name}</h1>
                    <h5 className=" text-brand">{review.designation}</h5>
                    <p className=" text-brand">{review.description}</p>
                    </div>
                </div>
            )
        }
    </Slider>
    );
};

export default FeedBackShow;