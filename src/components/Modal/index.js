import React, {useState} from 'react';
import './style.css'
import axios from "axios";

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [callBack, setCallback] = useState({})

const handleChange = (e) => {
        setCallback({...callBack, [e.target.id] : e.target.value})
}

const handleSubmit = (e) => {
    axios.post('https://613f1faee9d92a0017e17474.mockapi.io/api/', callBack)
        .then(({data}) => setIsOpen(false))
}



    return (
        <>
        <div className='d-flex justify-content-center align-content-center'>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input onChange={handleChange} type="text" className="form-control" id="name"  required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input onChange={handleChange} type="phone" className="form-control" id="phone" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1"  >Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary"  onClick={() => setIsOpen(true)}>Submit</button>
            </form>
        </div>

        {
            isOpen &&
            <div className='modal-window'>
                {/*//общий теневой div*/}
                <div className='modal-content'>
                    <h3>Lorem ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, tenetur.</p>
                    <button className='close-modal' onClick={() => setIsOpen(false)}>Х</button>
                </div>
            </div>
        }
        </>
    );
};

export default Modal;