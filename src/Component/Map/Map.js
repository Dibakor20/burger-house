import React from 'react';
import Iframe from '@trendmicro/react-iframe';
import './Map.css'

const Map = () => {
    const destination = "Zindabazar"
    return (
        <>
            <Iframe
              src={`https://maps.google.com/maps?q=${destination},BANGLADESH&t=&z=16&ie=UTF8&iwloc=&output=embed`}
            style={{height: '40vh', width: '100%', borderRadius: '20px'}}
        /> 
        </>
    );
};

export default Map;