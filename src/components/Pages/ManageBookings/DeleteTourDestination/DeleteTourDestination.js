import React from 'react';
import { Link } from 'react-router-dom';
import './DeleteTourDestination.css';

const DeleteTourDestination = ({deleteTourDestination}) => {
    const{_id, destination, photoURL, location, rating, description} = deleteTourDestination;

    const handleDeleteDestination = id=>{
        console.log(id);
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const url = `http://localhost:5000/tour-destinations/${id}`;
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
        <>
            <div>
                <div className="border border-2 rounded-3 py-3 px-1 custome-style-delete-destination">
                    <h6>{destination}</h6>
                    <h4>{location}</h4>
                    <a href="/delete-travel">
                        <button className="btn btn-danger">Delete The Destination</button>
                    </a>
                    
                    {/* onClick={() => handleDeleteDestination(_id)} */}
                </div>
            </div>
        </>
    );
};

export default DeleteTourDestination;