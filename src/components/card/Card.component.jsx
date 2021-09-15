
// import React, { useState, useEffect } from 'react';
import React from 'react';
import './Card.style.scss'
import { Card, Icon, Image } from 'semantic-ui-react'

const ImageCard = ({ photo, title, date, caption }) => {
    console.log(photo)
    return (
        <Card className="card">
            <Card.Header><span><b>SpaceGuy12:</b></span>  <span className="title">{title}</span></Card.Header>
            <Image src={photo} wrapped ui={false} />
            <Card.Content>
                <Card.Meta>
                    <span className='date'><i>Posted {date}</i></span>
                </Card.Meta>

                <Card.Description>
                    {caption}
                </Card.Description>
            </Card.Content>
        </Card>
    );
};

export default ImageCard;
