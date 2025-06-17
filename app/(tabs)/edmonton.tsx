import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CityData from "../../components/city_data";

export default function Edmonton() {
  const eventHandler = () => {
    console.log("Event handler triggered!");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Edmonton</Text>
      <CityData
        title="Edmonton, Alberta"
        text="Edmonton is the capital city of the Canadian province of Alberta. It is located on the North Saskatchewan River and is known for its vibrant arts scene and festivals."
        imageUrl="https://i.pinimg.com/736x/e7/0a/eb/e70aeb8b90a7aa832bddebd2260a44d9.jpg"
        cityUrl="https://www.edmonton.ca/"
        // eventHandler={eventHandler}
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
