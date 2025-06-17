import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Calgary",
          tabBarIcon: () => null, // Add an icon here if desired
        }}
      />
      <Tabs.Screen
        name="edmonton"
        options={{
          tabBarLabel: "Edmonton",
          tabBarIcon: () => null, // Add an icon here if desired
        }}
      />
      <Tabs.Screen
        name="lethbridge"
        options={{
          tabBarLabel: "Lethbridge",
          tabBarIcon: () => null, // Add an icon here if desired
        }}
      />
    </Tabs>
  );
}
