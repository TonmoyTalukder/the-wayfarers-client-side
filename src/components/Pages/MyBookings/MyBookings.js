import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import UserBooking from '../Userbooking/UserBooking';

const MyBookings = () => {

    const {user} = useAuth();

    const [myBookings, setMyBookings] = useState([]);

    useEffect(()=>{
        fetch("https://the-wayfarers-server.herokuapp.com/booking")
       .then(res=>res.json())
       .then(data=>setMyBookings(data))
    },[user])

    const mybookings= myBookings.filter(myBooking=>myBooking.email===user.email);

    console.log("mybookings",myBookings);
    console.log("After ",mybookings);

    return (
        <>
            <div className="Container py-5 text-light">
            <h1>My Bookings</h1>
            <div className="py-3"> 
                <img className="rounded-circle" src={user.photoURL} alt="" />
                <h3>All bookings of {user.displayName}</h3>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-4 g-2 g-lg-3 d-flex justify-content-center">

                {
                    mybookings.map(mybooking=><UserBooking key={mybooking._id} book={mybooking} ></UserBooking>)
                }
                    {/* <div className="col">
                        <div className="p-3 border">Row column</div>
                    </div> */}
                </div>
            </div>
        </div>
        </>
    );
};

export default MyBookings;