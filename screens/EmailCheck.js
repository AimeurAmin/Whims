import React, { useState } from "react";
import { Linking } from "react-native";

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

export default function EmailCheck({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.mailImage}
        source={require("../assets/images/Mail.png")}
      />

      <Text style={styles.checkEmail}>Check your Email</Text>
      <Text style={styles.checkEmailText}>
        We have sent you a verification link on your email address.
      </Text>

      <TouchableOpacity
        style={styles.submitContainer}
        onPress={(_) => {
          Linking.openURL("mailto:support@example.com");
        }}
      >
        <Text style={styles.goToEmail}>Go to Email</Text>
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
  mailImage: {
    alignSelf: "center",
    marginTop: height * 0.2,
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
  goToEmail: {
    fontFamily: "Poppins-Regular",
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
  checkEmail: {
    alignSelf: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: height * 0.02,
  },
  checkEmailText: {
    alignSelf: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#ABB4BD",
    textAlign: "center",
    marginVertical: height * 0.02,
  },
});
