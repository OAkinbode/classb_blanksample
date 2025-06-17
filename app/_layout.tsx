import React from "react";
import { Stack } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    // <Stack>
    //   <Stack.Screen
    //     name="index"
    //     options={{
    //       headerTitle: () => (
    //         <View style={styles.headerContainer}>
    //           <Image
    //             source={require("../assets/icon.png")}
    //             style={styles.logo}
    //           />
    //           <Text style={styles.headerText}>My App</Text>
    //         </View>
    //       ),
    //     }}
    //   />
    // </Stack>
    <Stack />
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 10,
  },
});
