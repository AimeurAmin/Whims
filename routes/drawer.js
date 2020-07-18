import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// stacks
import tabNavigator from "./tabNavigator";
import Profile from "../screens/Profile";

const HomeStack = createStackNavigator({
  Discover: {
    screen: tabNavigator,
    navigationOptions: {
      headerShown: false,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerShown: false,
    },
  },
});

// drawer navigation options
const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
});

export default createAppContainer(DrawerNavigator);
