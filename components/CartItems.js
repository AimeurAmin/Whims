import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export default function CartItems() {
  return (
    <View style={styles.container}>
      <Image style={styles.itemPic}></Image>
      <View style={styles.itemInfos}>
        <Text style={styles.itemName}>White Dress</Text>
        <Text style={styles.itemCategory}>Women</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <Text style={styles.price}>15$</Text>
        <TouchableOpacity style={styles.deleteButton}></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 122,
    marginBottom: height * 0.05,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemPic: {
    width: 125,
    height: 120,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#D9DDE2",
  },
  itemInfos: {
    marginLeft: width * 0.05,
  },
  itemName: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
  itemCategory: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },

  //
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  deleteButton: {
    width: 55,
    height: 55,
    borderRadius: 20,
    backgroundColor: "#5735CE",
    alignSelf: "flex-end",
    bottom: 0,
  },
  price: {
    fontFamily: "Poppins-Regular",
    color: "#5735CE",
    fontSize: 18,
    textAlign: "right",
  },
});
