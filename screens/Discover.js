import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Card from "../components/Card";
import Logo from "../components/Logo";

const { width, height } = Dimensions.get("window");

export default function Discover({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <View>
          <Image
            style={styles.menuLogo}
            source={require("../assets/icons/menu.png")}
          ></Image>
        </View>

        <Text style={styles.title}>Discover</Text>
        <View style={styles.menuLogo}>
          <Image
            source={require("../assets/icons/Icons-search-gray.png")}
          ></Image>
        </View>
      </View>
      <View style={styles.categoriesBar}>
        <Text style={styles.category}>All</Text>
        <Text style={styles.category}>Men</Text>
        <Text style={styles.category}>Women</Text>
        <Text style={styles.category}>Best sellers</Text>
      </View>
      <ScrollView style={styles.catalog}>
        <Card itemName="Woman Dress" itemCategory="Women"></Card>
      </ScrollView>
      <View>
        <Text>Filters</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.1,
  },
  titleBar: {
    width: "100%",
    height: height * 0.07,
    flex: 1,
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
    // backgroundColor: "red",
  },
  categoriesBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: height * 0.02,
  },
  category: {
    fontFamily: "Poppins-Regular",
  },
  catalog: {},
});
