import React, {useState} from 'react';
import './style.css'
import {NavLink} from "react-router-dom";
import axios from "axios";
import logo from '../icon/Euronews_2016_Stacked.png'


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState({name: '', phone: '', email: ''})
    const [sentSuccess, setSentSuccess] = useState(false)

    const handleChange = (e) => {
        setUser({...user, [e.target.id]: e.target.value})
        //капируем все старое, название ключа записывается [клик  id] = выдатьт значение
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://613f1faee9d92a0017e17474.mockapi.io/callback', user)
            .then(() => {
                setSentSuccess(true)
                setTimeout(() => {
                    setIsOpen(false)
                setSentSuccess(false)},2000)
            })
    }


    return (
        <header className="header ms-2 me-2 d-flex justify-content-between align-items-center">
            <NavLink  to='/' className="sides logo" >
                <img src={logo} alt=""/>
            </NavLink>
            <div className='d-flex justify-content-center align-items-center me-3'>
                <NavLink exact to='/' className='me-3'>Home</NavLink>
                <NavLink to='/news'  className='me-3'>News</NavLink>
                <NavLink to='/students'  className='me-3'>Students</NavLink>
                <NavLink to='/signUp' className='me-3'>Sign up</NavLink>
                <NavLink to='/signIn' className='me-3'>Sign in</NavLink>
                <button className='header-btn ms-5' onClick={() => setIsOpen(true)}>Регистрация</button>


            <div className='d-flex justify-content-center align-content-center'>
                {
                    isOpen &&
                    <div className='modal-window'>
                        {/*//общий теневой div*/}
                        <div className='modal-content'>
                            {
                               sentSuccess ? 'Успешно отправлено!' :
                                <>
                                    <h3>Заполните платформу</h3>
                                    <form onSubmit={handleSubmit} className='text-aline-center'>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input onChange={handleChange} type="text" className="form-control" id="name" required/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">Phone</label>
                                            <input onChange={handleChange} type="phone" className="form-control" id="phone" required/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                            <input onChange={handleChange} type="email" className="form-control" id="exampleInputEmail1"
                                                   aria-describedby="emailHelp" required/>
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary" onClick={() => setIsOpen(true)}>Submit</button>
                                    </form>
                                </>
                            }
                            <button className='close-modal' onClick={() => setIsOpen(false)}>Х</button>
                        </div>
                    </div>
                }

            </div>
            </div>
        </header>
    );
};

export default Header;