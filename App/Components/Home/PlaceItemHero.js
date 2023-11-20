import { View, Text, Image } from "react-native";
import React from "react";
import HorizontalLine from "./HorizontalLine";
import Colors from "../../Shared/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function PlaceItemHero({ place }) {
  return (
    <View style={{ marginTop: 20 }}>
      {place?.photos ? (
        <Image
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo" +
              "?maxwidth=400" +
              "&photo_reference=" +
              place?.photos[0]?.photo_reference +
              "&key=AIzaSyAFM1joLfoiJdZMsnSCBxgAqH_vj3rH1I0",
          }}
          style={{
            width: 100,
            height: 130,
            borderRadius: 10,
          }}
        />
      ) : null}
      <Text
        numberOfLines={2}
        style={{
          fontSize: 18,
          marginBottom: 2,
          fontFamily: "raleway-regular",
        }}
      >
        {place.name}
      </Text>
      <Text
        style={{ fontSize: 16, marginBottom: 5, color: Colors.grey }}
        numberOfLines={2}
      >
        {place.vicinity}
      </Text>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          flexDirection: "row",
        }}
      >
        <Ionicons name="star" size={16} color={Colors.ratingStar} />
        <Text>{place.rating}</Text>
      </View>
      <HorizontalLine />
    </View>
  );
}
