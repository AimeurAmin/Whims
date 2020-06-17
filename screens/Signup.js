import React, { Component } from "react";
import axios from "axios";
import { View, Text, StyleSheet, Dimensions, Alert } from "react-native";
import InputTextField from "../components/InputTextField";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (name) => {
    const data = {
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.confirmPassword,
    };

    // alert(this.state.email)

    axios
      .post(
        "https://gd1yvadkab.execute-api.us-east-2.amazonaws.com/latest/signup",
        {
          email: this.state.email,
          password: this.state.password,
          confirm_password: this.state.confirmPassword,
        },
        {
          headers: {
            //    'api-token': 'xyz',
            //other header fields
          },
        }
      )
      .then((res) => {
        if (res.data.pool) {
          alert(
            "Thank you for registring to WHIMS \nPlease check your Email to verify your account."
          );
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
    this.setState({ name: _ });
  };
  getMail = (_) => {
    this.setState({ email: _ });
  };
  getPassword = (_) => {
    this.setState({ password: _ });
  };
  getCPassword = (_) => {
    this.setState({ confirmPassword: _ });
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
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => this.handleSubmit(this.state.name)}
        >
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
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
    fontWeight: "bold",
    fontFamily: "Poppins-Regular",
    marginLeft: width * 0.06,
    marginBottom: height * 0.05,
  },
  inputText: {
    width: width * 0.9,
    marginHorizontal: width * 0.05,
    marginTop: height * 0.01,
    marginBottom: height * 0.045,
  },
  loginButton: {
    width: width * 0.8,
    height: height * 0.07,
    marginTop: width * 0.06,
    backgroundColor: "#5735CE",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignSelf: "center",
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    fontWeight: "bold",
    fontSize: 16,
  },
});
