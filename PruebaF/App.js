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
  ScrollView,
  Dimensions
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

  // Alert EXACTAMENTE como lo piden
  const handleEditarPerfil = () => {
    Alert.alert(
      'Editar Perfil', // Solo título, sin mensaje
      '', // Mensaje vacío
      [
        { 
          text: 'Guardar', 
          onPress: () => console.log('Guardar presionado') 
        },
        { 
          text: 'Cancelar', 
          onPress: () => console.log('Cancelar presionado'),
          style: 'cancel' 
        },
      ]
    );
  };

  // Splash Screen
  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Cargando Perfil...</Text>
        <Text style={styles.splashSubText}>Desarrolladora React Native</Text>
      </View>
    );
  }

  // Altura para forzar scroll
  const screenHeight = Dimensions.get('window').height;
  const contentHeight = screenHeight * 1.5; // 150% de la pantalla

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c' }}
        style={styles.background}
        resizeMode="cover"
      >
        {/* SCROLLVIEW que SIEMPRE permitirá scroll */}
        <ScrollView 
          contentContainerStyle={{ 
            minHeight: contentHeight, // Forza el scroll
            justifyContent: 'center',
            paddingVertical: 40
          }}
          showsVerticalScrollIndicator={true}
        >
          {/* CONTENEDOR SEMITRANSPARENTE CENTRADO */}
          <View style={styles.overlayContainer}>
            <View style={styles.overlay}>
              
              {/* INFORMACIÓN DEL PERFIL */}
              <Text style={styles.nombre}>Selene Guadalupe Lira Pérez</Text>
              
              <View style={styles.separador} />
              
              <Text style={styles.profesion}>🏆 Ingeniera en Tecnología</Text>
              <Text style={styles.subtitulo}>Desarrolladora Full Stack</Text>
              
              <View style={styles.separador} />
              
              <Text style={styles.seccion}>📖 Biografía</Text>
              <Text style={styles.bio}>
                Apasionada por la tecnología y el desarrollo de software. 
                Especializada en React Native para aplicaciones móviles multiplataforma.
                Creo soluciones innovadoras que combinan usabilidad y performance.
                Siempre en búsqueda de nuevos desafíos y aprendizajes.
              </Text>
              
              {/* CONTENIDO EXTRA PARA FORZAR SCROLL */}
              <Text style={styles.bio}>
                Actualmente trabajando en proyectos de sostenibilidad digital,
                aplicando mejores prácticas de desarrollo y metodologías ágiles.
                Comprometida con el código limpio y la experiencia de usuario.
              </Text>
              
              <View style={styles.separador} />
              
              <Text style={styles.seccion}>📧 Contacto</Text>
              
              <View style={styles.contactoItem}>
                <Text style={styles.contactoLabel}>Correo:</Text>
                <Text style={styles.contactoValor}>selene.lira@ejemplo.com</Text>
              </View>
              
              <View style={styles.contactoItem}>
                <Text style={styles.contactoLabel}>Teléfono:</Text>
                <Text style={styles.contactoValor}>+52 442 812 8744</Text>
              </View>
              
              <View style={styles.contactoItem}>
                <Text style={styles.contactoLabel}>GitHub:</Text>
                <Text style={styles.contactoValor}>github.com/selene-lira</Text>
              </View>
              
              {/* ESPACIO EXTRA PARA SCROLL */}
              <View style={{ height: 100 }} />
              
              {/* BOTÓN EDITAR PERFIL */}
              <View style={styles.botonContainer}>
                <Button
                  title="📝 Editar Perfil"
                  onPress={handleEditarPerfil}
                  color="#4A90E2"
                />
              </View>
              
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  splashContainer: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  splashSubText: {
    fontSize: 18,
    color: '#64dfdf',
    fontStyle: 'italic',
  },
  background: {
    flex: 1,
    width: '100%',
  },
  overlayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  overlay: {
    backgroundColor: 'rgba(30, 30, 46, 0.85)', // Más oscuro para mejor contraste
    width: '100%',
    maxWidth: 400,
    padding: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(100, 223, 223, 0.3)',
  },
  nombre: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  profesion: {
    fontSize: 22,
    color: '#64dfdf',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 16,
    color: '#a9b7c6',
    textAlign: 'center',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  seccion: {
    fontSize: 18,
    color: '#4A90E2',
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#e0e0e0',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 10,
  },
  contactoItem: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  contactoLabel: {
    fontSize: 16,
    color: '#64dfdf',
    fontWeight: '600',
    width: 80,
  },
  contactoValor: {
    fontSize: 16,
    color: '#fff',
    flex: 1,
  },
  separador: {
    height: 1,
    backgroundColor: 'rgba(100, 223, 223, 0.3)',
    marginVertical: 15,
  },
  botonContainer: {
    marginTop: 30,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#4A90E2',
  },
});