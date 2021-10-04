// this will return the api call result as json file

import React from 'react';
import './ApiResult.css'

const ApiResult = (props) => {
    console.log(props)
    const {temp,humidity}=props.weather
    return (
        <div  className="result">
            <h1>hi AMi result dekhabo</h1>
            <h1> {temp}  </h1>
            <h1> {humidity}  </h1>
        </div>
    );
};

export default ApiResult;