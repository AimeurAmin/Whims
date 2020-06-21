import React, { useState } from "react";
import InputTextField from "../components/InputTextField";

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function OTP({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.enterCode}>
        Enter 4 digit Code sent to you at{" "}
        <Text style={styles.number}>0678989900</Text>
      </Text>
      <View style={styles.inputContainer}>
        <InputTextField style={styles.inputText} isSecure={false} />
        <InputTextField style={styles.inputText} isSecure={false} />
        <InputTextField style={styles.inputText} isSecure={false} />
        <InputTextField style={styles.inputText} isSecure={false} />
      </View>

      <TouchableOpacity
        style={styles.submitContainer}
        onPress={() => {
          navigation.navigate("ResetPassword");
        }}
      >
        <Text style={styles.verify}>Verify</Text>
      </TouchableOpacity>
      <Text style={styles.codeNotRecieved}>
        Didn’t recieve a verification code?
      </Text>
      <View style={styles.resendCodeContainer}>
        <TouchableOpacity>
          <Text style={styles.resendCode}>Resend code</Text>
        </TouchableOpacity>
        <Text style={styles.resendCode}> | </Text>
        <TouchableOpacity>
          <Text style={styles.resendCode}>Change number</Text>
        </TouchableOpacity>
      </View>
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
    color: "#FFF",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
  verify: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: "#fff",
  },
  enterCode: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    marginBottom: height * 0.01,
  },
  number: {
    color: "#5735CE",
  },
  inputText: {
    flex: 1,
    marginLeft: width * 0.05,
    marginTop: height * 0.02,
    marginBottom: height * 0.07,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
  },
  codeNotRecieved: {
    textAlign: "center",
    marginTop: height * 0.05,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#ABB4BD",
  },
  resendCodeContainer: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    marginTop: height * 0.01,
  },
  resendCode: {
    color: "#5735CE",
  },
});
