import React from 'react';
import './TravelersReviews.css';

const TravelersReviews = () => {
    return (
        <>
            <div className="container-fluid text-light py-5">
                <h3 className="font-monospace">⭐R&nbsp;E&nbsp;V&nbsp;I&nbsp;E&nbsp;W&nbsp;S⭐</h3>
                <p>THE WAYFARERS MEANS YOUR TRUSTWORTHY TRAVEL PARTNER</p>
                <div className="container mt-4 text-light">
                    <div className="row row-cols-1 row-cols-lg-4 g-2 g-lg-3">
                        <div className="col d-flex justify-content-center">
                            <div className="p-3 d-flex justify-content-start align-items-center">
                                <div className="card card-custom-style">
                                    <div className="card-body">
                                        <h5 className="card-title">Name: Charlie Belle</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">
                                            <strong>Ratings: 5⭐</strong> <br />
                                            <strong>Spooky Steve was fabulous!!</strong>
                                        </h6>
                                        <p className="card-text">What a great tour! Seeing other tours as we walked through the town, I’m so glad we chose him! His charisma and presentation lived up to our expectations and more.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="p-3 d-flex justify-content-start align-items-end">
                                <div className="card card-custom-style">
                                    <div className="card-body">
                                        <h5 className="card-title">Name: Leslie Howard</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">
                                            <strong>Ratings: 4.9⭐</strong> <br />
                                            <strong>We had so much fun</strong>
                                        </h6>
                                        <p className="card-text">We had so much fun! What a great experience. Would have loved to see some coral, tho.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="p-3 d-flex justify-content-start align-items-end">
                                <div className="card card-custom-style">
                                    <div className="card-body">
                                        <h5 className="card-title">Name: Austin Howard</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">
                                            <strong>Ratings: 4.7⭐</strong> <br />
                                            <strong>Excellent cooking class</strong>
                                        </h6>
                                        <p className="card-text">Excellent cooking class. Our host was generous with her time and information sharing about the Garifuna culture. Highly recommend; well worth it and detailed. Take bug spray.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="p-3 d-flex justify-content-start align-items-end">
                            <div className="card card-custom-style">
                                    <div className="card-body">
                                        <h5 className="card-title">Name: George Squiers</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">
                                            <strong>Ratings: 4.8⭐</strong> <br />
                                            <strong>Excellent</strong>
                                        </h6>
                                        <p className="card-text">Excellent experience. Very well orchestrated. Very convenient.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TravelersReviews;