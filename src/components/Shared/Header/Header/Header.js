import React from 'react';
// import { Button, Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
// // import { Offcanvas, NavDropdown, Form, FormControl } from 'react-bootstrap';
import OffcanvasMenu from '../OffcanvasMenu/OffcanvasMenu';
import logo from '../../../../images/logo.ico';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <div>
                <h1 className="text-secondary font-monospace"> <img className="upper-logo-img" src={logo} alt="" /><i>The Wayfarers</i> </h1>
            </div>
            <div className="container-fluid bg-dark m-0">
                <div className="row">
                    <div className="col-lg-2 col-sm-12 bg-dark align-self-center"><OffcanvasMenu></OffcanvasMenu></div>
                    <div className="col-lg-10 col-sm-12 bg-dark flex-fill">
                        <nav className="navbar navbar-expand-lg navbar-dark">
                            <div className="container-fluid">
                                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Nav.Link as={HashLink} className="nav-link fs-5" aria-current="page" to="/home">Home</Nav.Link>
                                        </li>
                                        <li className="nav-item">
                                            <Nav.Link as={HashLink} className="nav-link fs-5" to="/mybookings">My Bookings</Nav.Link>
                                        </li>
                                        <li className="nav-item">
                                            {/* <Nav.Link as={HashLink} className="nav-link fs-5" to="/managebookings">Manage Bookings</Nav.Link> */}
                                            <button className="btn btn-bg fs-5"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">Mange Bookings</button>
                                        </li>
                                        <li className="nav-item">
                                            <Nav.Link as={HashLink} className="nav-link fs-5" to="/about">About Us</Nav.Link>
                                        </li>
                                        <li className="nav-item">
                                            <Nav.Link as={HashLink} className="nav-link fs-5" to="/contact">Contact Us</Nav.Link>
                                        </li>
                                    </ul>
                                    <ul className="d-flex">
                                        <li className="navbar-nav mt-lg-2">
                                            {
                                                user.displayName ?
                                                    <span className="text-light font-monospace">
                                                        <img className="rounded-circle header-dp" src={user.photoURL} alt="" />
                                                        <b className="fs-4"> {user.displayName} </b>
                                                        <button className="btn btn-secondary text-white fw-bolder font-monospace" onClick={logOut}>Log Out</button>
                                                    </span>
                                                    :
                                                <Nav.Link as={HashLink} className="nav-link fs-5" to="/login">Login</Nav.Link>}
                                        </li>
                                    </ul>

                                    {/* -- Modal -- */}
                                    <div className="modal fade text-dark" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel">Are you Admin?</h5>
                                                        <button type="button" className="btn-close btn btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <i>
                                                            <span className="text-danger">
                                                                <b>
                                                                Becarefull! It will redirect you to the admin area.
                                                                </b>
                                                            </span>
                                                            <br />
                                                            <span className="text-muted">
                                                            Later you may need an admin passkey to enter here. That process is under development.
                                                            </span>
                                                        </i>
                                                    </div>
                                                    <div className="modal-footer d-flex align-items-center">
                                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                                        {/* <input type="submit"className="btn btn-secondary" value="Confirm!" /> */}
                                                        <a href="/managebookings">
                                                            <button type="button" className="btn btn-secondary">Confirm!</button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;