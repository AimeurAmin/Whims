import React from "react";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";

const { width, height } = Dimensions.get("window");

const Card = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}></View>
      <View style={styles.content}>
        <View>
          <Text style={styles.itemName}>{props.itemName}</Text>
          <Text style={styles.itemCategory}>{props.itemCategory}</Text>
        </View>
        <View>
          <Image
            style={styles.cartIcon}
            source={require("../assets/icons/cart.png")}
          />
          <Image
            style={styles.likeIcon}
            source={require("../assets/icons/icons-like.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.4,
    height: width * 0.7,
  },
  image: {
    borderColor: "#CECECE",
    borderWidth: 1,
    width: "100%",
    height: "80%",
    borderRadius: 20,
    overflow: "hidden",
  },
  content: {
    marginTop: height * 0.01,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemName: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
  itemCategory: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#929292",
  },
  likeIcon: {
    marginTop: 5,
  },
});

export default Card;
