import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import styles from "./styles";

type CardItemProps = {
    cidade: string;
    temperatura: number;
    tempMin: number;
    tempMax: number;
  };

const CityCard = ({ cidade, temperatura, tempMin, tempMax }: CardItemProps)  => {
    
    return (
        <Card style={styles.card} >
            <Card.Content style={styles.content}>
                <Text style={styles.city}>{cidade}</Text>
                <View style={styles.contentTemperature}>
                    <Text style={styles.temp}>{temperatura}°</Text>
                    <Text style={styles.minmax}>
                        Min: {tempMin}° / Max: {tempMax}°
                    </Text>
                </View>
            </Card.Content>   
        </Card>

    );
};



export default CityCard;
