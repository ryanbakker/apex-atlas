import { View, Text, Dimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";
import { UserLocationContext } from "../../Context/UserLocationContext";

export default function GoogleMapView() {
  // Remove defaults if doesn't go to current location
  const [mapRegion, setMapRegion] = useState({
    latitude: -36.8485,
    longitude: 174.7633,
    latitudeDelta: 0.19,
    longitudeDelta: 0.07,
    altitude: 1,
  });

  const { location, setLocation } = useContext(UserLocationContext);

  console.log("Apple Location => ", location);

  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.07,
        altitude: location.coords.altitude,
      });
    }
  }, []);

  return (
    <View
      style={{
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get("screen").width * 0.95,
      }}
    >
      <MapView
        style={{
          width: Dimensions.get("screen").width * 0.9,
          height: Dimensions.get("screen").height * 0.23,
          borderRadius: 10,
        }}
        // DEFAULT for Device Maps / GOOGLE for Google Maps
        provider={PROVIDER_DEFAULT}
        showsUserLocation={true}
        region={mapRegion}
      ></MapView>
    </View>
  );
}
