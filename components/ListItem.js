import React from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableNativeFeedbackComponent,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const ListItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          <Image style={styles.listItemIcon} source={props.icon}></Image>
        </View>

        <Text style={styles.itemName}>{props.itemName}</Text>
      </View>
      <TouchableOpacity>
        <Image source={require("../assets/icons/right_arrow.png")}></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: height * 0.08,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#5735CE",
    opacity: 0.2,
    justifyContent: "center",
  },
  itemContainer: {
    flexDirection: "row",
  },
  itemName: {
    alignSelf: "center",
    marginLeft: 5,
  },
  listItemIcon: {
    height: 20,
    width: 20,
    alignSelf: "center",
    zIndex: 9,
  },
});

export default ListItem;
