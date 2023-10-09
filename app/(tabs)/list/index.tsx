import { StyleSheet, View, Text } from 'react-native';
import { Stack } from "expo-router";

export default function ListView() {
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
