//1.imports:Zona de las importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';
//2. main: Zona de componentes 
export default function ContadorScreens() { //aqui podemos ver la vista de la app
  const[Contador, setContador]=useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contador:</Text>
      <Text style={styles.texto2}> {Contador}</Text>

      <View style={styles.contenedorBotones}>
      <Button color="red" title='Agregar' onPress={()=>setContador (Contador+1)}/>
      <Button color="purple" title='Quitar' onPress={()=>setContador (Contador-1)}/>
      <Button color="turquoise" title='Reiniciar' onPress={()=>setContador (Contador - Contador)}/>
      </View>
      <StatusBar style="auto" /> 
    </View> // para que el componente sea visible simpre debe estar dentro de un View 
  );
}

//3. Estilos: Zona estetica y posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1, //asigna los espacios para la vista y pocisionamineto 
    backgroundColor: '#cb396cff', //colores (instalar la extencion color bi)
    alignItems: 'center', // posionar lo que ves en la pantalla derecha, iszaquierda eje x
    justifyContent: 'center', //posicionar lo que vemos en la pantalla arriba o abajo, eje y 
    // star (arriba, izaquierda), end (abajo, derecha)
  }, // importante colocar la coma 

  texto:{
    color:'#370fe8ff', //color del texto
    fontSize:30,
    fontFamily: 'Time New Roman', // cambiar la letra 
    fontWeight: 'bold', //negrita
    fontStyle: 'italic',//se haga de lado 
    textDecorationLine: 'line-through',

  },
  texto2:{
    color:'#4bbeefff', //color del texto
    fontSize:40,
    fontFamily: 'Courier', // cambiar la letra 
    fontWeight: '900', 
    textDecorationLine: 'unerLine',
  },

  contenedorBotones:{
    marginTop: 15,
    flexDirection: 'row',
    gap:15
  }
  });
