import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Button from "../components/Button";

const { width, height } = Dimensions.get("window");

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.logoText}>WHIMS</Text>
      </View>

      <Button
        onPress={() => navigation.navigate("Login")}
        ButtonTitle="Login"
        ButtonEnabled={true}
      ></Button>

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
    fontFamily: "Poppins-Bold",
    fontSize: 48,
    marginVertical: height * 0.2,
  },

  signup: {
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: "#323643",
  },
  submitContainerGrey: {
    fontSize: 16,
    backgroundColor: "#fff",
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#C5CCD6",
    borderWidth: 0.5,
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 2,
    marginBottom: height * 0.2,
  },
});
