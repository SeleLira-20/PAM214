import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, StatusBar } from 'react-native';

const themes = {
  light: {
    background: '#FFFFFF',
    text: '#000000',
    card: '#F5F5F5',
    primary: '#2196F3',
  },
  dark: {
    background: '#121212',
    text: '#FFFFFF',
    card: '#1E1E1E',
    primary: '#BB86FC',
  },
  blue: {
    background: '#E3F2FD',
    text: '#0D47A1',
    card: '#BBDEFB',
    primary: '#1976D2',
  },
};

export default function ThemeSelector() {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [darkMode, setDarkMode] = useState(false);
  const theme = themes[currentTheme];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setCurrentTheme(darkMode ? 'light' : 'dark');
  };

  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <StatusBar 
        backgroundColor={theme.background} 
        barStyle={currentTheme === 'dark' ? 'light-content' : 'dark-content'} 
      />
      
      <Text style={styles.title}>Selector de Temas</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Configuración</Text>
        
        <View style={styles.setting}>
          <Text>Modo Oscuro</Text>
          <Switch value={darkMode} onValueChange={toggleDarkMode} />
        </View>
        
        <Text style={styles.themeTitle}>Selecciona un tema:</Text>
        <View style={styles.themeContainer}>
          {Object.keys(themes).map(key => (
            <TouchableOpacity
              key={key}
              style={[
                styles.themeOption,
                { backgroundColor: themes[key].primary },
                currentTheme === key && styles.selectedTheme
              ]}
              onPress={() => setCurrentTheme(key)}
            >
              <Text style={styles.themeText}>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Contenido de Ejemplo</Text>
        <Text style={styles.contentText}>
          Este texto cambia de color según el tema seleccionado. 
          El fondo también se adapta automáticamente.
        </Text>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Botón Principal</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Información del Tema</Text>
        <Text>Nombre: {currentTheme}</Text>
        <Text>Color de fondo: {theme.background}</Text>
        <Text>Color de texto: {theme.text}</Text>
        <Text>Color primario: {theme.primary}</Text>
      </View>
    </View>
  );
}

const createStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 20,
  },
  card: {
    backgroundColor: theme.card,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 10,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  themeTitle: {
    fontSize: 16,
    color: theme.text,
    marginBottom: 10,
  },
  themeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  themeOption: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  selectedTheme: {
    borderWidth: 3,
    borderColor: theme.text,
  },
  themeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    alignItems: 'center',
    marginVertical: 20,
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 10,
  },
  contentText: {
    color: theme.text,
    textAlign: 'center',
    marginBottom: 15,
  },
  primaryButton: {
    backgroundColor: theme.primary,
    padding: 15,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});