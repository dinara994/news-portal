import React from 'react';
import './style.css'
import Button from "../../components/Button";
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <div className='sign-up d-flex justify-content-center align-items-center mt-5'>
           <h3>Creat a new account?</h3>
            <p>Already have a account ? <Link to='/signIn' className='text-decoration-underline'>Sign in</Link></p>
            <div className="row main g-3 sign-box">
                <div className="col">
                    <div className='box d-flex justify-content-between align-items-center mb-3'>
                        <div>
                            <label htmlFor="first">First name: </label>
                            <input type="text" id='first' className="form-control me-2" placeholder="First name"
                                   aria-label="First name"/>
                        </div>
                        <div>
                            <label htmlFor="last">Last name:</label>
                            <input type="text" id='last' className="form-control" placeholder="Last name"
                                   aria-label="Last name"/>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <div className='mt-4 d-flex justify-content-between align-items-center'>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">Password:</label>
                                <input type="password" className="form-control" id="inputPassword4"/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">Password:</label>
                                <input type="password" className="form-control" id="inputPassword4"/>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <label htmlFor="inputEmail4" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="inputEmail4"/>
                        </div>
                    </div>
                    <Button />
                </div>

            </div>
        </div>
    );
};

export default SignUp;