import React, { useState }  from 'react'
import { View, StyleSheet, Dimensions, StatusBar, Image } from 'react-native'
import InputTextField from './components/InputTextField'
import Login from './screens/Login'
import * as Fonts from "expo-font";
import { AppLoading } from "expo";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './screens/Signup';
import HeaderBackArrow from './components/HeaderBackArrow';

const {width, height} = Dimensions.get('window')

const getFont = () => {
  return Fonts.loadAsync({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });
};

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
    if (fontsLoaded) {
      return (
        <NavigationContainer style= {styles.container}>
          <Stack.Navigator>
            <Stack.Screen  // Docs : https://reactnavigation.org/docs/stack-navigator/
              name="Login"
              component={Login}
              options={{ 
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ 
                title: '',
                headerStyle: {
                  backgroundColor: '#fff',
                  shadowOpacity: 0,
                  elevation: 0,
                },
                headerTintColor: '#000'
              }}
            />
            </Stack.Navigator>
        </NavigationContainer>

      )
    }else {
        return (
            <AppLoading startAsync={getFont} onFinish={() => setFontsLoaded(true)} />
          );
    }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    marginTop: StatusBar.currentHeight,
  },
  inputText: {
    width: width * .8,
    marginHorizontal: width * .1,
    marginVertical: height * .01
  }
})

export default App