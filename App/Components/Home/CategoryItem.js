import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";

export default function CategoryItem({ category }) {
  return (
    <View
      style={{
        padding: 5,
        alignItems: "center",
        margin: 5,
        width: 112,
        height: 100,
        justifyContent: "center",
        backgroundColor: Colors.lightGrey,
        borderRadius: 6,
      }}
    >
      <Image source={category.icon} style={{ width: 50, height: 50 }} />

      <Text style={{ fontSize: 13 }}>{category.name}</Text>
    </View>
  );
}
