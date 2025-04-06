import {
    FlatList,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Dimensions,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ActivityIndicator, Card } from "react-native-paper";
import CitiesCard from "../components/Cities"
import Cidade from "../../interfaces/city.interface";
import getCities from "../services/citiesApi";
import styles from './stylesCities';

const Cities = () => {
    const router = useRouter();

    const [inputValue, setInputValue] = useState<string>("");
    const [cidades, setCidades] = useState<Cidade[]>([]);
    const [filtradas, setFiltradas] = useState<Cidade[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const screenWidth = Dimensions.get("window").width;

    useEffect(() => {
        async function fetchCidades() {
            try {
                const _cities = await getCities();
                setCidades(_cities);
            } catch (error) {
                console.error("Erro ao buscar cidades:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchCidades();
    }, []);

    useEffect(() => {
        if (inputValue.length > 0) {
            const filtradas = cidades.filter((cidade: { nome: string; microrregiao: { mesorregiao: { UF: { sigla: string; }; }; }; }) => {
                const nome = cidade.nome.toLowerCase();
                const uf = cidade.microrregiao.mesorregiao.UF.sigla.toLowerCase();

                return (
                    nome.startsWith(inputValue.toLowerCase()) ||
                    uf.startsWith(inputValue.toLowerCase())
                );
            })
                .slice(0, 20);
            setFiltradas(filtradas);
            setShowDropdown(true);
        } else {
            setFiltradas([]);
            setShowDropdown(false);
        }
    }, [inputValue, cidades]);

    return (
        <LinearGradient colors={["#83a4d4", "#b6fbff"]} style={styles.container}>
            <View>
                <Text style={styles.title}>Tempo</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite a cidade"
                    placeholderTextColor="#fff"
                    value={inputValue}
                    onChangeText={(value) => {
                        setInputValue(value);
                    }}
                />
                <MaterialIcons name="search" size={18} color="#fff" />

                {loading && <ActivityIndicator style={{ marginTop: 10 }} />}

                {showDropdown && filtradas.length > 0 && (
                    <View style={[styles.dropdown, { width: screenWidth - 32 }]}>
                        <FlatList
                            data={filtradas}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.dropdownItem}
                                    onPress={() => {
                                        setInputValue(item.nome);
                                        setTimeout(() => setShowDropdown(false), 10);
                                        router.push({
                                            pathname: '/screens/[cityName]',
                                            params: { cityName: item.nome },
                                        });

                                    }}
                                >
                                    <Text style={styles.itemText}>
                                        {item.nome} - {item.microrregiao?.mesorregiao?.UF?.sigla ?? "UF"}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                )}
            </View>
            <View>
                {!showDropdown && (
                    <CitiesCard />
                )}

            </View>
        </LinearGradient>
    );
};

export default Cities;