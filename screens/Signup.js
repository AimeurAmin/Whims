import React, { Component } from "react";
import axios from "axios";
import { View, Text, StyleSheet, Dimensions, Alert } from "react-native";
import InputTextField from "../components/InputTextField";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import Button from "../components/Button";
import { withNavigation } from "react-navigation";
const { width, height } = Dimensions.get("window");
const config = require("../appconfig.json");

const baseUrl = config.baseUrl;

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      password: "",
      confirm_password: "",
      mobile_number: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = () => {
    const data = {
      full_name: this.state.fullName,
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.confirm_password,
      mobile_number: this.state.mobile_number,
    };

    console.log(data);
    axios
      .post(baseUrl + "/signup", data, {
        headers: {
          //    'api-token': 'xyz',
          //other header fields
        },
      })
      .then((res) => {
        if (res.data.pool) {
          this.props.navigation.navigate("EmailCheck");
        } else {
          if (res.data.code === "InvalidParameterException") {
            alert("Please Fill the required information");
          } else {
            if (res.data.code === "UsernameExistsException") {
              alert("This email address already has a whims account!");
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getName = (_) => {
    this.setState({ fullName: _ });
  };
  getMail = (_) => {
    this.setState({ email: _ });
  };
  getPassword = (_) => {
    this.setState({ password: _ });
  };
  getCPassword = (_) => {
    this.setState({ confirm_password: _ });
  };
  getMobile = (_) => {
    this.setState({ mobile_number: _ });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.titleSignup}>Register to WHIMS</Text>
        <InputTextField
          style={styles.inputText}
          placeholderText="Full Name"
          isSecure={false}
          getData={this.getName}
        />
        <InputTextField
          style={styles.inputText}
          placeholderText="Email"
          isSecure={false}
          getData={this.getMail}
        />
        <InputTextField
          style={styles.inputText}
          placeholderText="Mobile Number"
          isSecure={false}
          getData={this.getMobile}
        />
        <InputTextField
          style={styles.inputText}
          placeholderText="Password"
          isSecure={true}
          getData={this.getPassword}
        />
        <InputTextField
          style={styles.inputText}
          placeholderText="Confirm Password"
          isSecure={true}
          getData={this.getCPassword}
        />

        <Button
          onPress={() => {
            if (!this.state.emailHasError || !this.state.passwordHasError) {
              this.handleSubmit();
            }
          }}
          ButtonTitle="Register"
          ButtonEnabled={
            this.state.fullName == "" ||
            this.state.email == "" ||
            this.state.mobile_number == "" ||
            this.state.password == "" ||
            this.state.confirm_password == ""
              ? false
              : true
          }
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: "#fff",
  },
  titleSignup: {
    fontSize: 23,
    fontFamily: "Poppins-Bold",
    marginLeft: width * 0.06,
    marginBottom: height * 0.05,
  },
  inputText: {
    width: width * 0.9,
    marginHorizontal: width * 0.05,
    marginTop: height * 0.01,
    //  marginBottom: height * 0.045,
  },
  registerButton: {
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
});
