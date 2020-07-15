import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import DropDownList from "../components/DropDownList";

const { width, height } = Dimensions.get("window");

export default function Filter({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBar}>
        <View>
          <Image
            style={styles.menuLogo}
            source={require("../assets/icons/menu.png")}
          ></Image>
        </View>

        <Text style={styles.title}>Filter</Text>
        <View style={styles.menuLogo}>
          <Image
            source={require("../assets/icons/Icons-search-gray.png")}
          ></Image>
        </View>
      </View>
      <View style={styles.categoriesBar}>
        <Text style={styles.category}>All</Text>
        <Text style={styles.category}>Men</Text>
        <Text style={styles.category}>Women</Text>
        <Text style={styles.category}>Best sellers</Text>
      </View>
      <DropDownList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.05,
    paddingTop: Platform.OS === "android" ? height * 0.06 : 0,
  },
  titleBar: {
    width: "100%",
    height: height * 0.07,
    marginBottom: height * 0.02,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Poppins-Regular",
    color: "#5735CE",
    fontSize: 24,
    alignSelf: "center",
  },
  menuLogo: {
    marginTop: height * 0.02,
    width: 30,
    height: 20,
  },
  categoriesBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: height * 0.07,
  },
});
