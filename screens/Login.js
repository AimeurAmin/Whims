import React, {useState} from "react";
import axios from 'axios'
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

const config = require('../appconfig.json')
const baseUrl = config.baseUrl

const { width, height } = Dimensions.get("window");

const Login = ({ navigation }) => {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = _ => {
    const data = {
      mail: mail,
      password: password
    }
    axios
    .post(
      baseUrl+"/login",
      data,
      {
        headers: {
          //    'api-token': 'xyz',
          //other header fields
        },
      }
    )
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const getMail = _ => {
    setMail(_)
  }

  const getPassword = _ => {
    setPassword(_)
  }

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
        getData = {getMail}
      />
      <InputTextField
        style={styles.inputText}
        placeholderText="Password"
        isSecure={true}
        getData = {getPassword}
      />
      <TouchableOpacity>
        <Text style={styles.forgotpassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => handleSubmit()}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.registerContainer}>
        <Text style={styles.noAccount}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register", { name: "Register" })}
        >
          <Text style={styles.register}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

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
  // inputText: {
  //   width: width * 0.8,
  //   marginHorizontal: width * 0.1,
  //   marginVertical: height * 0.01,
  // },
  forgotpassword: {
    fontFamily: "Poppins-Regular",
    color: "#5735CE",
    fontSize: 14,
    marginVertical: height * 0.02,
    textAlign: "right",
    marginRight: width * 0.1,
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

export default Login;
