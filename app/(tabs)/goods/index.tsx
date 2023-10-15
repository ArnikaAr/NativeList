import { StyleSheet, View, Text } from 'react-native';
import { Stack } from "expo-router";
import { observer, inject } from "mobx-react";
import store from '../../../src/store/index'

export default function ListView() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: "Goods" }} />
      {
        store.allItems.map((item, id) => <Text key={id}>{item}</Text>)
      }
      <Text>Here is Goods</Text>
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
