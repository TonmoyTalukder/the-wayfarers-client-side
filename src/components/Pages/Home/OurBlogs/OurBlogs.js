import React from 'react';
import './OurBlogs.css';

const OurBlogs = () => {
    return (
        <>
            <div className="container-fluid bg-light py-5">
                <h3 className="font-monospace">D&nbsp;A&nbsp;Y&nbsp;S&nbsp;&nbsp;T&nbsp;O&nbsp;&nbsp;C&nbsp;O&nbsp;M&nbsp;E</h3>
                <p>A TRAVEL MAGAZINE BY THE WAYFARERS</p>
                <div className="container mt-4 text-light">
                    <div className="row row-cols-1 row-cols-lg-4 g-2 g-lg-3">
                        <div className="col d-flex justify-content-center">
                            <div className="p-3 thailand d-flex justify-content-start align-items-end">
                                <div className="text-start"><h4>9 Ways to Experience Wellness Your Way in Thailand </h4><br /> <small className="text-start">Stephanie Fuchs</small></div>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="p-3 private-vs-group d-flex justify-content-start align-items-end">
                                <div className="text-start"><h4>Private Versus Group Adventures: Which Is Right for You?</h4><br /> <small className="text-start">Stephanie Fuchs</small></div>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="p-3 poland d-flex justify-content-start align-items-end">
                                <div className="text-start"><h4>4 Ways to Explore Poland (Outside its Hotspots)</h4><br /> <small className="text-start">Lauren McKay</small></div>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="p-3 alberta d-flex justify-content-start align-items-end">
                                <div className="text-start"><h4>What to Do in Alberta (Apart From the Classics)</h4><br /> <small className="text-start">Lauren McKay</small></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurBlogs;