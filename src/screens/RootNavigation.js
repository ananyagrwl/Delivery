// jitni b navigations h, sari yaha call hongi
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigation } from './LoginSignupScreens/AuthNavigation';

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AuthNavigation/>
    </NavigationContainer>
  )
}

export default RootNavigation