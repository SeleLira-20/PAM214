import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  Alert,
  SafeAreaView,
  ScrollView
} from 'react-native';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  // SplashScreen de 4 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Alerta con opciones Guardar / Cancelar
  const mostrarAlerta = () => {
    Alert.alert(
      'Editar Perfil',
      '¿Qué deseas hacer?',
      [
        { text: 'Guardar', onPress: () => Alert.alert('Datos guardados exitosamente') },
        { text: 'Cancelar', onPress: () => Alert.alert('Acción cancelada'), style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  // Pantalla de Splash
  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Bienvenido a la App!!</Text>
      </View>
    );
  }

  // Pantalla principal
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: 'https://wallpapercave.com/wp/wp3850825.jpg',
        }}
        style={styles.background}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.overlay}>
            <Text style={styles.title}>Selene Guadalupe Lira Pérez</Text>
            <Text style={styles.subtitle}>Profesión: Ingeniería en Tecnología</Text>
            <Text style={styles.bio}>
              Soy una persona apasionada por la tecnología, interesada en el desarrollo de
              aplicaciones móviles que promuevan la sostenibilidad y el impacto positivo en la sociedad.
              Me gusta aprender cosas nuevas y trabajar en equipo.
            </Text>
            <Text style={styles.info}>Correo: selene@gmail.com</Text>
            <Text style={styles.info}>Celular: 442 812 8744</Text>

            <View style={styles.buttonContainer}>
              <Button title="Editar Perfil" color="#ff6f61" onPress={mostrarAlerta} />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

// =========================
// ESTILOS
// =========================
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    borderRadius: 15,
    margin: 20,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#f0f0f0',
    textAlign: 'center',
    marginBottom: 15,
  },
  bio: {
    fontSize: 16,
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  info: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
