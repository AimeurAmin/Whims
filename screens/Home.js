import React, { useState } from "react";
// import { useFonts } from '@use-expo/font';
import * as Fonts from "expo-font";
import { AppLoading } from "expo";
import { LinearGradient } from "expo-linear-gradient";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.logoText}>WHIMS</Text>
      </View>
      <TouchableOpacity
        style={styles.submitContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.submitContainerGrey}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.signup}>Signup</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.1,
    paddingVertical: height * 0.1,
  },
  logoText: {
    alignSelf: "center",
    color: "#5735CE",
    fontFamily: "Poppins-Regular",
    fontSize: 48,
    marginVertical: height * 0.2,
  },
  text: {
    fontFamily: "Poppins-Regular",
    color: "#5735CE",
  },
  login: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
  submitContainer: {
    backgroundColor: "#5735CE",
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    color: "#FFF",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
  signup: {
    fontWeight: "600",
    fontSize: 16,
    color: "#323643",
  },
  submitContainerGrey: {
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: height * 0.04,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#C5CCD6",
    borderWidth: 0.5,
  },
});
