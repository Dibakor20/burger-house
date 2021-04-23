import React from 'react';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import InfoCard from './InfoCard';
import Map from '../Map/Map';

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Zindabazar,Sylhet',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+0175329',
        icon: faPhone,
        background: 'primary'
    }
]

const Dashbar = () => {
    return (
        <> 
            <div className="order-form">
            <section className="d-flex justify-content-center">
            <div className="w-100 row">
                {
                    infosData.map(info => <InfoCard info={info} key={info.title}></InfoCard>)
                }
            </div>
        </section>
        <div className="google-map">
            <Map/>
        </div>
        </div>
       
        </>
    );
};

export default Dashbar;