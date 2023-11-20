import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import PlaceItem from "./PlaceItem";
import PlaceItemHero from "./PlaceItemHero";
import { useNavigation } from "@react-navigation/native";

export default function PlaceList({ placeList }) {
  const navigator = useNavigation();
  const onPlaceClick = (item) => {
    navigator.navigate("place-detail", { place: item });
  };
  return (
    <View>
      <Text
        style={{ fontSize: 20, fontFamily: "raleway-semibold", marginTop: 10 }}
      >
        Found {placeList.length} Places
      </Text>

      <FlatList
        data={placeList}
        renderItem={({ item, index }) =>
          index <= 15 && (
            <TouchableOpacity key={index} onPress={() => onPlaceClick(item)}>
              {index % 4 == 0 ? (
                <PlaceItemHero place={item} />
              ) : (
                <PlaceItem place={item} />
              )}
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
}
