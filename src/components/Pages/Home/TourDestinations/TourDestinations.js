import React, { useEffect, useState } from 'react';
import './TourDestinations.css';
import TourDestination from '../TourDestination/TourDestination';
import useAuth from '../../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';


const TourDestinations = () => {

    const [tourDestinations, setTourDestinations] = useState([]);
    useEffect(()=>{
        fetch('https://the-wayfarers-server.herokuapp.com/tour-destinations')
            .then(res => res.json())
            .then(data => setTourDestinations(data));
    }, [])

    const {isLoading} = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="dark" />
    }

    return (
        <>
            <div className="text-light pt-4" id="tourDestinations">
                <h1>Book Your Desired Destination!!</h1>

                <div className="tourDestination-container m-5">
                    {
                        tourDestinations.map(tourDestination => <TourDestination
                            key = {tourDestination._id}
                            tourDestination = {tourDestination}
                        ></TourDestination>)
                    }
                </div>
            </div>
        </>
    );
};

export default TourDestinations;