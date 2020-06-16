import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Signup";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home",
      headerShown: false,
      headerStyle: {
        // backgroundColor:'#eee'
      },
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login Page",
      headerShown: false,
      headerStyle: {
        // backgroundColor:'#eee'
      },
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
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "#eee" },
    headerTintColor: "#444",
  },
});

export default createAppContainer(HomeStack);
