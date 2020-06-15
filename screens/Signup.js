import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import InputTextField from '../components/InputTextField'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'

const {width, height} = Dimensions.get('window')

const Signup = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titleSignup}>Register to WHIMS</Text>
            <InputTextField style={styles.inputText} placeholderText='Full Name' isSecure={false}/>
            <InputTextField style={styles.inputText} placeholderText='Email' isSecure={false}/>
            <InputTextField style={styles.inputText} placeholderText='Mobile Number' isSecure={false}/>
            <InputTextField style={styles.inputText} placeholderText='Password' isSecure={true}/>
            <InputTextField style={styles.inputText} placeholderText='Confirm Password' isSecure={true}/>
            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => console.log('ok')}
            >
                <Text style={styles.loginText}>Signup</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: '#fff'
    },
    titleSignup: {
        fontSize: 23,
        fontWeight: 'bold',
        fontFamily: 'Poppins-Regular',
        marginLeft: width * .06,
        marginBottom: height * .05
    },
    inputText: {
        width: width * .9,
        marginHorizontal: width * .05,
        marginTop: height * .01,
        marginBottom: height * .045
    },
    loginButton:{
        width: width * .8,
        height: height * .07,
        marginTop: width * .06,
        backgroundColor:'#5735CE',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignSelf: 'center'
      },
      loginText:{
          color:'#fff',
          textAlign:'center',
          fontFamily:'Poppins-Regular',
          fontWeight: 'bold',
          fontSize: 16
      },
})
export default Signup