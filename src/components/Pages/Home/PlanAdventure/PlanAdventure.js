import React from 'react';
import './PlanAdventure.css';
import groupAdventures from '../../../../images/group-adventures.jpg';
import privateAdventures from '../../../../images/private-adventures.jpg';
import selfGuidedAdventures from '../../../../images/self-guided-adventures.jpg';
import { Link } from 'react-router-dom';

const PlanAdventure = () => {
    return (
        <>
            <div className="container-fluid planAdventure py-5">
                <div className="row gy-5 d-flex justify-content-evenly">
                    <div className="col-lg-3 col-sm-12 text-start">
                        <h1>Adventure, <br />Your Way</h1>
                        <p>No matter who you’re looking to travel with, you can depend on our 2,500 trusted operators to make sure everything’s taken care of.</p>
                    </div>
                    <div className="col-lg-2 col-sm-12 px-0 d-flex justify-content-center">
                        <div className="card card-style">
                            <img src={groupAdventures} className="card-img-top" alt="..."/>
                            <div className="card-body text-start">
                                <h5 className="card-title">Group Adventures</h5>
                                <p className="card-text">Join a group and forge lifelong friendships.</p>
                                <Link to="/contact" className="fw-bold text-primary">Contact to Explore</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-12 px-0 d-flex justify-content-center">
                        <div className="card card-style">
                            <img src={privateAdventures} className="card-img-top" alt="..."/>
                            <div className="card-body text-start">
                                <h5 className="card-title">Private Adventures</h5>
                                <p className="card-text">Travel exclusively with your friends and family.</p>
                                <Link to="/contact" className="fw-bold text-primary">Contact to Explore</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-12 px-0 d-flex justify-content-center">
                        <div className="card card-style">
                            <img src={selfGuidedAdventures} className="card-img-top" alt="..."/>
                            <div className="card-body text-start">
                                <h5 className="card-title">Self-Guided Adventures</h5>
                                <p className="card-text">Be your own guide with everything booked for you in advance.</p>
                                <Link to="/contact" className="fw-bold text-primary">Contact to Explore</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlanAdventure;