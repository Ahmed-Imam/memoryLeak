import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Auth from '../screens/Auth'
import CustomDrawer from './CustomDrawer'

const Stack = createNativeStackNavigator()
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Auth"
          component={Auth}
        />
        <Stack.Screen
          name="App"
          component={CustomDrawer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
