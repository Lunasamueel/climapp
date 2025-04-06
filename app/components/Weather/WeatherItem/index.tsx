import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import styles from "./styles";

type RowItemProps = {
    iconPath: ImageSourcePropType;
    title: string;
    value: string | number;
};

const WeatherItem: React.FC<RowItemProps> = ({ iconPath, title, value }) => {
    return (
        <View style={styles.row}>
            <Image source={iconPath} />
            <Text style={styles.rowTitle}>{title}</Text>
            <Text style={styles.rowValue}>{value}</Text>
        </View>
    );
};

export default WeatherItem;