// import userEvent from '@testing-library/user-event';
import React, { useEffect, useRef, useState } from 'react';
// import { Nav } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './TravelDescriptions.css'

const TravelDescriptions = () => {
    const displayNameRef = useRef();
    const emailRef = useRef();
    const destinationRef = useRef();
    const travelIdRef = useRef();
    const travelFareRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const phoneRef = useRef();


    const {user} = useAuth();

    const {tourDestinationId} = useParams();

    const [travelDescriptions, setTravelDescriptions] = useState([]);

    useEffect( () => {
        fetch(`https://the-wayfarers-server.herokuapp.com/tour-destinations/${tourDestinationId}`)
        .then(res=> res.json())
        .then(data=> setTravelDescriptions(data));
    }, [])

    // const { register, handleSubmit, formState: { errors } } = useForm();

    // const onSubmit = data => {
        
    //     console.log(data)
    // };

    const handleBooking = e =>{

        const displayName = displayNameRef.current.value;
        const email = emailRef.current.value;
        const destination = destinationRef.current.value;
        const travelId = travelIdRef.current.value;
        const travelFare = travelFareRef.current.value;
        const address = addressRef.current.value;
        const city = cityRef.current.value;
        const phone = phoneRef.current.value;

        const booking = {displayName, email, destination, travelId, travelFare, address, city, phone, status:"Pending"}

        fetch('https://the-wayfarers-server.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertId){
                    alert('Booking Succesfully')
                }
            })

        e.preventDefault();
    }

    return (
        <>
            <h1 className="text-light"> <i>Describing the Travel...</i> </h1>
            <div>
                <div className="">
                    <div className="container py-5 text-light">
                        <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
                            <div className="col d-flex justify-content-center">
                                <div className="p-3 border-0">
                                    <div className="card bg-black">
                                        {/* <img src={travelDescriptions.photoURL} className="card-img-top" alt="..."/> */}
                                        <div className="card-body">
                                            <h5 className="card-title text-start">{travelDescriptions.destination}</h5>
                                            <img src={travelDescriptions.photoURL} className="card-img-top rounded" alt="..."/>
                                            <div className="pt-3 text-start">
                                                <h5 className="card-subtitle mb-2">{travelDescriptions.location}</h5>  <br />
                                                <h5 className="card-subtitle mb-2">Rating: {travelDescriptions.rating}</h5> <br />
                                                <h5 className="card-subtitle mb-2">Travel Fare: $ {travelDescriptions.travelFare}</h5>
                                                <br />
                                                <p className="card-text">
                                                    <span className="font-monospace">TRAVEL DESCRIPTION: <br /> <i className="px-3">{travelDescriptions.description}</i> </span> <br /> <br />
                                                    <span className="font-monospace">WE WILL EXPLORE THERE: <br /><i className="px-3">{travelDescriptions.explore}</i></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <div className="p-3 border-0">
                                    <h2>Book Now!</h2>
                                    <form onSubmit={handleBooking} action="" className="booking-form d-flex flex-column justify-content-center p-2">
                                        <input type="text" ref={displayNameRef}  value={user.displayName || " "} />
                                        <input type="email" ref={emailRef}  value={user.email || " "}/>
                                        <input type="text" ref={destinationRef}  value={travelDescriptions.destination || " "}/>
                                        <input type="text" ref={travelIdRef}  value={travelDescriptions._id || " "} />
                                        <input type="text" ref={travelFareRef}  value={travelDescriptions.travelFare || " "}/>
                                        <input type="text" ref={addressRef}  name="Address" id="" placeholder="Address"/>
                                        <input type="text" ref={cityRef}  name="City" id="" placeholder="City"/>
                                        <input type="number" ref={phoneRef}  name="number" id="" placeholder="Contact Number" />
                                        <input type="submit"  value="submit" data-bs-toggle="modal" data-bs-target="#staticBackdrop3" />



                                        {/* -- Modal -- */}
                                    <div className="modal fade text-dark" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel">
                                                            Successfully Booked
                                                        </h5>
                                                        <button type="button" className="btn-close btn btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    
                                                    <div className="modal-footer d-flex align-items-center">
                                                        {/* <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button> */}
                                                        {/* <input type="submit"className="btn btn-secondary" value="Confirm!" /> */}
                                                        <a href="/mybookings">
                                                            <button type="button" className="btn btn-secondary">Go to My Bookings</button>
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
            </div>
        </>
    );
};

export default TravelDescriptions;