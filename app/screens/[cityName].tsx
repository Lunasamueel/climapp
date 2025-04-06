import { View, StyleSheet, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import weatherService from '../services/weatherApi';
import WeatherCard from "../components/Weather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const { getWeather } = weatherService;

interface WeatherData {
  name: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    feels_like: number;
    pressure: number;
  };
  sys: {
    country: string 
  };
  weather: {
    description: string;
    main: string;
  
  }[];
}

const getGradientByTemp = (temp: number): [string, string] => {
  if (temp <= 10) return ["#2980b9", "#6dd5fa"];
  if (temp <= 25) return ["#83a4d4", "#b6fbff"];
  if (temp <= 35) return ["#f2994a", "#f2c94c"];
  return ["#e52d27", "#ff6e7f"];
};

const CityDetails = () => {
  const router = useRouter();
  const searchParams = useLocalSearchParams();
  const [clima, setClima] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClima = async () => {
      const cidade = searchParams.cityName as string;
      try {
        const infoWeather: WeatherData = await getWeather(cidade);
        setClima(infoWeather);

      } catch (error) {
        console.error("Erro ao buscar clima:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClima();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#000" style={{display: "flex", justifyContent: "center", alignItems: "center"}}/>;
  if (!clima) return <Text style={{ color: '#000', display: "flex", justifyContent: "center", alignItems: "center" }}>Clima não encontrado</Text>;

  const temperature = clima.main.temp - 273.15;
  const gradientColors = getGradientByTemp(temperature);

  return (

    <LinearGradient colors={gradientColors} style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          style={styles.headerIcon}
        >
          <MaterialIcons name="chevron-left" size={24} color={"#fff"} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>{clima.name} - {clima?.sys.country ?? "UF"}</Text>
        <Text style={styles.temperature}>
          {temperature.toFixed(0)}º
        </Text>
        <Text style={styles.description}>{clima.weather[0]?.description}</Text>
        <Text style={styles.minmax}>
          Min: {(clima.main.temp_min - 273.15).toFixed(1)}º / Max: {(clima.main.temp_max - 273.15).toFixed(1)}º
        </Text>
      </View>

      <View>
        <WeatherCard clima={clima} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: 24,
    fontFamily: "Montserrat_700Bold",
    marginTop: 80,
    textAlign: "center",
  },
  temperature: {
    color: "#ffffff",
    fontSize: 72,
    fontFamily: "Montserrat_500Medium",
    textAlign: "center",
    marginVertical: -2,
  },
  description: {
    color: "#ffffff",
    fontSize: 22,
    fontFamily: "Montserrat_400Regular",
    textAlign: "center",
  },
  minmax: {
    color: "#ffffff",
    fontSize: 18,
    fontFamily: "Montserrat_400Regular",
    textAlign: "center",
  },
  headerIcon: {
    position: "absolute",
    left: -180,
    top: 50,
    zIndex: 10,
  },
});

export default CityDetails;
