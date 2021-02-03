import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// withGoogleMap takes a react component and returns one. We call these "Higher Order Components"
const MyMap = withGoogleMap(
  ({
    onMapLoad,
    onMapClick,
    markers,
    onMarkerRightClick,
    onMarkerClick,
    setChosenStop,
    chosenStop,
    setState,
    setCity
  }) => (
    <GoogleMap
      ref={onMapLoad}
      defaultZoom={5}
      defaultCenter={{ lat: 35.7392, lng: -98.9903 }}
      onClick={onMapClick}
    >
      {console.log(markers)}
      {markers.map((marker) => (
        <Marker
          key={marker.key}
          {...marker}
          onRightClick={() => onMarkerRightClick(marker)}
          onClick={() => {
            setChosenStop(marker.key);
            setState(null);
            setCity(null);
          }}
          // onClick={()=> {onMarkerClick(marker)} }
        />
      ))}
    </GoogleMap>
  )
);

//markers should be array
//marker is an object
//markers = location

// We use object destructuring here to shorten our code
export default function Map({
  markers,
  locations,
  setLocations,
  setChosenStop,
  chosenStop,
  searchPressed,
  state,
  setState,
  setCity
}) {
  return (
    <MyMap
      className="test"
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      onMapLoad={() => {}}
      onMapClick={() => {}}
      markers={markers}
      setChosenStop={setChosenStop}
      chosenStop={chosenStop}
      setState={setState}
      setCity={setCity}

      onMarkerRightClick={() => {
        console.log("you right clicked!");
      }}
      onMarkerClick={(x) => {
        setChosenStop(x.key);
        setState(null);
        setCity(null);
      }}
    />
  );
}

// This looks new? Can you guess what this does?
Map.propTypes = {
  getLocations: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired,
};
