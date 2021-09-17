import React, {useEffect, useState} from 'react';
import Carousel from 'react-elastic-carousel';
import axios from "axios";

const Home = () => {
    const [newDet, setNewDet] = useState([])

    useEffect(() => {
        axios('https://613f1faee9d92a0017e17474.mockapi.io/news-portal')
            .then(({data}) => setNewDet(data))
    },[])

    return (
        <div className='container'>
            <div className="main">
                <Carousel className='owl-theme' loop margin={10} nav>
                    {
                        newDet.slice(0,6).map(news =>
                            <div key={news.id}>
                                <img src={news.img} alt=""/>
                                <p>{news.title}</p>
                            </div>

                        )
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default Home;