import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import sampleString, {
  sampleList,
  sampleObject,
  sampleFunction,
} from "../components/constants";
import Button from "../components/button";
import Counter from "../components/counter";

interface LandingPageProps {
  setIsSignedIn: (isSignedIn: boolean) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ setIsSignedIn }) => {
  const [data, setData] = useState<any>(null);
  const [food, setFood] = useState<string>("");
  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://trackapi.nutritionix.com/v2/search/instant/?query=${food}`,
        {
          method: "GET",
          headers: {
            "x-app-id": "363f223f",
            "x-app-key": "6f523dab928dce2190670ef3e229260a",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setData(data.common.splice(0, 3) || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}>
        {data && data.length > 0 ? (
          data.map((item: any, index: number) => (
            <View key={index}>
              <Image
                source={{
                  uri: `${item.photo.thumb}`,
                }}
                style={{ width: 50, height: 50 }}
                width={50}
                height={50}
                resizeMode="cover"
              />
              <Text style={styles.text}>Food name: {item.food_name}</Text>
              <Text style={styles.text}>Calories: {item.nf_calories}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.text}>No data found</Text>
        )}
      </ScrollView>

      <TextInput
        style={styles.input}
        placeholder="Enter your favorite food"
        value={food}
        onChangeText={setFood}
      />
      <Pressable
        onPress={() => {
          fetchData();
        }}
        style={styles.button}
      >
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
    width: "100%",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  text: {
    // color: "blue",
    backgroundColor: "#e0f7fa",
    fontSize: 12,
    fontWeight: "bold",
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
});

export default LandingPage;
