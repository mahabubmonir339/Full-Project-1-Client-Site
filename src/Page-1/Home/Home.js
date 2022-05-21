import React from 'react';
import AppointmentHome from './AppointmentHome';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-20'>
            <Banner></Banner>
            <Services></Services>
            <AppointmentHome></AppointmentHome>
        </div>
    );
};

export default Home;