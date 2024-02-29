import { StyleSheet } from 'react-native';


export const estilos = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8EAF6', // Azul grisáceo
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8EAF6', // Azul grisáceo
    },
    weatherContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#E8EAF6', // Azul grisáceo
    },
    currentWeatherContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    currentWeatherText: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
    },
    currentWeatherIcon: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    forecastContainer: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        backgroundColor: '#f8f8f8',
    },
    forecastText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
    forecastIcon: {
        width: 50,
        height: 50,
        marginBottom: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#607D8B', // Azul grisáceo más oscuro
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,
        color: '#F44336', // Rojo oscuro (contraste)
    },
    forecastTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#607D8B', // Azul grisáceo más oscuro
    },
});
