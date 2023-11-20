import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Home/Header";
import GoogleMapView from "../Components/Home/GoogleMapView";
import CategoryList from "../Components/Home/CategoryList";
import PlaceList from "../Components/Home/PlaceList";
import GlobalApi from "../Services/GlobalApi";
import { ScrollView, View } from "react-native";
import { UserLocationContext } from "../Context/UserLocationContext";

export default function Home() {
  const [placeList, setPlaceList] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      GetNearBySearchPlace("restaurant");
    }
  }, [location]);

  const GetNearBySearchPlace = (value) => {
    if (location && location.coords) {
      GlobalApi.nearByPlace(
        location.coords.latitude,
        location.coords.longitude,
        value
      )
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

  return (
    <ScrollView style={{ padding: 20, backgroundColor: "#fff", flex: 1 }}>
      <Header />
      <GoogleMapView placeList={placeList} />
      <CategoryList
        setSelectedCategory={(value) => GetNearBySearchPlace(value)}
      />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </ScrollView>
  );
}
