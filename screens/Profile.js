import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import ListItem from "../components/ListItem";

const { width, height } = Dimensions.get("window");

const Items = [
  {
    key: "1",
    itemName: "Edit Profile",
    itemIcon: "edit-icon",
  },
  {
    key: "2",
    itemName: "Shipping Adress",
    itemIcon: "location-icon",
  },
  {
    key: "3",
    itemName: "Wishlist",
    itemIcon: "heart-icon",
  },
  {
    key: "4",
    itemName: "Order History",
    itemIcon: "history-icon",
  },
  {
    key: "5",
    itemName: "Track Order",
    itemIcon: "track-order-icon",
  },
  {
    key: "6",
    itemName: "Cards",
    itemIcon: "cards-icon",
  },
  {
    key: "7",
    itemName: "Notifications",
    itemIcon: "notification-icon",
  },
  {
    key: "8",
    itemName: "Log Out",
    itemIcon: "exit-icon",
  },
];

export default function Profile({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBar}>
        <View>
          <Image
            style={styles.menuLogo}
            source={require("../assets/icons/menu.png")}
          ></Image>
        </View>

        <Text style={styles.title}>Account</Text>
        <View style={styles.menuLogo}>
          <Image
            source={require("../assets/icons/Icons-search-gray.png")}
          ></Image>
        </View>
      </View>

      <View style={styles.accountHeader}>
        <View style={styles.accountImage}>
          <Image style={styles.profileImage} />
        </View>
        <View style={styles.accountInfo}>
          <Text style={styles.accountName}>Chama Marouf</Text>
          <Text style={styles.accountEmail}>cmarouf@cloudsurface.io</Text>
        </View>
      </View>

      <View>
        {
          <FlatList
            style={styles.list}
            showsVerticalScrollIndicator={false}
            data={Items}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <ListItem itemName={item.itemName} icon={item.itemIcon} />
            )}
          />
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.05,
    paddingTop: Platform.OS === "android" ? height * 0.06 : 0,
  },
  titleBar: {
    width: "100%",
    height: height * 0.07,
    marginBottom: height * 0.02,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Poppins-Regular",
    color: "#5735CE",
    fontSize: 24,
    alignSelf: "center",
  },
  menuLogo: {
    marginTop: height * 0.02,
    width: 30,
    height: 20,
  },
  accountHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderColor: "#DCDCDC",
    backgroundColor: "#DCDCDC",
  },
  accountInfo: {
    fontFamily: "Poppins-Regular",
    alignSelf: "center",
  },
  accountName: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },
  accountEmail: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
  },
  list: {
    marginVertical: height * 0.01,
    marginHorizontal: width * 0.02,
  },
});
