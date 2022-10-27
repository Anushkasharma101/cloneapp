import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import SignUpForm from './components/signUpScreen/SignUpForm'

const INSTAGRAM_LOGO='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png?20160616034027'
 
const SignupScreen = ({navigation}) => (
    <View style={StyleSheet.container}>
    <View style={StyleSheet.logoContainer}>
    <Image source={{uri:INSTAGRAM_LOGO,height:100,width:100}}/>
    </View>
    <SignUpForm navigation={navigation}/>
    </View>
)
    
    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'white',
            paddingTop:50,
            paddingHorizontal:12,
        },
        logoContainer:{
            alignItems:'center',
            marginTop:60,
        },
    
    },
    )
export default SignupScreen