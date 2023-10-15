import { StyleSheet, View, Text } from 'react-native';
import { Stack } from "expo-router";
import { useEffect } from 'react';

import store from '../../../src/store/index'

export default function ListView() {
  useEffect(()=>{
    console.log(store.set('test', 'test'));
  })
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: "List" }} />
      <Text>Here is List</Text>
    </View>
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
