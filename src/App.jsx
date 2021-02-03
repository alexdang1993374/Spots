import React, { useState, useEffect, useRef} from "react";

import logo from "./logo.png";
import "./App.css";
// import Map from "./containers/Map";
import Map from "./components/Map";
import Search from "./components/Search";
import Result from "./components/Result";
import { getMarkers, getOilPrices } from "./utils/";

export default function App() {
  const [locations, setLocations] = useState([]);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [searchPressed, setSearchPressed] = useState(false);
  const [chosenStop, setChosenStop] = useState(null);
  const [markers, setMarkers] = useState(null);
  const [gasPrices, setGasPrices] = useState([]);

  useEffect(() => {
    //get location data
    if (locations.length === 0) getMarkers().then((data) => setLocations(data));
    if (gasPrices.length === 0) getOilPrices().then((data)=> setGasPrices(data));

    window.scrollTo(0,0) 
  });
  useEffect(() => {
    setMarkers(locations);
  }, [locations]);

  const resultRef=useRef(null);

  return (
    <div className="App" style={{ height: "100%" }}>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Search
        locations={locations}
        setSearchPressed={setSearchPressed}
        setLocations={setLocations}
        state={state}
        setState={setState}
        city={city}
        setCity={setCity}
        setMarkers={setMarkers}
        markers={markers}
        resultRef={resultRef}
        setChosenStop={setChosenStop}
      />
      <Map
        id="map"
        markers={markers}
        locations={locations}
        setLocations={setLocations}
        setChosenStop={setChosenStop}
        chosenStop={chosenStop}
        setSearchPressed={setSearchPressed}
        searchPressed={searchPressed}
        state={state}
        setState={setState}
        setCity={setCity}
      />
      {/* <a href="#top">Back to top</a> */}
      <div className="PlaceHolder" ref={resultRef}></div>
      {searchPressed || chosenStop !== null ? (
        <Result
          setSearchPressed={setSearchPressed}
          chosenStop={chosenStop}
          setChosenStop={setChosenStop}
          locations={locations}
          state={state}
          city={city}
          resultRef={resultRef}
          gasPrices={gasPrices}
        />
      ) : (
        <> </>
      )}
    </div>
  );
}
