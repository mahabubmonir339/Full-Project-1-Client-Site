import React from 'react';
import Fluoride from "../../assets/images/fluoride.png"
import cavity from "../../assets/images/cavity.png"
import whitening from "../../assets/images/whitening.png"

const ServicesCardA = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-20'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={Fluoride} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Fluoride Treatment</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={cavity} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Cavity Filling</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={whitening} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Teeth Whitening</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
        </div>
    );
};

export default ServicesCardA;