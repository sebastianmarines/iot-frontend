import React from "react";
import {Map as LeafletMap, TileLayer, Marker, Popup} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";


import HeatmapLayer from "react-leaflet-heatmap-layer";

const addressPoints = [
  [25.650397213389027, -100.2897433836206, "500"],
  [25.650312661514086, -100.28979409938715, "200"],
  [25.64945783658298, -100.289408271385, "20"],
  [25.651440807830383, -100.28898292418025, "5"],
];

const icon = L.icon({
  iconUrl: "https://img.icons8.com/color/48/000000/marker.png",
  iconSize: [25, 41],
  iconAnchor: [0, 0],
  popupAnchor: [1, -34],
});

export default function Map() {
  return (
    <LeafletMap center={[25.650397213389027, -100.2897433836206]} zoom={17}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <HeatmapLayer
        fitBoundsOnLoad
        fitBoundsOnUpdate
        points={addressPoints}
        longitudeExtractor={m => m[1]}
        latitudeExtractor={m => m[0]}
        intensityExtractor={m => parseFloat(m[2])}
        radius={30}
        blur={10}
        max={0.5}
      />
      {addressPoints.map((point, index) => (
        <Marker key={index} icon={icon} iconSize={[30, 30]} opacity={0} position={[point[0], point[1]]}>
          <Popup>
            <span>{point[2]}</span>
          </Popup>
        </Marker>
      ))}
    </LeafletMap>
  );
}
