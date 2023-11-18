import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Search from "../Screens/Search";
import Fav from "../Screens/Fav";
import Profile from "../Screens/Profile";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Fav" component={Fav} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
