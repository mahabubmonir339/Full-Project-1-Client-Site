import React from 'react';
import Clock from "../../assets/icons/clock.svg";
import Marker from "../../assets/icons/marker.svg";
import Phone from "../../assets/icons/phone.svg";

const CardInfo = () => {
    const clock = Clock;
    const marker = Marker;
    const phone = Phone;
    return (
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div class="card card-side bg-primary shadow-xl">
                <figure><img src={clock} alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>

                </div>
            </div>
            <div class="card card-side bg-accent shadow-xl">
                <figure><img src={marker} alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>

                </div>
            </div>
            <div class="card card-side bg-primary shadow-xl">
                <figure><img src={phone} alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>

                </div>
            </div>
        </div>
    );
};

export default CardInfo;