import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Link, useRouter } from "expo-router";
import Button from "./button";

interface CityDataProps {
  title: string;
  text: string;
  imageUrl: string;
  cityUrl: string;
  eventHandler?: () => void;
}
const CityData: React.FC<CityDataProps> = ({
  title,
  text,
  imageUrl,
  cityUrl,
  eventHandler,
}) => {
  const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => router.push(`${cityUrl}`)}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.paragraph}>{text}</Text>
        <Link href={cityUrl}>Go to City page</Link>
        {/* <TouchableOpacity
          onPress={
            eventHandler ? eventHandler : () => router.push(`${cityUrl}`)
          }
        >
          <Text style={{ color: "blue", marginTop: 10 }}>Visit {title}</Text>
        </TouchableOpacity> */}
        <Button
          button_text={`Visit ${title}`}
          button_color="#2196F3"
          url={cityUrl}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  subtitle: {
    fontSize: 20,
    fontStyle: "italic",
    marginBottom: 20,
    color: "#666",
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    color: "#444",
  },
});

export default CityData;
