import React from 'react';
import ServicesCardA from './ServicesCardA';
import ServicesCardB from './ServicesCardB';

const Services = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-center text-[#d946ef]'>Our Services</h1><br />
            <h3 className='text-center text-2xl'><b>Services We Provide</b></h3><br /><br />
            <ServicesCardA></ServicesCardA>
            <ServicesCardB></ServicesCardB>
        </div>
    );
};

export default Services;