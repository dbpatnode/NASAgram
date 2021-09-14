
// import React, { useState, useEffect } from 'react';
import React from 'react';
import './Card.style.scss'

const Card = ({ photo, title, date, caption }) => {
    return (
        <div>
            <div>
                <img src={photo} alt={title}></img>
            </div>
            <div>
                <p><b>{title} - {date}</b></p>
                <p>{caption}</p>
            </div>
        </div>
    );
};

export default Card;





// const Photo = ({ photo }) => (
//     <Card color="orange">
//         <Image
//             src={photo.img_src}
//             alt="Mars's surface"
//             style={{ height: "200px" }}
//         />
//         <Card.Content>
//             <Card.Header>
//                 {photo.rover.name} - {photo.camera.full_name}
//             </Card.Header>
//             <Card.Meta>{photo.earth_date}</Card.Meta>
//         </Card.Content>
//         <label>
//             <input type="checkbox" />
//             <div className="like-btn-svg icon" />
//         </label>
//     </Card>
// );

// export default Photo;