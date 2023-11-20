import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";

export default function PlaceItem({ place }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        marginTop: 20,
      }}
    >
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
            height: 100,
            borderRadius: 10,
          }}
        />
      ) : (
        <Image
          source={require("./../../../assets/placeholder.jpg")}
          style={{ width: 110, height: 110, borderRadius: 15 }}
        />
      )}
      <View
        style={{
          flex: 1,
        }}
      >
        <Text
          numberOfLines={2}
          style={{
            fontSize: 18,
            marginBottom: 5,
            fontFamily: "raleway-semibold",
          }}
        >
          {place.name}
        </Text>
        <Text numberOfLines={2} style={{ fontSize: 15, marginBottom: 5 }}>
          {place.vicinity}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Ionicons name="star" size={16} color={Colors.ratingStar} />
          <Text>{place.rating}</Text>
        </View>
      </View>
    </View>
  );
}
