import { View, Text } from 'react-native'
import React from 'react'
import LoginForm from '..components/loginscreen/LoginForm'

const INSTAGRAM_LOGO='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png?20160616034027'


const LoginScreen = ({navigation}) => {
    <View style={StyleSheet.container}>
    <View style={StyleSheet.logoContainer}>
    <Image source={{uri:INSTAGRAM_LOGO,height:100,width:100}}/>
    </View>
    <LoginForm navigation={navigation}/>
    </View>
  
}
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
})
export default LoginScreen