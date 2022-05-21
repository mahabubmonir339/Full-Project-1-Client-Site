import React from 'react';
import Chair from "../../assets/images/chair.png";
import CardInfo from './CardInfo';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={Chair} class="max-w-sm rounded-lg shadow-2xl" alt="" srcset="" />
                    <div>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                    </div>
                </div>
            </div>
            <CardInfo></CardInfo>
        </div>
    );
};

export default Banner;