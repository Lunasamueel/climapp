import { View } from "react-native";
import styles from "./styles";
import React from "react";
import WeatherItem from "./WeatherItem";

const WeatherCard = ({ clima }: { clima: any }) => {
    return (
        <View style={styles.card}>
            <View style={styles.rowBox}>
                {[
                    {
                        iconPath: require("../../../assets/icons/humidity.png"),
                        title: "Sensação térmica",
                        value: `${(clima?.main?.feels_like - 273.15).toFixed(1)}º`,
                    },
                    {
                        iconPath: require("../../../assets/icons/temperature.png"),
                        title: "Pressão atmosférica",
                        value: `${clima?.main?.pressure}hPa`,
                    },
                    {
                        iconPath: require("../../../assets/icons/humidity.png"),
                        title: "Umidade",
                        value: `${clima?.main?.humidity}%`,
                    },
                    {
                        iconPath: require("../../../assets/icons/temperature.png"),
                        title: "Tempo",
                        value: `${clima?.weather?.[0]?.description}`,
                    },
                ].map((item, index) => (
                    <WeatherItem
                        key={index}
                        iconPath={item.iconPath}
                        title={item.title}
                        value={item.value}
                    />
                ))}
            </View>

        </View>
    )
}



export default WeatherCard;
