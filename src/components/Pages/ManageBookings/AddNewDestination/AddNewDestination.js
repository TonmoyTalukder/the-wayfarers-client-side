import React, { useRef } from 'react';

const AddNewDestination = () => {

    const destinationRef=useRef();
    const photoURLRef=useRef()
    const locationRef=useRef()
    const ratingRef=useRef()
    const travelFareRef=useRef()
    const descriptionRef=useRef()
    const exploreRef=useRef()

    const handleAddPack=e=>{
        const destination=destinationRef.current.value;
        const photoURL=photoURLRef.current.value;
        const location=locationRef.current.value;
        const rating=ratingRef.current.value;
        const travelFare=travelFareRef.current.value;
        const description=descriptionRef.current.value;
        const explore=exploreRef.current.value;

        const newTourDestination={destination:destination, photoURL:photoURL, location:location, rating:rating, travelFare:travelFare, description:description, explore:explore};

        fetch('https://the-wayfarers-server.herokuapp.com/packages', {
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
            
        </>
    );
};

export default AddNewDestination;