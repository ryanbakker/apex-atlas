import {
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";
import BusinessItem from "./BusinessItem";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function BusinessList({ placeList }) {
  const navigation = useNavigation();

  return (
    <View>
      <LinearGradient
        colors={["transparent", Colors.white]}
        style={{
          paddingLeft: 10,
          paddingBottom: 15,
          width: Dimensions.get("screen").width,
        }}
      >
        <FlatList
          data={placeList}
          horizontal={true}
          renderItem={({ item, index }) =>
            index <= 6 && (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("place-detail", {
                    place: item,
                  })
                }
              >
                <BusinessItem place={item} />
              </TouchableOpacity>
            )
          }
        />
      </LinearGradient>
    </View>
  );
}
