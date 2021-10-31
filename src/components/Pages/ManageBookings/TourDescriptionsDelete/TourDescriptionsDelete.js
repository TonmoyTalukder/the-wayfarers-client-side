// import userEvent from '@testing-library/user-event';
import React, { useEffect, useRef, useState } from 'react';
// import { Nav } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
import '../../TravelDescriptions/TravelDescriptions.css';

const TravelDescriptions = () => {

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
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TravelDescriptions;