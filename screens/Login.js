import React, {useState} from "react";
import axios from 'axios'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput
} from "react-native";
import InputTextField from "../components/InputTextField";
import SocialMediaButton from "../components/SocialMediaButton";
import FloatingLabelInput from "../components/FloatingLabelInput";
import Button from "../components/Button";

const config = require('../appconfig.json')
const baseUrl = config.baseUrl

const { width, height } = Dimensions.get("window");

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
    };
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.logoText}>WHIMS</Text>

        <View style={styles.socialMediaButtons}>
          <SocialMediaButton socialM="Facebook" />
          <SocialMediaButton socialM="Google" />
        </View>
        <Text style={styles.or}>or</Text>
        <InputTextField
          style={styles.inputText}
          placeholderText="Email"
          isSecure={false}
          onChangeText={(user) => {
            this.setState({ user });
            console.log("hey");
          }}
        />

        <InputTextField
          style={styles.inputText}
          placeholderText="Password"
          isSecure={true}
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate("ForgotPassword")}>
          <Text style={styles.forgotpassword}>Forgot Password?</Text>

        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Discover")}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity> */}
        <Button
          onPress={() => this.props.navigation.navigate("Discover", { name: "Discover" })}
          ButtonTitle="Login"
          ButtonEnabled={
            this.state.user == "" || this.state.password == "" ? false : true
          }
        />
        <View style={styles.registerContainer}>
          <Text style={styles.noAccount}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Register", { name: "Register" })
            }
          >
            <Text style={styles.register}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.07,
  },
  logoText: {
    fontFamily: "Poppins-Regular",
    fontWeight: "bold",
    alignSelf: "center",
    color: "#5735CE",
    fontSize: 48,
    marginVertical: height * 0.17,
  },
  socialMediaButtons: {
    flexDirection: "row",
    alignSelf: "center",
  },
  or: {
    fontFamily: "Poppins-Regular",
    color: "#ABB4BD",
    fontSize: 18,
    textAlign: "center",
    marginTop: height * 0.02,
  },
  inputText: {
    marginVertical: height * 0.01,
  },
  forgotpassword: {
    fontFamily: "Poppins-Regular",
    color: "#5735CE",
    fontSize: 14,
    marginVertical: height * 0.02,
    textAlign: "right",
  },
  loginButton: {
    width: width * 0.8,
    height: height * 0.07,
    marginTop: width * 0.06,
    backgroundColor: "#5735CE",
    borderRadius: 4,
    justifyContent: "center",
    alignSelf: "center",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: width * 0.07,
  },
  noAccount: {
    marginHorizontal: width * 0.005,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#A4ADB5",
  },
  register: {
    marginHorizontal: width * 0.005,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#5735CE",
  },
});
