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
import Icon from "../components/Icon";

const { width, height } = Dimensions.get("window");

const ListItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          {/* <Image style={styles.listItemIcon} source={props.icon}></Image> */}
          <Icon
            style={styles.listItemIcon}
            name={props.icon}
            size={20}
            color="rgba(87, 53, 206, 0.24)"
          />
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
    backgroundColor: "rgba(87, 53, 206, 0.24)",
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
    alignSelf: "center",
    opacity: 1,
  },
});

export default ListItem;
