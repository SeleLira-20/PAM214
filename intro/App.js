//1.imports:Zona de las importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';
//2. main: Zona de componentes 
export default function App() { //aqui podemos ver la vista de la app
  const[Contador, setContador]=useState(0);
  return (
    <View style={styles.container}>
      <Text>Contador: {Contador}</Text>
      <Button title='Agregar' onPress={()=>setContador (Contador+1)}/>
      <Button title='Quitar' onPress={()=>setContador (Contador-1)}/>
      <Button title='Reiniciar' onPress={()=>setContador (Contador - Contador)}/>
      <StatusBar style="auto" /> 
    </View> // para que el componente sea visible simpre debe estar dentro de un View 
  );
}

//3. Estilos: Zona estetica y posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
