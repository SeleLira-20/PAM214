import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button, SafeAreaViewBase } from 'react-native';
import React, {useState, useEffect} from 'react';
import { SafeAreaView } from 'react-native-web';

export default function App() {
  const[showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout (() => {
      setShowSplash(false);
    },4000);
    return () => clearTimeout (timer);
  }, []);
  
  if (showSplash){
    return (
      <view style={styles.splashContanier}>
        <Text style={styles.splashText}>Bienvenido a la App!!</Text>
      </view>
    );
  }

return (
  <SafeAreaView style ={{ flex:1}}>
    <ImageBackground 
    source={{
       uri: 'https://wallpapercave.com/wp/wp3850825.jpg',
    }}
    style={styles.background}
    >
      <view style={styles.overlay}>
        <Text style={styles.title}>Bienvcenido!!</Text>

      </view>
      
    </ImageBackground>
  </SafeAreaView>
)
}

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