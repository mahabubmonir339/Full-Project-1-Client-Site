import React from 'react';
import Clock from "../../assets/icons/clock.svg";
import Marker from "../../assets/icons/marker.svg";
import Phone from "../../assets/icons/phone.svg";

const CardInfo = () => {
    const clock = Clock;
    const marker = Marker;
    const phone = Phone;
    return (
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 px-20">
            <div class="card card-side bg-primary bg-gradient-to-r from-accent to-primary shadow-xl text-white">
                <figure className="pl-5"><img src={clock} alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Opening Hours</h2>
                    <p>24/6</p>
                    <p>Friday Off</p>

                </div>
            </div>
            <div class="card card-side bg-accent shadow-xl text-white">
                <figure className="pl-5"><img src={marker} alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Our Locations</h2>
                    <p>Mohammadpur, Dhaka</p>

                </div>
            </div>
            <div class="card card-side bg-primary bg-gradient-to-r from-primary to-accent shadow-xl text-white">
                <figure className="pl-5"><img src={phone} alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Contact Us Now</h2>
                    <p>+8801763000339</p>

                </div>
            </div>
        </div>
    );
};

export default CardInfo;