import React, { useEffect, useState } from 'react';
import logo from '../../../../images/logo.ico';
import DeleteTourDestination from '../DeleteTourDestination/DeleteTourDestination';

const DeleteDestinationOffcanvas = () => {

    const [tourDestinations, setTourDestinations] = useState([]);
    useEffect(()=>{
        fetch('https://the-wayfarers-server.herokuapp.com/tour-destinations')
            .then(res => res.json())
            .then(data => setTourDestinations(data));
    }, [])

    return (
        <>
            <button className="btn btn-danger fs-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> 
            Want to delete a tour destination?
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <span className="mt-2" id="offcanvasRightLabel">
                    <div>
                            <h3 className="text-secondary font-monospace"> <img className="logo-img" src={logo} alt="" /><i> The Wayfarers</i> </h3>
                        </div>
                    </span>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <hr />
                <hr/>
                <div className="offcanvas-body">
                    <h4 className="text-start text-secondary font-monospace">Current Tour Destinations</h4>
                    
                    <hr />
                    <div className="m-5">
                    {
                        tourDestinations.map(deleteTourDestination => <ol>
                            <DeleteTourDestination
                            key = {deleteTourDestination._id}
                            deleteTourDestination = {deleteTourDestination}
                            ></DeleteTourDestination>
                        </ol>)
                    }
                </div>
                    <hr />
                    <div className="text-start">
                        <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <br /> <a className="text-primary" href="#">https://the-wayfarers.web.app/</a></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteDestinationOffcanvas;