import {
    StyleSheet,
} from "react-native";

const stylesCities = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 40,
        gap: 16,
    },
    title: {
        marginTop: 16,
        fontFamily: "Montserrat_700Bold",
        fontSize: 28,
        color: "#fff",
        textAlign: "left",
    },
    inputContainer: {
        height: 40,
        width: "100%",
        backgroundColor: "rgba(222,255,255, 0.15)",
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
        zIndex: 2,
        marginVertical: -16,
    },
    input: {
        flex: 1,
        color: "#fff",
        fontSize: 16,
        fontFamily: "Montserrat_500Medium",
        paddingHorizontal: 10,
        top: 3,
    },
    citiesName: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Montserrat_500Medium",
    },
    dropdown: {
        position: "absolute",
        top: 48,
        left: 0,
        //backgroundColor: "#000",
        borderRadius: 8,
        maxHeight: 250,
        //elevation: 2,
        zIndex: 1,
    },
    dropdownItem: {
        padding: 4,
        borderBottomColor: "#ccc",
    },
    listItem: {
        height: 63,
        width: "100%",
        backgroundColor: "rgba(255,255,255, 0.15)",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 16,
        flexDirection: "row",
        paddingHorizontal: 16,
    },
    itemText: {
        fontSize: 16,
        color: "#fff",
        paddingVertical: 3
    },
    scrollList: {
        gap: 20,
    },
    cityTemp: {
        fontFamily: "Montserrat_700Bold",
        color: "#fff",
        fontSize: 25,
    },
    cityImage: {
        width: 27,
        height: 24,
    },
});

export default stylesCities;