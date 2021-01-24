import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { NavigationActions } from "react-navigation";
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "../components/Icon";

// stacks
import tabNavigator from "./tabNavigator";
import Profile from "../screens/Profile";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#5735CE",
    height: height,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
  },
  header: {
    backgroundColor: "rgba(220, 220, 220, 0.3)",
    height: height * 0.3,
    paddingHorizontal: width * 0.04,
    paddingTop: height * 0.09,
    borderTopRightRadius: 50,
  },
  profilePic: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: "#DCDCDC",
  },
  name: {
    color: "white",
    fontFamily: "Poppins-Bold",
    fontSize: 24,
  },
  email: {
    color: "white",
    fontFamily: "Poppins-Regular",
    fontSize: 14,
  },
  body: {
    flex: 1,

    justifyContent: "flex-start",
    marginVertical: height * 0.05,
  },
  navigationItem: {
    flexDirection: "row",
    marginHorizontal: width * 0.04,
    marginBottom: height * 0.02,
  },
  navigationItemText: {
    color: "white",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
  navigationItemIcon: {
    marginRight: 15,
  },
  footer: {
    marginHorizontal: width * 0.04,
    marginBottom: height * 0.06,
  },
  footerItem: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    opacity: 0.6,
  },
});

const CustomDrawerComponent = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profilePic}></View>
        <Text style={styles.name}>Chama Marouf</Text>
        <Text style={styles.email}>ec_marouf@esi.dz</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.navigationItem}>
          <Icon
            style={styles.navigationItemIcon}
            name="home-icon"
            size={24}
            color="rgba(255, 255, 255, 0.5)"
          />
          <Text style={styles.navigationItemText}>Home</Text>
        </View>
        <View style={styles.navigationItem}>
          <Icon
            style={styles.navigationItemIcon}
            name="Icon_Catalog"
            size={24}
            color="rgba(255, 255, 255, 0.5)"
          />
          <Text style={styles.navigationItemText}>Catalog</Text>
        </View>
        <View style={styles.navigationItem}>
          <Icon
            style={styles.navigationItemIcon}
            name="category"
            size={24}
            color="rgba(255, 255, 255, 0.5)"
          />
          <Text style={styles.navigationItemText}>Category</Text>
        </View>
        <View style={styles.navigationItem}>
          <Icon
            style={styles.navigationItemIcon}
            name="Icon_Collection"
            size={24}
            color="rgba(255, 255, 255, 0.5)"
          />
          <Text style={styles.navigationItemText}>Collection</Text>
        </View>
        <View style={styles.navigationItem}>
          <Icon
            style={styles.navigationItemIcon}
            name="IconProduct"
            size={24}
            color="rgba(255, 255, 255, 0.5)"
          />
          <Text style={styles.navigationItemText}>Products</Text>
        </View>
        <View style={styles.navigationItem}>
          <Icon
            style={styles.navigationItemIcon}
            name="heart-icon1"
            size={20}
            color="rgba(255, 255, 255, 0.5)"
          />
          <Text style={styles.navigationItemText}>Whishlist</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerItem}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerItem}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        backgroundColor: "red",
      },
    },
  },
  {
    drawerPosition: "left",
    drawerBackgroundColor: "transparent",
    overlayColor: "rgba(50, 34, 105, 0.61)",
    drawerWidth: width * 0.8,
    initialRouteName: "Home",
    contentComponent: CustomDrawerComponent,
  }
);

export default createAppContainer(DrawerNavigator);
