import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import CityCard from '../City';
import Clima from '@/interfaces/clima.interface';
import weatherService from '../../services/weatherApi';

const { getWeather, getInfoWeatherCity } = weatherService;
const cidades = ['São Paulo', 'Belo Horizonte', 'Recife', 'Brasília', 'Porto Alegre', 'Rio de Janeiro'];

const CitiesCard = () => {
    const [weatherCity, setWeatherCity] = useState<Clima[]>([]);

    useEffect(() => {
        const fetchClimas = async () => {
            try {
                const responses = await Promise.all(
                    cidades.map((cidade) => getInfoWeatherCity(cidade)));
                    setWeatherCity(responses)
            } catch (error) {
                console.error('Erro ao buscar dados do clima:', error);
            }
        };

        fetchClimas();
    }, []);


    return (
        <View>
            {weatherCity.map((item, index) => (
                <CityCard key={index} cidade={item.name}
                    temperatura={item.main.temp}
                    tempMin={item.main.temp_min}
                    tempMax={item.main.temp_max} />
            ))}
        </View>
    );
}

export default CitiesCard;