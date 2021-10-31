import React from 'react';
import './WhyBookWithWayfarers.css';
import flexibility from '../../../../images/flexibility.png';
import experience from '../../../../images/experience.png';
import quality from '../../../../images/quality.png';
import support from '../../../../images/support.png';

const WhyBookWithWayfarers = () => {
    return (
        <>
           <div className="container-fluid bg-light py-5">
               <h3>Why Book With Wayfarers?</h3>
               <div className="container mt-5">
                    <div className="row row-cols-1 row-cols-lg-4 g-2 g-lg-3 d-flex justify-content-center">
                        <div className="col">
                        <div className="p-3">
                            <img src={flexibility} alt="" />
                            <h4>Ultimate flexibility</h4>
                            <p>You’re in control, with free cancellation and payment options to satisfy any plan or budget.</p>
                        </div>
                        </div>
                        <div className="col">
                        <div className="p-3">
                            <img src={experience} alt="" />
                            <h4>Memorable experiences</h4>
                            <p>Browse and book tours and activities so incredible, you’ll want to tell your friends.</p>
                        </div>
                        </div>
                        <div className="col">
                        <div className="p-3">
                            <img src={quality} alt="" />
                            <h4>Quality at our core</h4>
                            <p>High quality standards. Millions of reviews. A Tripadvisor company.</p>
                        </div>
                        </div>
                        <div className="col">
                        <div className="p-3">
                            <img src={support} alt="" />
                            <h4>Award-winning support</h4>
                            <p>New price? New plan? No problem. We’re here to help, 24/7.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default WhyBookWithWayfarers;