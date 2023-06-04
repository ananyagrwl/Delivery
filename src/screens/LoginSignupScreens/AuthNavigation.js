import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomScreen from './WelcomScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';


const Stack = createNativeStackNavigator();
export const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='welcome'>
        <Stack.Screen name="welcome" component={WelcomScreen} options={{headerShown:false}} />
        <Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="signup" component={SignupScreen} options={{headerShown:false}} />
      </Stack.Navigator>
  )
}
