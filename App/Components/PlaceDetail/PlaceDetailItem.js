import { View, Text } from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Share from "../../Services/Share";

export default function PlaceDetailItem({ place, onDirectionClick }) {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 22 }}>{place.name}</Text>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          marginTop: 5,
          flexDirection: "row",
        }}
      >
        <Ionicons name="star" size={16} color={Colors.ratingStar} />
        <Text>{place.rating}</Text>
      </View>
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
            width: "100%",
            height: 160,
            borderRadius: 15,
            marginTop: 10,
          }}
        />
      ) : null}

      <Text
        style={{
          fontSize: 16,
          marginTop: 10,
          color: Colors.grey,
        }}
        numberOfLines={2}
      >
        {place.vicinity ? place.vicinity : place.formatted_address}
      </Text>
      {place?.opening_hours ? (
        <Text
          style={{
            marginTop: 6,
          }}
        >
          {place?.opening_hours?.open_now == true ? "(Open)" : "(Closed)"}
        </Text>
      ) : null}
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          display: "flex",
          gap: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => onDirectionClick()}
          style={{
            direction: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: Colors.GRAY,
            width: 110,
            padding: 3,
            borderRadius: 40,
            justifyContent: "center",
          }}
        >
          <Ionicons name="navigate-circle-outline" size={24} color="black" />
          <Text style={{ fontSize: 16 }}>Direction</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Share.SharePlace(place)}
          style={{
            direction: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: Colors.GRAY,
            width: 90,
            padding: 3,
            borderRadius: 40,
            justifyContent: "center",
          }}
        >
          <Ionicons name="md-share-outline" size={24} color="black" />
          <Text style={{ fontSize: 16 }}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
