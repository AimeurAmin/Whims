import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Discover from "../screens/Discover";
import Splash from "../screens/Splash";
import Register from "../screens/Signup";
import EmailCheck from "../screens/EmailCheck";
import ForgotPassword from "../screens/ForgotPassword";
import OTP from "../screens/OTP";
import ResetPassword from "../screens/ResetPassword";
import TabNavigator from "./tabNavigator";

const screens = {
  Splash: {
    screen: Splash,
    navigationOptions: {
      title: "Home",
      headerShown: false,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home",
      headerShown: false,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login Page",
      headerShown: false,
    },
  },
  Discover: {
    screen: TabNavigator,
    navigationOptions: {
      title: "Discover Page",
      headerShown: false,
    },
  },
  Register: {
    screen: Register,

    navigationOptions: {
      title: " ",
      headerStyle: {
        backgroundColor: "#fff",
        shadowOpacity: 0,
        elevation: 0,
      },
    },
  },
  EmailCheck: {
    screen: EmailCheck,
    navigationOptions: {
      title: " ",
      headerShown: false,
    },
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      title: " ",
      headerStyle: {
        backgroundColor: "#fff",
        shadowOpacity: 0,
        elevation: 0,
      },
    },
  },
  OTP: {
    screen: OTP,
    navigationOptions: {
      title: " ",
      headerStyle: {
        backgroundColor: "#fff",
        shadowOpacity: 0,
        elevation: 0,
      },
    },
  },
  ResetPassword: {
    screen: ResetPassword,
    navigationOptions: {
      title: " ",
      headerStyle: {
        backgroundColor: "#fff",
        shadowOpacity: 0,
        elevation: 0,
      },
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "#eee" },
    headerTintColor: "#444",
  },
});

export default createAppContainer(HomeStack);
