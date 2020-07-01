import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { Ionicons } from "@expo/vector-icons";

import Discover from "../screens/Discover";

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const DiscoverStack = createStackNavigator({
  Discover: {
    screen: Discover,
    navigationOptions: {
      title: " ",
      headerShown: false,
      tabBarLabel: " ",
    },
  },
});

DiscoverStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-home"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};

const TabNavigator = createBottomTabNavigator({
  DiscoverStack,
});

export default createAppContainer(TabNavigator);
