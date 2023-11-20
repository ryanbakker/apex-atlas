import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";

export default function BusinessItem({ place }) {
  return (
    <View
      style={{
        width: 140,
        backgroundColor: Colors.white,
        borderRadius: 10,
        padding: 10,
        margin: 5,
        marginBottom: 75,
        elevation: 0.4,
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
            width: 120,
            height: 80,
            borderRadius: 5,
          }}
        />
      ) : (
        <Image
          source={require("./../../../assets/placeholder.jpg")}
          style={{
            width: 130,
            height: 100,
            borderRadius: 5,
          }}
        />
      )}
      <Text
        numberOfLines={2}
        style={{
          fontSize: 16,
          marginTop: 5,
        }}
      >
        {place.name}
      </Text>
      <Text
        numberOfLines={2}
        style={{
          fontSize: 13,
          marginTop: 5,
          color: Colors.grey,
        }}
      >
        {place.vicinity ? place.vicinity : place.formatted_address}
      </Text>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          marginTop: 5,
          flexDirection: "row",
          marginBottom: -5,
        }}
      >
        <Ionicons name="star" size={16} color={Colors.ratingStar} />
        <Text>{place.rating}</Text>
      </View>
    </View>
  );
}
