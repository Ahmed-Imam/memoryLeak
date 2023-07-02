import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './HomeStack';
import { Screen2, Screen } from '../screens/Home';
import Homestack2 from './Homestack2';
import Homestack3 from './HomeStack3';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {


  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarLabelStyle: {
          fontFamily: 'Poppins-Regular',
        },
        tabBarAllowFontScaling: false,
      }}
      backBehavior="history">
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
      />
      <BottomTab.Screen
        name="BScreen"
        component={Homestack3}
        options={{
          headerShown: false,
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('BScreen');
            console.log('call api');
          },
        })}
      />
      <BottomTab.Screen
        name="BScreen2"
        component={Homestack2}
        options={{
          headerShown: false,
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('BScreen2');
            console.log('call api');
          },
        })}
      />
      <BottomTab.Screen
        name="Homestack2"
        component={Homestack2}
        options={{
          headerShown: false,
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('Homestack2');
            console.log('call api');
          },
        })}
      />
      <BottomTab.Screen
        name="Homestack3"
        component={Homestack3}
        options={{
          headerShown: false,
        }}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.openDrawer();
          },
        })}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;
