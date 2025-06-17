import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import credentials from "../lib/credentials.json";
import { set } from "date-fns";

interface SignInProps {
  setIsSignedIn: (isSignedIn: boolean) => void;
  userObject: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  };
  setSignSuccessful: (signSuccessful: boolean) => void;
}

const SignIn: React.FC<SignInProps> = ({
  setIsSignedIn,
  userObject,
  setSignSuccessful,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    // console.log("useeffect triggered: ", email);
  }, [email, password]);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const formHandler = () => {
    if (!validateEmail(email)) {
      console.log("Invalid email format");
      return;
    }
    if (credentials.users) {
      const user = credentials.users.find(
        (user) =>
          user.email === email.toLowerCase() &&
          user.password === password.toLowerCase()
      );
      if (user) {
        setSignSuccessful(true);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In to App</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Pressable style={styles.button} onPress={formHandler}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

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
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: "100%",
    maxWidth: 300,
    borderRadius: 5,
    minWidth: 200,
  },
});
export default SignIn;
