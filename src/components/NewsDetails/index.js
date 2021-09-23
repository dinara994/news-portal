import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import Spinner from "../Spinner";
import NotFound from "../NotFound";
import './style.css'
import Button from "../Button";


const NewsDetails = () => {
    const [newDet, setNewDet] = useState({})
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios(`https://613f1faee9d92a0017e17474.mockapi.io/news-portal/${id}`)
                setNewDet(data)
            } catch (e) {
                setNotFound(true)
            } finally {
                setLoading(false)
            }
            // .then(({data}) => {setNewDet(data)})
            // .catch(() => {setNotFound(true)})
            // .finally(() => {setLoading(false)})
        }
        fetchData()
    }, [id])
    if (loading) {
        return <Spinner/>
    }
    if (notFound)
        return <NotFound/>
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 '>
                    <img className='my-5' src={newDet.img} alt=""/>
                    <p>Comments:</p>
                    <form action="./" method="post">
                        <label htmlFor="comment">{newDet.author} - {newDet.date}</label>
                        <p>Ну хоть что-то доброе!</p>
                        <div>
                            <textarea className='p-2' name="comment" id="comment" placeholder='Comments...'></textarea>
                        </div>
                        <span>Опубликовать
                        <Button title='Add comment'/>
                        </span>
                    </form>
                </div>
                <div className='col-xl-6 col-lg-12 my-5'>
                    <h3 className='mx-2'>{newDet.title}</h3>
                    <p className='my-3'>{newDet.description}</p>
                    <span className='mt-4'> <b>Author:</b> {newDet.author}</span>
                    <p><b>Date:</b> {newDet.date}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;