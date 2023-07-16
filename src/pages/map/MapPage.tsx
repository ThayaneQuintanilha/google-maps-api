import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import '../../styles/Map/MapPage.css'

function MapPage() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyC77g2ossazn1bq9HOm_sWUlhsmmepS-qk"
    })

    const local = { lat: -22.748030, lng: -42.897633 };
    
    return  (
        <div className='map'>
            {isLoaded ? (
                <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={local}
                zoom={15}
              >
              </GoogleMap>
            ) : ''}
        </div>
    )
}

export default MapPage;
