import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import sampleString, {
  sampleList,
  sampleObject,
  sampleFunction,
} from "../components/constants";
import Button from "../components/button";
import Counter from "../components/counter";
import { useRouter } from "expo-router";
import SignupController from "../components/signupcontroller";
import { is } from "date-fns/locale";
import { set } from "date-fns";

export default function AppIndex() {
  const router = useRouter();

  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <View style={styles.container}>
      {isSignedIn ? (
        <View style={styles.container}>
          <Pressable
            onPress={() => {
              setIsSignedIn(false);
            }}
          >
            <Text>Sign out</Text>
          </Pressable>
          <Text>
            Open up App.tsx to start working on your app. Hello there!{" "}
            {sampleList[0]}, Sample Object: {sampleObject.name}, Age:{" "}
            {sampleObject.age}
          </Text>
          <Button
            button_text="routing sample"
            button_color="red"
            url="/routingSample"
          />
          <Button button_text="go to tabs" url="/(tabs)" />
          <Counter />
          <StatusBar style="auto" />
        </View>
      ) : (
        <SignupController setIsSignedIn={setIsSignedIn} />
      )}
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
