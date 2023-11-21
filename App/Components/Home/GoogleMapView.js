import { View, Text, Dimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, {
  Marker,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import { UserLocationContext } from "../../Context/UserLocationContext";
import PlaceMarker from "./PlaceMarker";

export default function GoogleMapView({ placeList }) {
  // Remove defaults if doesn't go to current location
  const [mapRegion, setMapRegion] = useState();

  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0421,
      });
    }
  }, [location]);

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
      <Text
        style={{
          fontSize: 20,
          marginBottom: 10,
        }}
      >
        Top Near by Places
      </Text>
      {location ? (
        <MapView
          style={{
            width: Dimensions.get("screen").width * 0.9,
            height: Dimensions.get("screen").height * 0.23,
            borderRadius: 10,
          }}
          // DEFAULT for Device Maps / GOOGLE for Google Maps
          provider={PROVIDER_DEFAULT}
          pitchEnabled={true}
          // Set showsUserLocation to false OR remove marker for better UX
          showsUserLocation={true}
          region={mapRegion}
        >
          <Marker title="You" coordinate={mapRegion} />

          {placeList.map(
            (item, index) =>
              index <= 4 && <PlaceMarker item={item} key={index} />
          )}
        </MapView>
      ) : null}
    </View>
  );
}
