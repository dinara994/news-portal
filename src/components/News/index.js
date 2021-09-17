import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import './style.css'
import Spinner from "../Spinner";


const News = () => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        axios('https://613f1faee9d92a0017e17474.mockapi.io/news-portal')
            .then(({data}) => {
                setNews(data)
           setLoading(false)
            })
    }, [])
    if (loading) {
        return <Spinner/>
    }

    return (

        <div className='container'>

            <div className='row'>

                  {
                      news.map(el =>
                          <div key={el.id} className='col-md-4 mt-5'>
                              <Link to={`/news/${el.id}`}>
                              <img src={el.img} alt="" className='img-news' width='400' height='200'/>
                              <p>{el.title}</p>
                              </Link>

                          </div>)
                  }


            </div>
        </div>
    );
};

export default News;