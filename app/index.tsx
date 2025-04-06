import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcon from "@expo/vector-icons/MaterialIcons"
import { useRouter } from "expo-router"
import styles from "./styles";

export default function Index() {
  const router = useRouter();
  return (
    <LinearGradient colors={["#00457d", "#05051f"]} style={styles.container}>
      <Image source={require("../assets/images/logo.png")} />
      <Image source={require("../assets/images/weather.png")} />
      <Text style={styles.title}>Boas Vindas</Text>

      <TouchableOpacity onPress={() => {
        router.push("./screens/cities");
        
      }} style={styles.button}>
        <Text style={styles.buttoTitle}>Entrar</Text>
        <MaterialIcon name="arrow-forward" size={24} color={"#fff"} />
      </TouchableOpacity>
    </LinearGradient>
  );
}

