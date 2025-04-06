import axios from 'axios';
import Cidade from '../../interfaces/city.interface';

const getCities = async () => {
 
  try {
    const response = await axios.get<Cidade[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/municipios"
    );
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar clima:', error);
    return null;
  }
};

export default getCities;