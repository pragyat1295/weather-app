import React, { memo, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LeafIcon = L.Icon.extend({
  options: {},
});

const blueIcon = new LeafIcon({
  iconUrl:
    "https://icon-library.com/images/google-map-marker-icon/google-map-marker-icon-24.jpg",
  iconSize: [34, 34],
  iconAnchor: [10, 34],
});

const Map = () => {
  return (
    <MapContainer
      center={[23.2599, 77.4126]}
      zoom={5}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "90vh" }}
    >
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[28.7041, 77.1025]} icon={blueIcon}>
        <Popup>
          <b>City</b>: Delhi
        </Popup>
      </Marker>
      <Marker position={[23.2599, 77.4126]} icon={blueIcon}>
        <Popup>
          <b>City</b>: Bhopal
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default memo(Map);
