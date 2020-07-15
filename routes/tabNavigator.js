import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Discover from "../screens/Discover";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import Filter from "../screens/Filter";

import { Ionicons } from "@expo/vector-icons";

const activeColor = "#5735CE";
const inactiveColor = "#b8bece";

const HomeStack = createStackNavigator({
  Home: {
    screen: Discover,
    navigationOptions: {
      headerShown: false,
    },
  },
  Filter: {
    screen: Filter,
    navigationOptions: {
      headerShown: false,
    },
  },
});

HomeStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;
  return {
    tabBarVisible,
    tabBarLabel: " ",
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name="ios-home"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    ),
  };
};

const CartStack = createStackNavigator({
  Cart: {
    screen: Cart,
    navigationOptions: {
      headerShown: false,
    },
  },
});

CartStack.navigationOptions = {
  tabBarLabel: " ",

  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-cart"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerShown: false,
    },
  },
});

ProfileStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-person"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      headerShown: false,
    },
  },
});

SettingsStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-settings"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  CartStack,
  ProfileStack,
  SettingsStack,
});

export default createAppContainer(TabNavigator);
