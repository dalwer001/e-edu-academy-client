import React from 'react';
import FeedBackShow from '../FeedBackShow/FeedBackShow';
import './FeedBack.css';



const FeedBack = () => {


    return (
        <div className="feedback-container" style={{ paddingTop: '3%' }}>
            <h1 className="text-center font-family text-white mb-5" style={{ fontWeight: '600' }}>Feed<span style={{ color: '#7AB259' }}>Back</span></h1>
            <p className=" border-bottom"></p>
            <div>
                <FeedBackShow></FeedBackShow>
            </div>
        </div>
    );
};

export default FeedBack;