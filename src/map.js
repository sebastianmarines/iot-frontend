import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import "../node_modules/leaflet/dist/leaflet.css";

import HeatmapLayer from "react-leaflet-heatmap-layer";

const addressPoints = [
  [25.650397213389027, -100.2897433836206, "100"],
  [25.650312661514086, -100.28979409938715, "200"],
  [25.64945783658298, -100.289408271385, "20"],
  [25.651440807830383, -100.28898292418025, "5"],
];
class Map extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <LeafletMap center={[25.651009, -100.289685]} zoom={20}>
        <HeatmapLayer
          fitBoundsOnLoad
          fitBoundsOnUpdate
          points={addressPoints}
          longitudeExtractor={(m) => m[1]}
          latitudeExtractor={(m) => m[0]}
          // gradient={gradient}
          intensityExtractor={(m) => parseFloat(m[2])}
          radius={20}
          blur={10}
          max={0.5}
        />

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
      </LeafletMap>
    );
  }
}

export default Map;
