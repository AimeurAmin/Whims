import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Discover from "../screens/Discover";
import Register from "../screens/Signup";
import EmailCheck from "../screens/EmailCheck";
import ForgotPassword from "../screens/ForgotPassword";
import OTP from "../screens/OTP";

const screens = {
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
    screen: Discover,
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
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "#eee" },
    headerTintColor: "#444",
  },
});

export default createAppContainer(HomeStack);
