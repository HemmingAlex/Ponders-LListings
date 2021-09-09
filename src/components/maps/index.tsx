import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import {svgMarker} from "../../assets/svgMarker"

type sizes = {
    height: number
    width?: any
    display?:string
    judstifyContent?:string
    padding?:string
}
type cords = {
    lat:number
    lng:number
}
interface mapProps {
coordinates:cords;
containerStyle?: sizes;
// posts?:any;
}
interface window {
  google:any;
}

function MyComponent(
    
{coordinates, containerStyle} :mapProps) {
const isntMobile = 600; 
const newContainerStyle = {width:"any", height:containerStyle.height}
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAdCORUo2xQf-bNRZtP1lmQDDxrjf3Z_iw"
  })

  const [map, setMap] = React.useState(null)
const Cords = coordinates? coordinates : {lng:-0.08234758796568183,  lat:51.512552003919374};

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new (window as any).google.maps.LatLngBounds(Cords);
  //   const marker = new (window as any).google.maps.Marker({    
  //   position: map.getCenter(),
  //   icon: {
  //     anchor: new (window as any).google.maps.Point(15, 30),
  //     ...svgMarker},
  //   map: map
  // }
  // );
    map.setZoom(16);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={newContainerStyle}
        center={Cords}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
        <Marker title="House" 
//  icon={{
//   path: "M163.079,40.076c0,0,17.421-11.313,20.747-16.964c1.658-2.816,2.828-5.899,2.633-9.966C186.115,5.946,180.845,0,174.39,0  c-6.351,0-11.333,5.285-11.333,5.285S158.36,0,151.724,0C145.27,0,140,5.946,139.655,13.146c-0.194,4.067,0.979,7.162,2.633,9.966  C145.593,28.714,163.079,40.076,163.079,40.076z",
//   fillColor: "black",
//   fillOpacity: 0.9,
//   scale: 2,
//   strokeColor: "gold",
//   strokeWeight: 2,
// }}
        position={Cords}
          
          />
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)