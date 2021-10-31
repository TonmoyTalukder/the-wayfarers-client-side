import React from 'react';
import lasVegas from '../../../../images/topDestinations/las-vegas.jpg';
import './TopDestinations.css';

const TopDestinations = () => {
    return (
        <>
            <div className="container-fluid text-light py-5">
                <h2>Top Destinations</h2>
                <div className="container mt-4">
                    <div className="row row-cols-1 row-cols-lg-5 g-2 g-lg-3">
                        <div className="col d-flex justify-content-center">
                        <div className="p-3 las-vegas d-flex justify-content-center align-items-center">
                            <h3>Las Vegas</h3>
                        </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                        <div className="p-3 new-orleans d-flex justify-content-center align-items-center">
                            <h3>New Orleans</h3>
                        </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                        <div className="p-3 charleston d-flex justify-content-center align-items-center">
                            <h3>Charleston</h3>
                        </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                        <div className="p-3 key-west d-flex justify-content-center align-items-center">
                            <h3>Key West</h3>
                        </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                        <div className="p-3 new-york d-flex justify-content-center align-items-center">
                            <h3>New York City</h3>
                        </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                        <div className="p-3 chicago d-flex justify-content-center align-items-center">
                            <h3>Chicago</h3>
                        </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                        <div className="p-3 cancun d-flex justify-content-center align-items-center">
                            <h3>Cancun</h3>
                        </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                        <div className="p-3 nashville d-flex justify-content-center align-items-center">
                            <h3>Nashville</h3>
                        </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                        <div className="p-3 san-francisco d-flex justify-content-center align-items-center">
                            <h3>San Francisco</h3>
                        </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                        <div className="p-3 oahu d-flex justify-content-center align-items-center">
                            <h3>Oahu</h3>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopDestinations;