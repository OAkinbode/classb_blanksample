import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LethbridgePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Lethbridge</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
