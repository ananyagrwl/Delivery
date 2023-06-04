import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WelcomScreen } from './src/screens/LoginSignupScreens/WelcomScreen';
import {LoginScreen} from './src/screens/LoginSignupScreens/LoginScreen';
import { RootNavigation } from './src/screens/RootNavigation';
// import {SignupScreen} from './src/screens/LoginSignupScreens/SignupScreen';

export default function App() {
  return (
    // <LoginScreen/>
    <RootNavigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
