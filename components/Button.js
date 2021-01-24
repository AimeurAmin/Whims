import React from "react";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class Button extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={[
            styles.button,
            {
              backgroundColor: this.props.ButtonEnabled ? "#5735CE" : "#D9DDE2",
            },
          ]}
          activeOpacity={0.5}
        >
          <Text style={styles.text}> {this.props.ButtonTitle} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  button: {
    width: width * 0.8,
    height: height * 0.07,
    // marginTop: width * 0.06,
    backgroundColor: "#5735CE",
    borderRadius: 50,
    justifyContent: "center",
    alignSelf: "center",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },

  text: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
  },
});
