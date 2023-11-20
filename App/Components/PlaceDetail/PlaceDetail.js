import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import PlaceDetailItem from "./PlaceDetailItem";
import Colors from "../../Shared/Colors";
import GoogleMapView from "../Home/GoogleMapView";
import { TouchableOpacity } from "react-native";
import { Platform } from "react-native";
import { Linking } from "react-native";
import { ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PlaceDetail() {
  const param = useRoute().params;
  const [place, setPlace] = useState([]);

  useEffect(() => {
    setPlace(param.place);
  }, []);

  console.log("Debug 3: ", param);
  console.log("Debug 4: ", place);
  console.log("Debug 5: ", param.place);

  const onDirectionClick = () => {
    const url = Platform.select({
      ios:
        "maps:" +
        place.geometry.location.lat +
        "," +
        place.geometry.location.lng +
        "?q=" +
        place.vicinity,
      android:
        "geo:" +
        place.geometry.location.lat +
        "," +
        place.geometry.location.lng +
        "?q=" +
        place.vicinity,
    });

    Linking.openURL(url);
  };

  return (
    <ScrollView
      style={{
        padding: 10,
        backgroundColor: Colors.white,
        flex: 1,
      }}
    >
      <View style={{ display: "flex", paddingBottom: 10 }}>
        <View
          style={{
            borderBottomWidth: 3,
            borderBottomColor: "#BBBBBB",
            marginVertical: 10,
            alignSelf: "center",
            borderRadius: 20,
            width: 80,
          }}
        />
      </View>
      <PlaceDetailItem
        place={place}
        onDirectionClick={() => onDirectionClick()}
      />
      <GoogleMapView placeList={[param.place]} />

      <TouchableOpacity
        style={{
          backgroundColor: Colors.ratingStar,
          padding: 15,
          alignContent: "center",
          alignItem: "center",
          margin: 8,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          paddingBottom: 15,
        }}
        onPress={() => onDirectionClick()}
      >
        <Text
          style={{
            textAlign: "center",
          }}
        >
          Get Directions using Maps
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
