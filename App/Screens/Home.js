import { View, Text } from "react-native";
import React from "react";
import Header from "../Components/Home/Header";
import GoogleMapView from "../Components/Home/GoogleMapView";

export default function Home() {
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 50 }}>
      <Header />
      <GoogleMapView />
    </View>
  );
}
