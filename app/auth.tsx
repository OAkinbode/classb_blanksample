import React, { useState } from "react";
import SupabaseAuth from "../components/supabaseAuth";
import { StyleSheet, View } from "react-native";

export default function Auth() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <View style={styles.container}>
      <SupabaseAuth />
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
});
