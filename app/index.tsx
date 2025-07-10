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
import LandingPage from "../components/landing_page";
import UserManagement from "../components/usermanagement";

export default function AppIndex() {
  const router = useRouter();

  const [isSignedIn, setIsSignedIn] = useState(true);

  return (
    <View style={styles.container}>
      {isSignedIn ? (
        // <LandingPage setIsSignedIn={setIsSignedIn} />
        <UserManagement />
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
