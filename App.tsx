import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function App() {
  const handlePress = () => {
    alert("I like bacon");
  };

  const sampleList = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Doe" },
  ];
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

      {sampleList.map((item) => (
        <Text key={item.id} style={{ color: "green", fontSize: 16 }}>
          {item.name}
        </Text>
      ))}

      <Pressable>
        <Text style={styles.text} onPress={handlePress}>
          Click Me
        </Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
  },
});
