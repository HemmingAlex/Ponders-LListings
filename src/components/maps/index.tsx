import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


type sizes = {
    height: number
    width?: number
}
type cords = {
    lat:number
    lng:number
}
interface mapProps {
coordinates:cords;
containerStyle?: sizes;
}


function MyComponent(
    
{coordinates, containerStyle} :mapProps) {
const isntMobile = 600; 

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAdCORUo2xQf-bNRZtP1lmQDDxrjf3Z_iw"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordinates}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)