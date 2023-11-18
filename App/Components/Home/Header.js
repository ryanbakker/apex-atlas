import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
} from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";

export default function Header() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Image
        source={require("./../../../assets/logo.png")}
        style={styles.logo}
      />
      <View>
        <TextInput placeholder="Search" style={styles.searchBar} />
      </View>
      <Image
        source={require("./../../../assets/placeholder.jpg")}
        style={styles.userImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: Colors.lightGray,
    padding: 8,
    paddingLeft: 10,
    borderRadius: 50,
    width: Dimensions.get("screen").width * 0.6,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
