import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../../hooks/useAuth';
// import { Button, Navbar, NavDropdown, Nav, Form, FormControl, Offcanvas } from 'react-bootstrap';
import logo from '../../../../images/logo.ico';
import UserBookingOffCanvas from '../UserBookingOffCanvas/UserBookingOffCanvas';
import './OffcanvasMenu.css';

const OffcanvasMenu = () => {
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
            <button className="btn btn-outline-secondary navbar-brand" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasRight"> 
            <img className="logo-img" src={logo} alt="" /><span> The WayFarers</span>
            </button>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasLeft" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <span className="mt-2" id="offcanvasRightLabel">
                        
                        <div>
                            <h3 className="text-secondary font-monospace"> <img className="logo-img" src={logo} alt="" /><i> The Wayfarers</i> </h3>
                        </div>
                    
                    </span>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <hr />
                <div className="offcanvas-body">
                    {
                        user.displayName ?
                            <div>
                                <img className="rounded-circle" src={user.photoURL} alt="" />
                                <h3 className="fs-4"> {user.displayName} </h3>
                                <h6>Email: {user.email} </h6>
                            </div>
                        :
                        <h3 className="text-start">
                        Please Log in
                        </h3>
                    }
                    <hr />
                    {
                        user.displayName ?
                        <div>
                            <h4 className="text-start">My Bookings</h4>
                            <hr />
                            <div className="container">
                                <div className="row row-cols-1 row-cols-lg-1 g-2 g-lg-3 d-flex justify-content-center">

                                {
                                    mybookings.map(mybooking=><UserBookingOffCanvas key={mybooking._id} book={mybooking} ></UserBookingOffCanvas>)
                                    }
                    {/* <div className="col">
                        <div className="p-3 border">Row column</div>
                    </div> */}
                </div>
            </div>
                        </div>
                        :
                        <div>
                            <h4 className="text-start">Please Login to check your Bookings!</h4>
                        </div>
                    }
                    <hr />
                    <h3 className="text-start text-secondary font-monospace"><i>Our Goals & Mission:</i></h3>
                    <ul> 
                        <li className="text-start text-secondary font-monospace">We connect community groups and individuals with travel, cultural, and educational experiences to promote personal and professional growth.</li>
                        
                        <li className="text-start text-secondary font-monospace">We work with organizations in the world of travel to broaden their diversity, equity, and inclusion (DEI) efforts, including aligning with best practices for DEI.</li>
                    </ul>
                    <hr />
                    <div className="text-start">
                        <h4>Developer: <a href="https://tonmoy-talukder.netlify.app/">Tonmoy Talukder</a></h4>
                        <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <br /> <a className="text-primary" href="#">https://the-wayfarers.web.app/</a> 
                        </p>
                    </div>
                </div>
            </div>
            {/* <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="start"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
            </Navbar.Offcanvas> */}
        </>
    );
};

export default OffcanvasMenu;