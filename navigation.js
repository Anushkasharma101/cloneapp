import React from 'react'
import Homescreen from './Homescreen'
import NewPostScreen from './NewPostScreen'
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const screenOptions={
headerShown:false,
}

const SignedInStack = () => {
  <NavigationContainer>
  <Stack.Navigator initialRouteName='HomeScreen'
  screenOptions={screenOptions}
  >

  <Stack.Screen name='Homescreen' component={Homescreen}/>
  <Stack.Screen name='NewPostScreen' component={NewPostScreen}/>
  </Stack.Navigator>
  </NavigationContainer>
}

export const SignedOutStack = () => (
  <NavigationContainer>
  <Stack.Navigator initialRouteName='LoginScreen'
  screenOptions={screenOptions}
  >
  <Stack.Screen name='LoginScreen' component={LoginScreen}/>
  <Stack.Screen name='Signup' component={SignupScreen}/>
  
  </Stack.Navigator>
  </NavigationContainer>
)

export default SignedInStack