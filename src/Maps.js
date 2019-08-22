import React from "react";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import cityData from "./CityData";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export default class Maps extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h3 className="m-4">Map with Marker using React Leaflet</h3>
        <div className="row">
          <Map
            style={{ width: "100%", height: "450px" }}
            zoom={2.5}
            center={[-0.09, 51.505]}
            attributionControl={false}
          >
            <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {cityData.city.map((city, k) => {
              return (
                <Marker
                  key={k}
                  position={[city["coordinates"][1], city["coordinates"][0]]}
                >
                  <Popup>
                    <span>{city["name"]}</span>
                  </Popup>
                </Marker>
              );
            })}
          </Map>
        </div>
      </div>
    );
  }
}
