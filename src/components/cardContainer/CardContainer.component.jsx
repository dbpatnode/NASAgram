import React, { useState, useEffect } from 'react';
import './CardContainer.style.scss'

import Card from '../Card/Card.component';

const CardContainer = () => {

    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPhotos = () => {
        // 
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&start_date=2017-07-08&end_date=2017-07-10
        `)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setPhotos(data);
                // setLoading(!loading);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchPhotos();
    }, []);


    return (

        <div div >
            {
                photos.map((photo) =>
                    < Card
                        key={photo.date}
                        title={photo.title}
                        date={photo.date}
                        photo={photo.hdurl}
                        caption={photo.explanation}
                    />
                )
            }
        </div>
    );
};


export default CardContainer;