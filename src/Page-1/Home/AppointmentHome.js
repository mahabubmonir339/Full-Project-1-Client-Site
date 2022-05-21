import React from 'react';
import Doctor from "../../assets/images/doctor.png";
import Appointment from "../../assets/images/appointment.png";

const AppointmentHome = () => {
    return (
        <section
            style={{
                background: `url(${Appointment})`
            }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-130px] ' src={Doctor} alt="" />
            </div>
            <div className='flex-1 justify-center'>
                <h3 className='text-xl text-primary font-bold'>Appoinment</h3>
                <h2 className='text-3xl py-5 text-white'>Make a Appointment To Day</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora, beatae! Quod cum voluptatem eligendi architecto voluptatibus accusamus blanditiis
                    mollitia rerum!
                </p><br />
                <button class="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
            </div>
        </section>
    );
};

export default AppointmentHome;