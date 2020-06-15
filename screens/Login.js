import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import InputTextField from '../components/InputTextField'
import SocialMediaButton from '../components/SocialMediaButton'

const {width, height} = Dimensions.get('window')

const Login = ({navigation}) => {
    return (
        <ScrollView>
            <Text style={styles.logoText}>WHIMS</Text>
            <View style={styles.socialMediaButtons}>
                <SocialMediaButton socialM='Facebook'/>
                <SocialMediaButton socialM='Google'/>
            </View>
            <Text style={styles.or}>or</Text>
            <InputTextField style={styles.inputText} placeholderText='Email' isSecure={false}/>
            <InputTextField style={styles.inputText} placeholderText='Password' isSecure={true}/>
            <TouchableOpacity><Text style={styles.forgotpassword}>Forgot Password?</Text></TouchableOpacity>
            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => console.log('ok')}
            >
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.registerContainer}>
                <Text style={styles.noAccount}>Don't have an account?</Text>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('Signup', { name: 'Signup' })
                }>
                    <Text style={styles.register}>Register Now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    logoText: {
        alignSelf: 'center',
        color: '#5735CE',
        fontFamily: 'Poppins-Regular',
        fontSize: 32,
        fontWeight: 'bold',
        marginVertical: height * .13
    },
    socialMediaButtons: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: width * .02
    },
    or: {
        fontFamily: 'Poppins-Regular',
        color: '#ABB4BD',
        fontSize: 18,
        textAlign: 'center',
        marginTop: height * .02
    },
    inputText: {
      width: width * .8,
      marginHorizontal: width * .1,
      marginVertical: height * .01
    },
    forgotpassword: {
        fontFamily: 'Poppins-Regular',
        color: '#5735CE',
        fontSize: 14,
        marginVertical: height * .02,
        textAlign: 'right',
        marginRight: width * .1
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
      registerContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: width * .07
      },
      noAccount: {
        marginHorizontal: width *.005,
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#A4ADB5'
      },
      register: {
        marginHorizontal: width *.005,
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#5735CE'
      }
  })

export default Login