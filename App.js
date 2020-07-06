import React, { useState } from "react";
import * as Fonts from "expo-font";
import { AppLoading } from "expo";
import { StyleSheet, Text } from "react-native";
import Navigator from "./routes/homeStack";

const getFont = () => {
  return Fonts.loadAsync({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Italic": require("./assets/fonts/Poppins-Italic.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "custom-icons": require("./assets/fonts/icomoon.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading startAsync={getFont} onFinish={() => setFontsLoaded(true)} />
    );
  }
}

const styles = StyleSheet;
