import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor: 'rgba(68, 99, 213, 0.20)'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        display: "flex",
    
    },
    contentTemperature: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexDirection: "column"
    },
    city: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
    },
    temp: {
        fontSize: 32,
        color: '#fff',
        fontWeight: '700',
    },
    minmax: {
        fontSize: 14,
        color: '#fff',
        marginTop: 4,
    },
});

export default styles;