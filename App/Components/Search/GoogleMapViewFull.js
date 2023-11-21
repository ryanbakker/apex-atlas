import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserLocationContext } from "./../../Context/UserLocationContext";
import MapView, {
  Marker,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import { Dimensions } from "react-native";
import PlaceMarker from "./../Home/PlaceMarker";

export default function GoogleMapViewFull({ placeList }) {
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
    <View>
      {location ? (
        <MapView
          style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height,
            borderRadius: 10,
          }}
          // DEFAULT for Device Maps / GOOGLE for Google Maps
          provider={PROVIDER_DEFAULT}
          // Set showsUserLocation to false OR remove marker for better UX
          showsUserLocation={true}
          region={mapRegion}
        >
          {placeList.map(
            (item, index) =>
              index <= 4 && <PlaceMarker item={item} key={index} />
          )}
        </MapView>
      ) : null}
    </View>
  );
}
