import axios from "axios";

export async function getMarkers() {
  const { data: locations } = await axios.get("/api/locations");
  // ES6 destructuring & aliasing
  const markers = locations.map((l) => ({
    site_id: l.site_id,
    position: {
      lat: l.latitude,
      lng: l.longitude,
    },
    state: l.state,
    city: l.city,
    highway: l.highway,
    address: l.address,
    zip: l.zip,
    key: l.name,
    defaultAnimation: 2,
  }));
  return markers;
}

export async function getOilPrices() {
  const { data: gasPrices } = await axios.get("/api/gas_prices");
  // ES6 destructuring & aliasing
  const prices = gasPrices.map((l) => ({
    id: l.id,
    site_id: l.site_id,
    type: l.fuel_type,
    price: l.cash_price
  }));
  return prices;
}


