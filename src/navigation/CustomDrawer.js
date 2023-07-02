import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import BottomTabs from './BottomStack'
import { createDrawerNavigator } from '@react-navigation/drawer'
const Drawer = createDrawerNavigator()
function CustomDrawer() {
  return (
    <Drawer.Navigator
      backBehavior="history"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Main"
        component={BottomTabs}
      />
    </Drawer.Navigator>
  )
}
const DrawerContent = () => {

  return (
    <SafeAreaView style={styles.wrapper}>
   
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: 15,
    minHeight:500,
  },




})
export default CustomDrawer
