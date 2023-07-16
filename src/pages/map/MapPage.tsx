import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import '../../styles/Map/MapPage.css'

function MapPage() {
    const [clickedLatLng, setClickedLatLng] = useState(null);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyC77g2ossazn1bq9HOm_sWUlhsmmepS-qk"
    })

    const handleClick = (event) => {
        const latLng = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
          };

        setClickedLatLng(latLng);

        console.log(clickedLatLng)
    }

    const local = { lat: -22.748030, lng: -42.897633 };

    return  (
        <div className='map'>
            {isLoaded ? (
                <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={local}
                zoom={15}
                onClick={handleClick}
              >
                {clickedLatLng ? (
                    <Marker position={clickedLatLng} options={{
                    label: {text: 'teste', className: "map-marker"},
                }} />
                ) : ''}
              </GoogleMap>
            ) : ''}
        </div>
    )
}

export default MapPage;
