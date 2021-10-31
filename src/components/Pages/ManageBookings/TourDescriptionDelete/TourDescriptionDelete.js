import React from 'react';

const TourDescriptionDelete = ({tourDescriptionDelete}) => {
    const{_id, destination, photoURL, location, rating, description} = tourDescriptionDelete;
    return (
        <div>
            <h4>{destination}</h4>
        </div>
    );
};

export default TourDescriptionDelete;