import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      gap: 64,
      paddingVertical: 79,
      paddingHorizontal: 32.
    },
    title: {
      fontSize: 25,
      color: "#fff",
      fontFamily: "Montserrat_400Regular"
    },
    button: {
      width: "100%",
      height: 40,
      //backgroundColor: "#7693ff",
      borderWidth: 1,
      borderColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 32,
      flexDirection: "row",
      gap: 8,
  
    },
    buttoTitle: {
      color: "#fff",
      fontSize: 20,
      fontWeight: 600,
      fontFamily: "Montserrat_600SemiBold",
    }
  })

export default styles;