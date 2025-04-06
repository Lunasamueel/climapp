import axios from 'axios';
import Constants from 'expo-constants';

const { API_KEY } = Constants.expoConfig?.extra || {};

const getWeather = async (cidade) => {
  //
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar clima:', error);
    return null;
  }
};

const getInfoWeatherCity = async (cidade) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt_br`
    );
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar clima:', error);
    return null;
  }
};

// Exportando as duas funções dentro de um objeto (como você começou)
export default  {
  getWeather,
  getInfoWeatherCity,
}
