import React from 'react';
import Treatment from "../../assets/images/treatment.png";

const ServicesCardB = () => {
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex justify-evenly flex-col lg:flex-row px-10">
                    <div><img src={Treatment} class="max-w-sm rounded-lg shadow-2xl" /></div>
                    <div class="text-start">
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCardB;