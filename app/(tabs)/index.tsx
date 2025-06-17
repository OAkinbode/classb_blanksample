import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CityData from "../../components/city_data";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to index</Text>
      <CityData
        title="Calgary, Alberta"
        text="Calgary is the largest city in the western Canadian province of Alberta. It is situated at the confluence of the Bow River and the Elbow River in the south of the province, in a region of foothills and prairie."
        imageUrl="https://i.pinimg.com/736x/7e/b0/1a/7eb01ae56f1f024cb744426be298d598.jpg"
        cityUrl="https://www.calgary.ca/home.html"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
