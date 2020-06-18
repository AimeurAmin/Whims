import React from "react";
import { View, Dimensions, StyleSheet, Image, Text } from "react-native";

const { width, height } = Dimensions.get("window");

const Logo = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.image} resizeMode="contain" />
      <Text>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    height: height * 0.02,
    alignItems: "center",
  },
});

export default Logo;
