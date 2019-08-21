import React from "react";
import { Map, CircleMarker, TileLayer, Tooltip } from "react-leaflet";
import cityData from "./CityData";

export default class Maps extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Map
          style={{ width: "100%", height: "450px" }}
          zoom={1}
          center={[-0.09, 51.505]}
        >
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {cityData.city.map((city, k) => {
            return (
              <CircleMarker
                key={k}
                center={[city["coordinates"][1], city["coordinates"][0]]}
                radius={20 * Math.log(city["population"] / 10000000)}
                fillOpacity={0.5}
                stroke={false}
              >
                <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                  <span>
                    {city["name"] +
                      ": " +
                      "Population" +
                      " " +
                      city["population"]}
                  </span>
                </Tooltip>
              </CircleMarker>
            );
          })}
        </Map>
      </div>
    );
  }
}
