import { useEffect, useState } from "react";
import { View, Text } from "react-native";

// Define the type for the weather data
interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: Array<{
    description: string;
  }>;
}

const fetchWeather = async (): Promise<WeatherData | null> => {
  const API_KEY = "YOUR_API_KEY"; // Replace with your free OpenWeatherMap API key
  const city = "London"; // Replace with desired city
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data: WeatherData = await response.json();
    console.log("Weather fetched successfully:", data);
    return data;
  } catch (error) {
    console.error(
      "Error fetching weather:",
      error instanceof Error ? error.message : "Unknown error"
    );
    return null;
  }
};

// Example usage in a component
const WeatherComponent: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchWeather();
      if (data) setWeather(data);
    };
    getData();
  }, []);

  return (
    <View>
      {weather ? (
        <Text>
          Weather in {weather.name}: {weather.main.temp}°C,{" "}
          {weather.weather[0].description}
        </Text>
      ) : (
        <Text>Loading weather data...</Text>
      )}
    </View>
  );
};

export default WeatherComponent;
