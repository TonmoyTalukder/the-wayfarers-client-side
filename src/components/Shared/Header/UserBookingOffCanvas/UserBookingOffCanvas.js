import React from 'react';
import { Link } from 'react-router-dom';
import './UserBookingOffCanvas.css';

const UserBookingOffCanvas = (props) => {
    const {destination, travelId, travelFare, _id, status}=props.book;
    
    const handleBooking= id=>{
        const proceed = window.confirm('Are you sure to cancel the booking?');
        if (proceed) {
            const url = `https://the-wayfarers-server.herokuapp.com/booking/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {  
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        window.location.reload(false)
                    }
                });
        }
    }

    return (
        <div className="">
            {
                <div className="col border custom-booking">
                    <div className="p-3 card custom-card-Offcanvas">
                        <p> Destination : {destination}</p>
                        <p> Fare : {travelFare}</p>
                        <p> Status : {status}</p>
                        <div> 
                            <button className="btn btn-danger" onClick={() => handleBooking(_id)}>Cancel Booking</button>
                        </div>
                    </div>
                </div>
            }
            
            
        </div>
    );
};

export default UserBookingOffCanvas;