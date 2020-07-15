import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export default function Splash({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={styles.headerText}>WHIMS</Text>
          <Text style={styles.headerSubText}>FASHION</Text>
        </View>

        <View style={styles.verticalStick}></View>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.footer}>
          <View style={styles.footerText}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.welcomeSubText}>
              Sign up to get started and experience great shopping deals
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.continueText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerTitle: {
    marginTop: 200,
  },

  header: {
    backgroundColor: "#5735CE",

    width: width,
    height: 0.61 * height,
    borderBottomRightRadius: 75,
    justifyContent: "center",
    flexDirection: "row",
  },
  verticalStick: {
    height: 80,
    width: 4,
    backgroundColor: "#fff",
    marginTop: 200,
    marginLeft: 10,
  },
  headerText: {
    color: "#fff",
    fontFamily: "Poppins-Regular",
    fontSize: 50,

    marginBottom: -20,
    // textAlign: "center",
  },
  headerSubText: {
    color: "#fff",
    textAlign: "right",
  },
  footerContainer: {
    height: height * 0.39,
    backgroundColor: "#5735CE",
  },
  footer: {
    height: height * 0.39,
    backgroundColor: "#fff",
    borderTopLeftRadius: 75,
    justifyContent: "center",
  },
  continueButton: {
    backgroundColor: "#000",
    justifyContent: "center",
    height: 70,
    borderTopLeftRadius: 50,
  },
  continueText: {
    color: "#fff",
    textAlign: "center",
  },
  footerText: {
    justifyContent: "center",
  },
  welcomeText: {
    textAlign: "center",
    fontFamily: "Poppins-Bold",
    fontSize: 40,
  },
  welcomeSubText: {
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    marginRight: width * 0.15,
    marginLeft: width * 0.15,
  },
});
