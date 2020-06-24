import React, { useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import InputTextField from "../components/InputTextField";
import SocialMediaButton from "../components/SocialMediaButton";
import Button from "../components/Button";

const config = require("../appconfig.json");
const baseUrl = config.baseUrl;

const { width, height } = Dimensions.get("window");

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailHasError: false,
      passwordHasError: false,
      passwordHasError: false,
    };
  }
  go = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(this.state.email) === true) {
      alert("valid");
    } else {
      alert();
    }
  };

  emailChangeHandler = (_) => {
    this.setState({ email: _ });
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    if (expression.test(String(this.state.email).toLowerCase())) {
      this.setState({
        emailHasError: !expression.test(String(this.state.email).toLowerCase()),
      });
    } else {
      setTimeout(
        () =>
          this.setState({
            emailHasError: !expression.test(
              String(this.state.email).toLowerCase()
            ),
          }),
        2000
      );
    }
  };

  passwordChangeHandler = (_) => {
    this.setState({ password: _ });
  };

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
          placeholderText="Email"
          isSecure={false}
          getData={this.emailChangeHandler}
          hasErrors={this.state.emailHasError}
          errorMessage="email Invalid"
        />

        <InputTextField
          placeholderText="Password"
          isSecure={true}
          getData={this.passwordChangeHandler}
          hasErrors={this.state.passwordHasError}
          errorMessage="Password invalid"
        />

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("ForgotPassword")}
        >
          <Text style={styles.forgotpassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <Button
          onPress={() => {
            if (!this.state.emailHasError || !this.state.passwordHasError) {
              this.props.navigation.navigate("Discover", {
                name: "Discover",
              });
            }
          }}
          ButtonTitle="Login"
          ButtonEnabled={
            this.state.email == "" || this.state.password == "" ? false : true
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

  forgotpassword: {
    fontFamily: "Poppins-Regular",
    color: "#5735CE",
    fontSize: 14,
    marginVertical: height * 0.02,
    textAlign: "right",
  },

  registerContainer: {
    flexDirection: "row",
    alignSelf: "center",
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
