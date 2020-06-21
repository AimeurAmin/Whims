import React, { useState } from "react";
import InputTextField from "../components/InputTextField";

import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function ForgotPassword({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.forgotPassword}>Forgot Password</Text>
      <Text style={styles.forgotPasswordText}>
        Please enter your registered email or mobile to reset your password.
      </Text>

      <InputTextField
        style={styles.inputText}
        placeholderText="Email / Mobile Number"
        isSecure={false}
      />
      <TouchableOpacity
        style={styles.submitContainer}
        onPress={() => navigation.navigate("OTP")}
      >
        <Text style={styles.recoverPassword}>Recover Password</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.1,
    paddingVertical: height * 0.01,
  },

  submitContainer: {
    backgroundColor: "#5735CE",
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
    marginBottom: height * 0.02,
  },
  recoverPassword: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: "#fff",
  },
  forgotPassword: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    marginBottom: height * 0.01,
  },
  forgotPasswordText: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#ABB4BD",
    marginVertical: height * 0.01,
  },
  inputText: {
    marginTop: height * 0.02,
    marginBottom: height * 0.06,
  },
});
