import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, Image } from 'react-native';
import { estilos } from './Estilos';

const Clima = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchWeatherData();
    }, []);

    const fetchWeatherData = async () => {
        try {
            const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=be03b75cb4ca4685ba5185428231010&q=huejutla&days=5&aqi=yes&alerts=no&lang=es');
            const jsonData = await response.json();
            setData(jsonData);
            setLoading(false);
        } catch (error) {
            setError('Error al cargar los datos del clima');
            setLoading(false);
        }
    };

    const renderWeatherData = () => {
        if (loading) {
            return (
                <View style={estilos.loadingContainer}>
                    <ActivityIndicator size={'large'} color={'darkblue'} />
                    <Text>Cargando datos...</Text>
                </View>
            );
        } else if (error) {
            return (
                <View style={estilos.errorContainer}>
                    <Text>Error: {error}</Text>
                </View>
            );
        } else {
            return (
                <View style={estilos.weatherContainer}>
                    <Text style={estilos.title}>Clima</Text>
                    <Text style={estilos.subtitle}>{data.location.name}</Text>
                    <View style={estilos.currentWeatherContainer}>
                        <Text style={estilos.currentWeatherText}>{data.current.temp_c}°C / {data.current.temp_f}°F</Text>
                        <Text style={estilos.currentWeatherText}>{data.current.condition.text}</Text>
                        <Image style={estilos.currentWeatherIcon} source={{ uri: 'https:' + data.current.condition.icon }} />
                        <Text style={estilos.currentWeatherText}>Humedad: {data.current.humidity}%</Text>
                        <Text style={estilos.currentWeatherText}>Presión: {data.current.pressure_mb} mb</Text>
                        <Text style={estilos.currentWeatherText}>Viento: {data.current.wind_kph} km/h, {data.current.wind_dir}</Text>
                        <Text style={estilos.currentWeatherText}>Índice UV: {data.current.uv}</Text>
                    </View>
                    <Text style={estilos.forecastTitle}>Pronóstico</Text>
                    <FlatList
                        data={data.forecast.forecastday}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <WeatherForecast forecast={item} />}
                        horizontal
                    />
                </View>
            );
        }
    };

    const WeatherForecast = ({ forecast }) => {
        return (
            <View style={estilos.forecastContainer}>
                <Text style={estilos.forecastText}>{forecast.date}</Text>
                <Text style={estilos.forecastText}>Máxima: {forecast.day.maxtemp_c}°C / Mínima: {forecast.day.mintemp_c}°C</Text>
                <Text style={estilos.forecastText}>Probabilidad de lluvia: {forecast.day.daily_chance_of_rain}%</Text>
                <Image style={estilos.forecastIcon} source={{ uri: 'https:' + forecast.day.condition.icon }} />
            </View>
        );
    };
    
    return (
        <View style={estilos.weatherContainer}>
            {renderWeatherData()}
        </View>
    );
};

export default Clima;
