import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Authors from '../Authors/Authors';
import Contact from '../Contact/Contact';
import Courses from '../Courses/Courses';
import FeedBack from '../FeedBack/FeedBack';
import Header from '../Header/Header';

import WhyUs from '../whyUS/WhyUs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Courses></Courses>
            <WhyUs></WhyUs>
            <Authors></Authors>
            <FeedBack></FeedBack>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;