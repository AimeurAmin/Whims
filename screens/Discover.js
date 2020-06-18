import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function Discover({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text>Discover Page</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.1,
    paddingVertical: height * 0.1,
  },
});
