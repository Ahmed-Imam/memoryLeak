/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect } from 'react'
 import MainNavigation from './src/navigation'
 import 'react-native-gesture-handler'
 import {
  GestureHandlerRootView
} from 'react-native-gesture-handler';
 const App = () => {

  
   return <GestureHandlerRootView style={{ flex: 1 }}><MainNavigation /></GestureHandlerRootView>;
 }
 
 export default App
 