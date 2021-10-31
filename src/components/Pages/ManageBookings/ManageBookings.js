import React, { useEffect, useRef, useState } from 'react';
import DeleteDestinationOffcanvas from './DeleteDestinationOffcanvas/DeleteDestinationOffcanvas';
import './ManageBookings.css';
import ManageBooking from './ManageBooking/ManageBooking';

const ManageBookings = () => {

    const [bookings,setBookings]=useState([]);
    useEffect(()=>{
        fetch("https://the-wayfarers-server.herokuapp.com/booking")
       .then(res=>res.json())
       .then(data=>setBookings(data))
    },[])

    // Add New Destination

    const destinationRef=useRef();
    const photoURLRef=useRef()
    const locationRef=useRef()
    const ratingRef=useRef()
    const travelFareRef=useRef()
    const descriptionRef=useRef()
    const exploreRef=useRef()

    const handleAddNewDestination=e=>{
        const destination=destinationRef.current.value;
        const photoURL=photoURLRef.current.value;
        const location=locationRef.current.value;
        const rating=ratingRef.current.value;
        const travelFare=travelFareRef.current.value;
        const description=descriptionRef.current.value;
        const explore=exploreRef.current.value;

        const newTourDestination={destination:destination, photoURL:photoURL, location:location, rating:rating, travelFare:travelFare, description:description, explore:explore};

        fetch('https://the-wayfarers-server.herokuapp.com/tour-destinations', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTourDestination)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the new tour destination.')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <>
            <h1 className="p-3 text-light">Managing</h1>
            {/* <button className="btn btn-danger fs-3">Want to delete a tour destination?</button> */}
            {/* <DeleteDestinationOffcanvas></DeleteDestinationOffcanvas> */}
            <div className="container py-5 text-light">
                <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
                    <div className="col-lg-8 col">
                        <div className="p-3 border rounded-3">
                            <h3>Manage Bookings</h3>
                            <hr />
                                <h4>All users' bookings' list:</h4>
                                <h5>Total Booking : {bookings.length}</h5>
                            <hr />
                            <div className="table-responsive">
                                <table className="table table-striped text-light">
                                    <thead>
                                        <tr>
                                            <th scope="col">Travel Id</th>
                                            <th scope="col">Destination</th>
                                            <th scope="col">User Name</th>
                                            <th scope="col">User Email</th>
                                            <th scope="col">User Phone</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Confirm Travel</th>
                                            <th scope="col">Delete Travel</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            bookings.map(booking=><ManageBooking
                                                key = {booking._id}
                                                booking={booking}
                                            ></ManageBooking>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col">
                        <div className="p-3 border rounded-3">
                            <h3>Add new Tour Destination</h3>
                            <hr />

                            <div className="d-flex justify-content-center">
                                <form className="wayfarers-form pt-4" onSubmit={handleAddNewDestination}>
                                
                                <input type="text" ref={destinationRef}  placeholder="New Destination" />
                                
                                <input type="text" ref={photoURLRef}  placeholder="Insert a url of banner of the destination" />

                                <input type="text" ref={locationRef}  placeholder="Location of the Destination"/>

                                <input type="text" ref={ratingRef}  placeholder="Travelers' Rating" />

                                <input type="text" ref={travelFareRef}  placeholder="Travel Fare in USD" />

                                <textarea type="text" ref={descriptionRef}  placeholder="Travel Description" />

                                <textarea type="text" ref={exploreRef}  placeholder="What will explore" />

                                <input type="submit" value="Submit" />
                                {/*  data-bs-toggle="modal" data-bs-target="#staticBackdrop2" */}
                                {/* -- Modal -- */}
                                <div className="modal fade text-dark" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            {/* <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabel">Are you sure to add new travel destination?</h5>
                                                <button type="button" className="btn-close btn btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div> */}
                                            <div className="modal-body">
                                                <i>
                                                This new destination successfully updated!
                                                </i>
                                            </div>
                                            <div className="modal-footer d-flex align-items-center">
                                                {/* <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button> */}
                                                {/* <input type="submit"className="btn btn-secondary" value="Confirm!" /> */}
                                                <a href="/home/#tour-destinations">
                                                    <button type="button" className="btn btn-secondary">Okay</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageBookings;