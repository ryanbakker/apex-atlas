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

  const onDirectionClick = () => {
    const { lat, lng, vicinity } = place.geometry.location;
    const name = place.name;

    // Open Waze
    const wazeUrl = `waze://?ll=${lat},${lng}&navigate=yes`;

    // Open Apple Maps with default mode set to driving/traffic
    const appleMapsUrl = `maps://?q=${name}@${vicinity}&ll=${lat},${lng}&dirflg=d`;

    // Open Google Maps
    const googleMapsUrl = `comgooglemaps://?q=${lat},${lng}&center=${lat},${lng}&zoom=14&views=traffic&name=${name}`;

    // Attempt to open Waze first, then Apple Maps, and finally Google Maps
    Linking.canOpenURL(wazeUrl)
      .then((canOpenWaze) => {
        if (canOpenWaze) {
          Linking.openURL(wazeUrl);
        } else {
          Linking.canOpenURL(appleMapsUrl)
            .then((canOpenAppleMaps) => {
              if (canOpenAppleMaps) {
                Linking.openURL(appleMapsUrl);
              } else {
                Linking.openURL(googleMapsUrl); // Fallback to Google Maps if neither Waze nor Apple Maps is available
              }
            })
            .catch(() => {
              // Handle errors
              Linking.openURL(googleMapsUrl); // Fallback to Google Maps on error
            });
        }
      })
      .catch(() => {
        // Handle errors
        Linking.openURL(googleMapsUrl); // Fallback to Google Maps on error
      });
  };

  return (
    <View
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
      <ScrollView>
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
    </View>
  );
}
