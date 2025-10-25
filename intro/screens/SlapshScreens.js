// Importamos los módulos necesarios desde React y React Native
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button, SafeAreaView } from 'react-native';

// Componente principal llamado "Ejemplo"
export default function Ejemplo() {

  // Declaramos una variable de estado llamada "showSplash" (pantalla de bienvenida)
  // useState(true) significa que al inicio se muestra la pantalla splash
  const [showSplash, setShowSplash] = useState(true);

  // useEffect se ejecuta una sola vez cuando el componente se monta
  // Sirve para ocultar la pantalla de bienvenida después de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); // cambia el estado para ocultar el splash
    }, 4000);
    return () => clearTimeout(timer); // limpia el temporizador al desmontar el componente
  }, []);

  // Si "showSplash" es verdadero, se muestra esta vista (pantalla de bienvenida) 
  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Bienvenido a la App</Text>
      </View>
    );
  }

  // Si "showSplash" es falso, se muestra el contenido principal de la app
   // SafeAreaView evita que el contenido se superponga con la barra de estado (iOS o Android)
    
      {/* ImageBackground coloca una imagen como fondo de toda la pantalla */}
  return (
  
    <SafeAreaView style={{ flex: 1 }}>
      
      <ImageBackground
        source={{
          uri: 'https://wallpapercave.com/wp/wp3850825.jpg',
        }} // URL de la imagen que se usa como fondo
        style={styles.background} // se aplican los estilos del fondo
      >
        {/* View que contiene el texto y el botón, con un fondo semitransparente */}
        <View style={styles.overlay}>
          <Text style={styles.title}>Bienvenido!!</Text>

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

// Estilos
const styles = StyleSheet.create({
  

  splashContainer: {
    flex: 1, 
    backgroundColor: '#000000ff', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  
  splashText: {
    fontSize: 24, 
    color: '#fff', 
  },

  
  background: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)', 
    padding: 20, 
    borderRadius: 10, 
  },

  
  title: {
    fontSize: 28, 
    color: '#fff', 
    marginBottom: 10, 
    textAlign: 'center', 
  },
});