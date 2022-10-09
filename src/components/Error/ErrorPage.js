import React from 'react';
import Lottie from "lottie-react";
import err from '../../assets/errorAnimate.json'
const ErrorPage = () => {
    return (
        <div className='w-1/2'>
            <Lottie animationData={err} loop={true} />
        </div>
    );
};

export default ErrorPage;