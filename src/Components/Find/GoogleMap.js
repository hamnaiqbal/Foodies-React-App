import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{ width: '5px', height: '5px', backgroundColor: 'red' }}>{text}</div>;

const SimpleMap = (props) => {
  // its a copy paste, okkayy, lets do a bit more copy paste hihihi

  const [position, setPosition] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition({ lat: position.coords.latitude, lng: position.coords.longitude });
    });
  }, [position]);


  const defaultProps = {
    center: {
      lat: position.latitude ?? 59.95,
      lng: position.longitude ?? 30.33
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDrF042Og84V0vVqkxN4hOlVcgoqNpTTAc" }}
        center={position}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={position.lat}
          lng={position.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;