import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CartItems from "../components/CartItems";
import InputTextField from "../components/InputTextField";

const { width, height } = Dimensions.get("window");
const subTotal = 50;
const shipping = 0;
const Items = [
  {
    key: "1",
    itemName: "White top",
    itemCategory: "Women",
    price: "15",
  },
  {
    key: "2",
    itemName: "Red dress",
    itemCategory: "Women",
    price: "10",
  },
  {
    key: "3",
    itemName: "Cool hat",
    itemCategory: "Women",
    price: "20",
  },
  {
    key: "4",
    itemName: "Blue jeans",
    itemCategory: "Women",
    price: "15",
  },
];

export default function Cart({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBar}>
        <View>
          <Image
            style={styles.menuLogo}
            source={require("../assets/icons/menu.png")}
          ></Image>
        </View>

        <Text style={styles.title}>Shopping Cart</Text>
        <View style={styles.menuLogo}>
          <Image
            source={require("../assets/icons/Icons-search-gray.png")}
          ></Image>
        </View>
      </View>
      <View>
        <FlatList
          style={styles.purchasedItems}
          showsVerticalScrollIndicator={false}
          data={Items}
          renderItem={({ item }) => <CartItems />}
        />
      </View>

      <View style={styles.purchaseInfos}>
        <Text style={styles.totalsText}>Totals</Text>
        <Text style={styles.subTotal}>Sub Total</Text>
        <Text style={styles.shipping}>Shipping</Text>
      </View>
      <View style={styles.voucherCode}>
        <TextInput placeholder="Enter Voutcher Code" />
        <TouchableOpacity>
          <Text style={styles.applyText}>APPLY</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>CHECKOUT</Text>
      </TouchableOpacity>
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
  purchasedItems: {
    height: 300,
  },
  purchaseInfos: {
    flex: 1,
  },
  totalsText: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    marginTop: height * 0.01,
    marginBottom: height * 0.02,
  },
  checkoutButton: {
    backgroundColor: "#5735CE",
    width: 150,
    height: 50,
    borderRadius: 50,
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: height * 0.02,
  },
  checkoutText: {
    color: "#fff",
    fontFamily: "Poppins-Regular",
    textAlign: "center",
  },
  voucherCode: {
    alignSelf: "center",
    width: 360,
    height: 50,
    borderColor: "#D9DDE2",
    borderWidth: 1,
    marginBottom: height * 0.02,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.05,
  },
  applyText: {
    textAlign: "center",
    alignSelf: "center",
  },
  subTotal: {
    fontSize: 16,
    marginBottom: height * 0.02,
  },
  shipping: {
    fontSize: 16,
    marginBottom: height * 0.02,
  },
});
