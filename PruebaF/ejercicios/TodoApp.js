// TodoApp.js
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Alert,
  Modal,
  Switch,
  ScrollView
} from 'react-native';

export default function TodoApp() {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([
    { id: '1', texto: 'Aprender React Native', completada: true },
    { id: '2', texto: 'Estudiar para el examen', completada: false },
    { id: '3', texto: 'Preparar presentación', completada: false },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [tareaEditando, setTareaEditando] = useState(null);

  const agregarTarea = () => {
    if (tarea.trim() === '') {
      Alert.alert('Error', 'Escribe una tarea');
      return;
    }
    
    const nuevaTarea = {
      id: Date.now().toString(),
      texto: tarea,
      completada: false
    };
    
    setTareas([...tareas, nuevaTarea]);
    setTarea('');
    Alert.alert('Éxito', 'Tarea agregada');
  };

  const eliminarTarea = (id) => {
    Alert.alert(
      'Eliminar Tarea',
      '¿Estás seguro?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Eliminar', 
          onPress: () => {
            setTareas(tareas.filter(t => t.id !== id));
            Alert.alert('Eliminada', 'Tarea eliminada');
          }
        }
      ]
    );
  };

  const toggleCompletada = (id) => {
    setTareas(tareas.map(t => 
      t.id === id ? {...t, completada: !t.completada} : t
    ));
  };

  const abrirEditor = (item) => {
    setTareaEditando(item);
    setModalVisible(true);
  };

  const guardarEdicion = () => {
    if (tareaEditando.texto.trim() === '') {
      Alert.alert('Error', 'La tarea no puede estar vacía');
      return;
    }
    
    setTareas(tareas.map(t => 
      t.id === tareaEditando.id ? tareaEditando : t
    ));
    setModalVisible(false);
    setTareaEditando(null);
  };

  const ItemTarea = ({ item }) => (
    <View style={[styles.item, item.completada && styles.itemCompletada]}>
      <Switch
        value={item.completada}
        onValueChange={() => toggleCompletada(item.id)}
      />
      
      <Text style={[
        styles.textoItem,
        item.completada && styles.textoCompletado
      ]}>
        {item.texto}
      </Text>
      
      <View style={styles.botonesItem}>
        <TouchableOpacity 
          style={styles.botonEditar}
          onPress={() => abrirEditor(item)}
        >
          <Text style={styles.botonEditarTexto}>Editar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.botonEliminar}
          onPress={() => eliminarTarea(item.id)}
        >
          <Text style={styles.botonEliminarTexto}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📝 Lista de Tareas</Text>
      
      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder="Nueva tarea..."
          value={tarea}
          onChangeText={setTarea}
          onSubmitEditing={agregarTarea}
        />
        <Button title="Agregar" onPress={agregarTarea} />
      </View>

      {/* ESTADÍSTICAS */}
      <View style={styles.estadisticas}>
        <Text style={styles.estadistica}>
          Total: {tareas.length} | 
          Completadas: {tareas.filter(t => t.completada).length} | 
          Pendientes: {tareas.filter(t => !t.completada).length}
        </Text>
      </View>

      {/* LISTA DE TAREAS */}
      {tareas.length === 0 ? (
        <View style={styles.vacio}>
          <Text style={styles.textoVacio}>No hay tareas. ¡Agrega una!</Text>
        </View>
      ) : (
        <FlatList
          data={tareas}
          renderItem={ItemTarea}
          keyExtractor={item => item.id}
          style={styles.lista}
        />
      )}

      {/* MODAL PARA EDITAR */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitulo}>Editar Tarea</Text>
            
            {tareaEditando && (
              <>
                <TextInput
                  style={styles.inputModal}
                  value={tareaEditando.texto}
                  onChangeText={(texto) => 
                    setTareaEditando({...tareaEditando, texto})
                  }
                  multiline
                />
                
                <View style={styles.switchModal}>
                  <Text>Completada:</Text>
                  <Switch
                    value={tareaEditando.completada}
                    onValueChange={(valor) => 
                      setTareaEditando({...tareaEditando, completada: valor})
                    }
                  />
                </View>
                
                <View style={styles.botonesModal}>
                  <Button title="Guardar" onPress={guardarEdicion} />
                  <View style={styles.espacio} />
                  <Button 
                    title="Cancelar" 
                    onPress={() => setModalVisible(false)}
                    color="#999"
                  />
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginVertical: 20,
  },
  formulario: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginRight: 10,
    backgroundColor: 'white',
  },
  estadisticas: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  estadistica: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  lista: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
    elevation: 2,
  },
  itemCompletada: {
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
  },
  textoItem: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  textoCompletado: {
    textDecorationLine: 'line-through',
    color: '#6c757d',
  },
  botonesItem: {
    flexDirection: 'row',
  },
  botonEditar: {
    backgroundColor: '#17a2b8',
    padding: 8,
    borderRadius: 5,
    marginRight: 5,
  },
  botonEditarTexto: {
    color: 'white',
    fontSize: 12,
  },
  botonEliminar: {
    backgroundColor: '#dc3545',
    padding: 8,
    borderRadius: 5,
  },
  botonEliminarTexto: {
    color: 'white',
    fontSize: 12,
  },
  vacio: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoVacio: {
    fontSize: 18,
    color: '#6c757d',
    fontStyle: 'italic',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 25,
    width: '90%',
  },
  modalTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2c3e50',
  },
  inputModal: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  switchModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  botonesModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  espacio: {
    width: 10,
  },
});