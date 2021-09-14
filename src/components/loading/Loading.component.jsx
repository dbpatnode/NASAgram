import React from 'react';
import ReactLoading from 'react-loading';

import '../Loading/Loading.style.scss'

const Loading = () => (
    <div className="loading-container">
        <ReactLoading type="spin" color="grey" height={100} width={100} />
    </div>
);

export default Loading;