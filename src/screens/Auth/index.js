import {useNetInfo} from '@react-native-community/netinfo';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Auth = ({route}) => {

  const navigation = useNavigation()
  const {isConnected} = useNetInfo();

  useEffect(() => {
    // api call to fetch
    console.log(isConnected);
  }, [isConnected]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, alignItems:'center',justifyContent:'center'}}
        keyboardShouldPersistTaps="always">
        <TouchableOpacity onPress={()=> navigation.navigate('App')}>
          <Text>Go Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default Auth;
