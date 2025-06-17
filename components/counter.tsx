import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  let increment: number = 0;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Count: {count}</Text>
      <Button
        title="Increment"
        onPress={() => {
          setCount(count + 1);
        }}
        color="#2196F3"
      />
      <Button
        title="Decrement"
        onPress={() => {
          setCount(count - 1);
        }}
        color="#2196F3"
      />
      <Button
        title="Reset"
        onPress={() => {
          setCount(0);
        }}
        color="#f44336"
      />
    </View>
  );
};

export default Counter;
