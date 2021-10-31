import React from 'react';

const NotFound = () => {
    return (
        <div className="bg-dark py-3 px-5">
            <div className="bg-dark py-1 px-5">
                <div className="border rounded-3 p-5">
                    <div className="py-5 font-monospace fw-bolder">
                        <h1 className="text-danger fs-1 text-center">404!!!</h1>
                        <h2 className="text-danger text-center">Your Desired Page Is Not Found</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;