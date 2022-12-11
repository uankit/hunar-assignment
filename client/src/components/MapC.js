import React from "react";
import "../App.css";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Circle,
} from "@react-google-maps/api";
function MapC() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyADffeBLtqueuldH0IqJ8kPhLjn_jJ6Ks8",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={13}
      center={{ lat: 12.944937156355682, lng: 77.67981626969332 }}
      mapContainerClassName="containerStyle"
      mapContainerStyle={{ width: "70%", height: "100%", position: "absolute" }}
    >
      <Marker position={{ lat: 12.944937156355682, lng: 77.67981626969332 }} />
      <Circle
        center={{ lat: 12.944937156355682, lng: 77.67981626969332 }}
        radius={2000}
        visible
      />
    </GoogleMap>
  );
}

export default MapC;
