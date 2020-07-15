import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Platform,
} from "react-native";

import Card from "../components/Card";

const { width, height } = Dimensions.get("window");
const Items = [
  {
    key: "1",
    itemName: "White top",
    itemCategory: "Women",
  },
  {
    key: "2",
    itemName: "Red dress",
    itemCategory: "Women",
  },
  {
    key: "3",
    itemName: "Cool hat",
    itemCategory: "Women",
  },
  {
    key: "4",
    itemName: "Blue jeans",
    itemCategory: "Women",
  },
  {
    key: "5",
    itemName: "Blue jeans",
    itemCategory: "Women",
  },
  {
    key: "6",
    itemName: "Blue jeans",
    itemCategory: "Women",
  },
];

export default function Discover({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBar}>
        <View>
          <Image
            style={styles.menuLogo}
            source={require("../assets/icons/menu.png")}
          ></Image>
        </View>

        <Text style={styles.title}>Discover</Text>
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
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.catalog}
          data={Items}
          numColumns={2}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <Card itemName={item.itemName} itemCategory={item.itemCategory} />
          )}
        />
      </View>

      <View style={styles.filtersSection}>
        <Text>No filters applied</Text>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => navigation.navigate("Filter")}
        >
          <Text style={styles.filerButtonText}>filter</Text>
        </TouchableOpacity>
      </View>
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

  catalog: {
    height: height * 0.7,
  },

  filtersSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: height * 0.01,
  },

  filterButton: {
    backgroundColor: "#5735CE",
    borderRadius: 50,
    width: 120,
    paddingVertical: 10,
  },
  filerButtonText: {
    fontFamily: "Poppins-Bold",
    textTransform: "uppercase",
    color: "#fff",
    alignSelf: "center",
  },
});
