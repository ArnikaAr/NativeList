import { Tabs } from "expo-router";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="list"
        options={{
          tabBarLabel: "List",
          title: "List",
          tabBarIcon: () => <MaterialCommunityIcons name="format-list-bulleted" size={30} />,
          tabBarLabelStyle: {
            fontSize: 15,
          },
        }}
      />
      <Tabs.Screen
        name="goods"
        options={{
          tabBarLabel: "Goods",
          title: "Goods",
          tabBarIcon: () => <MaterialCommunityIcons name="rhombus-split" size={30} />,
          tabBarLabelStyle: {
            fontSize: 15,
          },
        }}
      />
    </Tabs>
  );
}