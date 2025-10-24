import { Text, StyleSheet, View, TextInput, Button, Alert } from 'react-native'
import React, {Component, useState} from "react";

export default function TexTinput()
{
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [comentario, setComentario] = useState('');
  // Esta alerta se ejecutara directamente en el celular
  const mostrarAlerta = () => {
    // trim para verificar que no hay espacios en blanco.
    if([nombre.trim(),password.trim(),comentario.trim()].includes('')){
      alert('Error, por favor rellena todos los campos.');//navegador
      Alert.alert('Error, por favor rellena el campo.');//celular
    }else{
      Alert.alert(`Hola, ${nombre}!`, 'Tu numbre ha sido ingresado con exito');
      alert(`Hola, ${nombre}!, Tu numbre ha sido ingresado con exito. Tu contraseña es ${password}`);
      
      setNombre('');
    }
  };
  return (
      <View style= {styles.container}>
        <Text style= {styles.label}>Ingresa tu nombre: </Text>
        <TextInput
        style={styles.input}
        placeholder='Ej. Selene'
        value={nombre}
        onChangeText={setNombre}
        keyboardType='default'
        autoCapitalize='words'
        />
         <TextInput
        style={styles.input}
        placeholder='password'
         value={password}
        onChangeText={setPassword}
        keyboardType='numeric'
        secureTextEntry={true}
        />
         <TextInput
        style={styles.input}
         value={comentario}
        onChangeText={setComentario}
        multiline={true}
        numberOfLines={4}
        />
        <Button
        title='Saludar'
        onPress={mostrarAlerta}
        color='turquoise' 
        />
      </View>
    ) 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1, //Sirve para ver el borde del input
    borderRadius: 8, // Bordes redondeados
    paddingHorizontal: 15, // Espacio interno a los lados
    marginBottom: 20, // Espacio debajo del input
    fontSize: 16,
  },
});