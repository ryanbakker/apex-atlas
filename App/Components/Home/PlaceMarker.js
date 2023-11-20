import { View, Text } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";

export default function PlaceMarker({ item }) {
  return (
    <Marker
      title={item.name}
      coordinate={{
        latitude: item.geometry.location.lat,
        longitude: item.geometry.location.lng,
        latitudeDelta: 0.1,
        longitudeDelta: 0.07,
      }}
    />
    // Can close marker tag and add image inside to have custom marker
  );
}
