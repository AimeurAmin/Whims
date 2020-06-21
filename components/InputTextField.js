import React from "react";
import { View, Text, TextInput, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const InputTextField = (props) => {
  return (
    <View style={props.style}>
      <TextInput
        placeholder={props.placeholderText}
        secureTextEntry={props.isSecure}
        style={styles.input}
        onChangeText={(_) => props.getData(_)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: 10,
    color: "#1D2029",
    fontSize: width * 0.036,
    borderBottomColor: "#D8D8D8",
    borderBottomWidth: 1,
    fontFamily: "Poppins-Regular",
    fontWeight: "bold",
  },
});

export default InputTextField;
