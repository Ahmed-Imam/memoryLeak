import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  Main,
  Screen,
  Screen2,
  Screen3,
  Screen4,
} from '../screens/Home'
const Stack = createNativeStackNavigator()

const Home2 = (props) => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main2"
        component={Main}

      />
      <Stack.Screen
        name="Screen"
        component={Screen}
        options={{
          headerTitle: 'All Screen',
          headerTitleStyle: {
            color: 'blue',
          },
        }}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={({ route }) => ({
          headerTitle: route?.params?.title || 'Screen2',
          headerTitleStyle: {
            color: 'blue',
          },
        })}
      />
      <Stack.Screen
        name="Screen3"
        component={Screen3}
        options={({ route }) => ({
          headerTitle: route?.params?.title || 'Screen3',
          headerTitleStyle: {
            color: 'blue',
          },
        })}
      />
      <Stack.Screen
        name="Screen4"
        component={Screen4}
        options={() => ({
          headerTitle: 'Favourite Screen4',
          headerTitleStyle: {
            color: 'blue',
          },
        })}
      />
    </Stack.Navigator>
  )
}

export default Home2
