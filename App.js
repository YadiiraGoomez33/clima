import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Clima from './Componentes/Clima';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contenido}>
        <View style={styles.encabezado}>
          {/* Aquí puedes agregar elementos del encabezado */}
        </View>
        <View style={styles.climaContainer}>
          <Clima />
        </View>
        <View style={styles.pie}>
          {/* Aquí puedes agregar elementos del pie */}
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A5276', // Azul oscuro
  },
  contenido: {
    flex: 1,
    padding: 20,
  },
  encabezado: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  climaContainer: {
    flex: 1,
  },
  pie: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});


