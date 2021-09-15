import React, { useState, useEffect } from 'react';
import './CardContainer.style.scss'
import { Card } from 'semantic-ui-react'
import ImageCard from '../Card/Card.component';
import Loading from '../Loading/Loading.component';

const CardContainer = () => {

    const [nasaData, setNasaData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&count=30`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setNasaData(data);
                setLoading(!loading);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="card-container">
            <Card.Group >
                {
                    loading ?
                        (
                            <Loading />
                        )
                        :
                        nasaData.map((data) =>
                            < ImageCard
                                key={data.date}
                                title={data.title}
                                date={data.date}
                                photo={data.hdurl}
                                caption={data.explanation}
                            />
                        )
                }
            </Card.Group>
        </div>
    );
};


export default CardContainer;