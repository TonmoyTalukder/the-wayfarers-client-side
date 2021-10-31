import React from 'react';
import './Banner.css';
import logo from '../../../../images/logo.ico';

const Banner = () => {
    return (
        <>
            <div className="banner d-flex align-items-end justify-content-center">
            <p className="font-monospace fw-bolder pt-5 fs-4"> <span className="fs-1">The Wayfarers</span> <br /><br /><br /><br /><br /><br /> Founded in 2016, The Wayfarers is focused on <br /> increasing diversity in the world of travel through individual <br /> and community empowerment.</p>
            </div>

            <img className="banner-logo" src={logo} alt="" />
            <h1 className="text-light">The Wayfarers</h1>
        </>
    );
};

export default Banner;