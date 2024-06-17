import { UserLocationContext } from '@/context/UserLocationContext'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api'
import React, { useContext } from 'react'

function GoogleMapView() {
    const { userLocation, setUserLocation } = useContext(UserLocationContext)
    const containerStyle = {
        width: '100%',
        height: '70vh'
    }
    const coordinate = { lat: -6.2231225927217455, lng: 106.64910595154527 }
    return (
        <div>
            <LoadScript
                googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={userLocation}
                    options={{ mapId: '7f5d3b646205028e' }}
                    zoom={12}
                >
                    <MarkerF
                        position={userLocation}
                        // icon={{
                        //     url: '/user-location.png',
                        //     scaledSize: {
                        //         width: 50,
                        //         height: 50
                        //     }
                        // }
                        // }
                    />
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default GoogleMapView