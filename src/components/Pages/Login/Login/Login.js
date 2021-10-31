import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import Google from '../../../../images/google.png';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    // console.log('Came from',location.state?.from);
    const [isLoading, setIsLoading] = useState(true);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
        .finally(() => setIsLoading(false));
    }

    return (
        <>
            <div className=" container text-light">
                <h1>Please Login</h1>
                <hr />
                <hr />
                <h4 className="font-monospace"><i>Please Login with Your Google Account</i></h4>
                <button
                    onClick={handleGoogleLogin} 
                    className="btn bg-transparent google rounded-circle"
                    ><img src={Google} alt="" />
                </button>
                <hr />
                <hr />
            </div>
        </>
    );
};

export default Login;