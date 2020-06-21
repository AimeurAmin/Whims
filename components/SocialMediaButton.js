import React from "react";
import {
  View,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

const SocialMediaButton = (props) => {
  return (
    <TouchableOpacity style={styles.socialButton}>
      {props.socialM === "Facebook" && (
        <Image
          source={require("../assets/icons/facebook.png")}
          style={styles.socialLogo}
        ></Image>
      )}
      {props.socialM === "Google" && (
        <Image
          source={require("../assets/icons/google.png")}
          style={styles.socialLogo}
        ></Image>
      )}
      <Text style={styles.text}>{props.socialM}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  socialButton: {
    width: width * 0.4,
    flexDirection: "row",
    marginHorizontal: 5,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderColor: "rgba(171,180,189,0.65)",
    borderRadius: 4,
    backgroundColor: "#fff",
    shadowColor: "#5735CE",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
    justifyContent: "center",
  },
  socialLogo: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  text: {
    fontFamily: "Poppins-Regular",
    color: "#000",
  },
});

export default SocialMediaButton;
