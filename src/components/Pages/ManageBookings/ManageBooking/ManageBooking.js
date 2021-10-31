import React from 'react';

const ManageBooking = (props) => {
    const {displayName, email, destination, travelId, phone, status, _id} = props.booking;

    const handleBooking= id=>{
        const proceed = window.confirm('Are you sure, you want to delete?');
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

    const handleConfirm =id=>{
        const update={status:"Confirmed"};
        const url = `https://the-wayfarers-server.herokuapp.com/booking/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    window.location.reload(false)
                }
            })
    }

    return (
        <>
            <tr>
                <th scope="row"  className="text-light">{travelId}</th>
                <td  className="text-light">{destination}</td>
                <td  className="text-light">{displayName}</td>
                <td  className="text-light">{email}</td>
                <td  className="text-light">{phone}</td>
                <td  className="text-light">{status}</td>
                <td  className="text-light">
                    <button className="btn btn-success"  onClick={() => handleConfirm(_id)}>Confirm Travel</button>
                </td>
                <td  className="text-light">
                    <button className="btn btn-danger"  onClick={() => handleBooking(_id)}>Delete Travel</button>
                </td>
            </tr>
        </>
    );
};

export default ManageBooking;