import { StatusBar } from 'expo-status-bar';
import React, { ReactNode} from 'react';
// import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import MainNavigator from './navigation/Navigator'



const App: () => ReactNode = () => {
  return (
  <NavigationContainer>
    <MainNavigator />
  </NavigationContainer>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App
