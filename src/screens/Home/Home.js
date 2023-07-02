import {useNetInfo} from '@react-native-community/netinfo';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({route}) => {
  const navigation = useNavigation()
  const {isConnected} = useNetInfo();

  useEffect(() => {
    // api call to fetch
    console.log(isConnected);
  }, [isConnected]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="always">
        <TouchableOpacity onPress={()=> navigation.navigate('Screen')}>
          <Text>Go Screen 1</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=> navigation.navigate('Screen2')}>
          <Text>Go Screen 2</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=> navigation.navigate('Screen3')}>
          <Text>Go Screen 3</Text>
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

export default Home;
