import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

interface ButtonProps {
  button_color?: string;
  button_text: string;
  url: string;
}

const Button: React.FC<ButtonProps> = ({ button_color, button_text, url }) => {
  const router = useRouter();

  const routeToSecondPage = () => {
    router.push(url);
  };
  return (
    <TouchableOpacity
      style={{
        backgroundColor: button_color ? button_color : "#2196F3",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginVertical: 10,
      }}
      onPress={routeToSecondPage}
    >
      <Text style={styles.buttonText}>{button_text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Button;
