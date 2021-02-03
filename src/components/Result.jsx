import React, { useState } from "react";
import "./Results.css";

export default function Result({
  city,
  state,
  locations,
  setLocations,
  setSearchPressed,
  chosenStop,
  setChosenStop,
  resultRef,
  gasPrices,
}) {
  function renderOilPricesresult(siteObj) {
    console.log("gasPrices", gasPrices);
    const targetPrices = gasPrices.filter(
      (obj) => siteObj.site_id == obj.site_id
    );
    console.log("target", targetPrices);
    return targetPrices.map((x) => (
      <span className="OnePrice">
        <p className="bold">{x.type}</p>
        <p>${x.price}/gallon</p>
      </span>
    ));
  }

  function chosenStopResult() {
    if (chosenStop !== null) {
      const targetLocation = locations.filter((x) => x.key == chosenStop);
      const targetPrices = renderOilPricesresult(targetLocation[0]);
      return targetLocation.map((x) => (
        <>
          {console.log(x.highway)}
          <div ref={resultRef} className="ResultSpan">
            <p>
              {" "}
              <span className="makeBold">Name:</span> {x.key}
            </p>
            <p>
              <span className="makeBold">Address:</span>{" "}
              <p id="address">
                {x.address + ", " + x.city + ", " + x.state + ", " + x.zip}
              </p>
              <span>
                <button
                  className="pure-button"
                  onClick={() => {
                    let address =
                      x.address + ", " + x.city + ", " + x.state + ", " + x.zip;
                    navigator.clipboard.writeText(address);
                    window.open(`https://www.google.com/maps/place/${address}`)
                    // let copyText = document.createElement("textarea");
                    // document.body.appendChild(copyText);
                    // copyText.value = document.getElementById(
                    //   "address"
                    // ).innerText;
                    // copyText.select();
                    // copyText.setSelectionRange(0, 99999);
                    // document.execCommand("copy");
                    // document.body.removeChild(copyText);
                    // alert(`Copied the text: ${copyText.value}`);
                  }}
                >
                  Open in Google Maps
                </button>
              </span>
            </p>
            <p>
              {x.highway ? (
                <span className="makeBold">Highway:{x.highway}</span>
              ) : null}
              {/* <span className="makeBold">Highway:</span> {x.highway} */}
            </p>
            <div className="OilPrices">{targetPrices}</div>
          </div>
        </>
      ));
    }
    return null;
  }

  function stateOrCityResult() {
    if (state && city) {
      const target = locations.filter((x) => x.city == city);
      return target.map((x) => {
        const targetPrices = renderOilPricesresult(x);
        return (
          <>
            {console.log(x.highway)}
            <div ref={resultRef} className="ResultSpan">
              <p>
                {" "}
                <span className="makeBold">Name:</span> {x.key}
              </p>
              <p>
                <span className="makeBold">Address:</span>{" "}
                <p id="address">
                  {x.address + ", " + x.city + ", " + x.state + ", " + x.zip}
                </p>
                <span>
                  <button
                    className="pure-button"
                    onClick={() => {
                      let address =
                        x.address +
                        ", " +
                        x.city +
                        ", " +
                        x.state +
                        ", " +
                        x.zip;
                      navigator.clipboard.writeText(address);
                      console.log(window.scrollY)
                      
                      window.open(`https://www.google.com/maps/place/${address}`)
                      // let copyText = document.createElement("textarea");
                      // document.body.appendChild(copyText);
                      // copyText.value = document.getElementById(
                      //   "address"
                      // ).innerText;
                      // copyText.select();
                      // copyText.setSelectionRange(0, 99999);
                      // document.execCommand("copy");
                      // document.body.removeChild(copyText);
                      // alert(`Copied the text: ${copyText.value}`);
                    }}
                  >
                    Open in Google Maps
                  </button>
                </span>
              </p>
              <p>
                {x.highway ? (
                  <span className="makeBold">Highway:{x.highway}</span>
                ) : null}
                {/* <span className="makeBold">Highway:</span> {x.highway} */}
              </p>
              <div className="OilPrices">{targetPrices}</div>
            </div>
          </>
        );
      });
    } else if (state) {
      const target = locations.filter((x) => x.state == state);
      return target.map((x) => {
        const targetPrices = renderOilPricesresult(x);
        return (
          <>
            {console.log(x.highway)}
            <div ref={resultRef} className="ResultSpan">
              <p>
                {" "}
                <span className="makeBold">Name:</span> {x.key}
              </p>
              <p>
                <span className="makeBold">Address:</span>{" "}
                <p id="address">
                  {x.address + ", " + x.city + ", " + x.state + ", " + x.zip}
                </p>
                <span>
                  <button
                    className="pure-button"
                    onClick={() => {
                      let address =
                        x.address +
                        ", " +
                        x.city +
                        ", " +
                        x.state +
                        ", " +
                        x.zip;
                      navigator.clipboard.writeText(address);
                      console.log(window.scrollY)
                     
                      window.open(`https://www.google.com/maps/place/${address}`)
                      // let copyText = document.createElement("textarea");
                      // document.body.appendChild(copyText);
                      // copyText.value = document.getElementById(
                      //   "address"
                      // ).innerText;
                      // copyText.select();
                      // copyText.setSelectionRange(0, 99999);
                      // document.execCommand("copy");
                      // document.body.removeChild(copyText);
                      // alert(`Copied the text: ${copyText.value}`);
                    }}
                  >
                    Open in Google Maps
                  </button>
                </span>
              </p>
              <p>
                {x.highway ? (
                  <span className="makeBold">Highway:{x.highway}</span>
                ) : null}
                {/* <span className="makeBold">Highway:</span> {x.highway} */}
              </p>
              <div className="OilPrices">{targetPrices}</div>
            </div>
          </>
        );
      });
    }
  }

  return (
    <>
      <h1 id="results">
        Results(
        {state && city
          ? locations.filter((x) => x.city == city).length
          : state
          ? locations.filter((x) => x.state == state).length
          : chosenStop
          ? 1
          : 0}
        ):
      </h1>
      <div>
        {chosenStopResult()}
        {stateOrCityResult()}
      </div>
    </>
  );
}