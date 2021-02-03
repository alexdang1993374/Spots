import React from "react";

export default function Search({
  setSearchPressed,
  locations,
  setLocations,
  state,
  setState,
  city,
  setCity,
  setMarkers,
  resultRef,
  setChosenStop,
}) {
  //render the list of states:

  function getStateList() {
    const states = locations.map((x) => x.state);
    const result = {};
    for (const item of states) {
      if (result.item === undefined || result.item === null) {
        result[item] = item;
      }
    }
    return result;
  }

  function renderStateList() {
    const obj = getStateList();
    const result = [];
    for (const key in obj) {
      result.push(<option value={key}>{key}</option>);
    }
    return result;
  }

  function renderCityList() {
    const result = [];
    if (state) {
      for (const stops of locations) {
        if (stops.state === state)
          result.push(<option value={stops.city}>{stops.city}</option>);
      }
      return result;
    }
  }

  function filterState() {
    if (state && city) setMarkers(locations.filter((x) => x.city === city));
    else if (state) setMarkers(locations.filter((x) => x.state === state));
    setSearchPressed(true);
    setChosenStop(null);
    setTimeout(function() {window.scrollTo(0, 1200)}, 50);
  }

  return (
    <div className="SearchDiv">
      <p className="SearchText">
        Choose
        <span>
          <select
            className="SelectBox"
            onChange={(e) => {
              setState(e.target.value);
            }}
            name="state"
            id="state"
          >
            <option value="">State</option>
            {renderStateList()}
          </select>
          {state ? (
            <>
              <select
                className="SelectBox"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                name="city"
                id="city"
              >
                <option value="">City</option>
                {renderCityList()}
              </select>
            </>
          ) : (
            <> </>
          )}
          <button
            id="searchButton"
            className="pure-button"
            onClick={filterState}
          >
            Search
          </button>
          <button
            className="pure-button"
            onClick={() => {
              setState(null);
              setCity(null);
              setMarkers(locations);
              setSearchPressed(false);
              setChosenStop(null);
            }}
          >
            Clear
          </button>
        </span>
      </p>
    </div>
  );
}