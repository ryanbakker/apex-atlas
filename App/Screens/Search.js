import { View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import GoogleMapViewFull from "../Components/Search/GoogleMapViewFull";
import SearchBar from "../Components/Search/SearchBar";
import { UserLocationContext } from "../Context/UserLocationContext";
import GlobalApi from "../Services/GlobalApi";
import BusinessList from "../Components/Search/BusinessList";

export default function Search() {
  const [placeList, setPlaceList] = useState([]);
  const { location } = useContext(UserLocationContext);

  useEffect(() => {
    if (location && location.coords) {
      GetNearBySearchPlace(
        "restaurant",
        location.coords.latitude,
        location.coords.longitude
      );
    }
  }, [location]);

  const GetNearBySearchPlace = (value, latitude, longitude, radius = 1500) => {
    if (location && location.coords) {
      GlobalApi.searchByText(value, latitude, longitude, radius)
        .then((resp) => {
          setPlaceList(resp.data.results);
        })
        .catch((error) => {
          console.error("Error fetching nearByPlace => ", error);
        });
    } else {
      console.warn("Location or location.coords is null");
    }
  };

  console.log("Place List => ", placeList);

  return (
    <View>
      <View
        style={{
          position: "absolute",
          zIndex: 20,
        }}
      >
        <SearchBar
          setSearchText={(value) =>
            GetNearBySearchPlace(
              value,
              location.coords.latitude,
              location.coords.longitude
            )
          }
        />
      </View>

      <GoogleMapViewFull placeList={placeList} />
      <View
        style={{
          position: "absolute",
          zIndex: 20,
          bottom: 0,
        }}
      >
        <BusinessList placeList={placeList} />
      </View>
    </View>
  );
}
