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
import Logo from "../components/Logo";

const { width, height } = Dimensions.get("window");

export default function Discover({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleBar}>
        <Image
          style={styles.menuLogo}
          source={require("../assets/icons/menu.png")}
        ></Image>
        <Text style={styles.title}>Discover</Text>
      </View>
    </ScrollView>
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
  },
  title: {
    flex: 1,
    fontFamily: "Poppins-Regular",
    color: "#5735CE",
    fontSize: 24,
    alignSelf: "center",
  },
  menuLogo: {
    marginTop: height * 0.02,
  },
});
