import React from 'react';
import { Link } from 'react-router-dom';
import './TourDestination.css'

const TourDestination = ({tourDestination}) => {
    const{_id, destination, photoURL, location, rating, description} = tourDestination;
    return (
        <>
            <div className="tourDestination pb-3">
                <img src={photoURL} alt="" />
                <div className="px-2">
                    <h4>{destination.substring(0, 55)}...</h4>
                    <h5>{location}</h5>
                    <h5>Rating: {rating} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href={`/tourDestination-details-to-book/${_id}`}>
                            <button className="btn btn-secondary">Details Before Booking...</button>
                        </a>
                    </h5>
                    <p><small>{description.substring(0, 300)}...<span className="fw-bold text-secondary text-capitalize">To know more click on details button</span></small></p>
                </div>
            </div>
        </>
    );
};

export default TourDestination;