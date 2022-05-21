import React from 'react';
import ServicesCardA from './ServicesCardA';
import ServicesCardB from './ServicesCardB';
import Fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";


const Services = () => {
    const card = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            Description: '',
            img: Fluoride
        },
        {
            _id: 2,
            name: 'Cavity Treatment',
            Description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Whitening Treatment',
            Description: '',
            img: whitening
        },
    ];
    return (
        <div className='mt-20'>
            <div>
                <h1 className='text-center text-[#d946ef]'>Our Services</h1>
                <h3 className='text-center text-2xl'><b>Services We Provide</b></h3><br /><br />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    card.map(service =>
                        <ServicesCardA
                            key={service._id}
                            service={service}
                        ></ServicesCardA>)
                }
            </div>

            <ServicesCardB></ServicesCardB>
        </div>
    );
};

export default Services;