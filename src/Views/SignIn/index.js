import React from 'react';
import Button from "../../components/Button";

const SignIn = () => {
    return (
        <div className='container mt-5'>
            <div className='row main g-3 sign-box'>
                <div className='col d-flex justify-content-center align-items-center '>
                    <div className="box me-3 mt-3">
                        <label htmlFor="inputEmail4" className="form-label" placeholder='E-mail...'>Email:</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="box  mt-3">
                        <label htmlFor="inputPassword4" className="form-label"
                               placeholder='Password...'>Password:</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                </div>
                <Button title='Sign in'/>

            </div>

            <div>
            </div>
        </div>
    );
};

export default SignIn;