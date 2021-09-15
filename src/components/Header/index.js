import React from 'react';
import './style.css'
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header className="header ms-2 me-2 d-flex justify-content-between align-items-center">
            <NavLink  to='/' className="sides Logo">LOgo</NavLink>
            <div className='d-flex me-3'>
                <NavLink exact to='/' className='me-3'>Home</NavLink>
                <NavLink to='/news'  className='me-3'>News</NavLink>
                <NavLink to='/modal'  className='me-3'>Application</NavLink>
                <NavLink to='/signUp' className='me-3'>Sign up</NavLink>
                <NavLink to='/signIn' className='me-3'>Sign in</NavLink>

            </div>
        </header>
    );
};
export default Header;