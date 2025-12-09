import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  Button,
  Alert,
  Dimensions,
  ImageBackground,
  StatusBar,
  SafeAreaView
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function GaleriaApp() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const imagenes = [
    { id: '1', uri: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df', titulo: 'Queretaro', categoria: 'ciudad', descripcion: 'Soleado tem 35 grados C' },
    { id: '2', uri: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000', titulo: 'Nuevo Leon', categoria: 'ciudad', descripcion: 'Nublado tem 19 grados C ' },
    { id: '3', uri: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390', titulo: 'Oaxaca', categoria: 'ciudad', descripcion: 'lluvia tem 25 grados C' },
    { id: '4', uri: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390', titulo: 'Monterrey', categoria: 'ciudad', descripcion: 'Lluvia tem 15 Grados C ' },
    { id: '5', uri: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df', titulo: 'Queretaro', categoria: 'ciudad', descripcion: 'Soleado tem 35 grados C' },
    { id: '6', uri: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000', titulo: 'Nuevo Leon', categoria: 'ciudad', descripcion: 'Nublado tem 19 grados C ' },
    { id: '7', uri: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390', titulo: 'Oaxaca', categoria: 'ciudad', descripcion: 'lluvia tem 25 grados C' },
    { id: '8', uri: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df', titulo: 'Queretaro', categoria: 'ciudad', descripcion: 'Soleado tem 35 grados C' },
    { id: '9', uri: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000', titulo: 'Nuevo Leon', categoria: 'ciudad', descripcion: 'Nublado tem 19 grados C ' },
    { id: '10', uri: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390', titulo: 'Monterrey', categoria: 'ciudad', descripcion: 'Lluvia tem 15 Grados C ' },
    { id: '11', uri: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df', titulo: 'Queretaro', categoria: 'ciudad', descripcion: 'Soleado tem 35 grados C' },
    { id: '12', uri: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000', titulo: 'Nuevo Leon', categoria: 'ciudad', descripcion: 'Nublado tem 19 grados C ' },
    { id: '13', uri: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390', titulo: 'Oaxaca', categoria: 'ciudad', descripcion: 'lluvia tem 25 grados C' },
  ];

  const abrirImagen = (imagen) => {
    setImagenSeleccionada(imagen);
    setModalVisible(true);
  };

  // Función para mostrar el Alert con el clima y la ciudad
  const mostrarDetallesClima = () => {
    if (imagenSeleccionada) {
      // Extraer información de la descripción
      const descripcion = imagenSeleccionada.descripcion;
      const ciudad = imagenSeleccionada.titulo;
      
      // Crear el mensaje del Alert
      const mensaje = `🌤️ **Información del Clima** 🌤️\n\n` +
                     `🏙️ **Ciudad:** ${ciudad}\n` +
                     `📊 **Condición:** ${descripcion}\n\n` +
                     `📍 Esta información es actualizada en tiempo real.`;
      
      Alert.alert(
        `Clima en ${ciudad}`,
        mensaje,
        [
          { 
            text: 'Cerrar', 
            style: 'cancel',
            onPress: () => console.log('Alert cerrado')
          },
          {
            text: 'Ver más detalles',
            onPress: () => {
              // Aquí podrías navegar a otra pantalla o mostrar más información
              console.log('Mostrar más detalles');
            }
          }
        ]
      );
    }
  };

  const ItemImagen = ({ item }) => (
    <TouchableOpacity 
      style={styles.itemContainer}
      onPress={() => abrirImagen(item)}
      activeOpacity={0.7}
    >
      <Image source={{ uri: item.uri }} style={styles.imagen} />
      <View style={styles.overlayTexto}>
        <Text style={styles.imagenTitulo}>{item.titulo}</Text>
        <Text style={styles.imagenCategoria}>{item.categoria}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#1a1a2e" />
      <ImageBackground
        source={{uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4'}}
        style={styles.background}
      >
        <View style={styles.overlay}>
         
          <View style={styles.header}>
            <Text style={styles.titulo}>CLIMA ACTUAL</Text>
            <Text style={styles.subtitulo}>
              {imagenes.length} imágenes disponibles
            </Text>
          </View>

          {/* GALERÍA DE IMÁGENES */}
          <FlatList
            data={imagenes}
            renderItem={ItemImagen}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={styles.lista}
            showsVerticalScrollIndicator={false}
            style={styles.galeriaLista}
            ListEmptyComponent={
              <View style={styles.vacioContainer}>
                <Text style={styles.vacioTexto}>
                  No hay imágenes disponibles
                </Text>
              </View>
            }
          />

          {/* MODAL DE IMAGEN DETALLADA */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                {imagenSeleccionada && (
                  <>
                    <Image 
                      source={{ uri: imagenSeleccionada.uri }} 
                      style={styles.imagenModal}
                      resizeMode="cover"
                    />
                    
                    <View style={styles.modalInfo}>
                      <Text style={styles.modalTitulo}>{imagenSeleccionada.titulo}</Text>
                      <View style={styles.categoriaModalBadge}>
                        <Text style={styles.categoriaModalTexto}>
                          {imagenSeleccionada.categoria}
                        </Text>
                      </View>
                    </View>
                    
                    <Text style={styles.modalDescripcion}>
                      {imagenSeleccionada.descripcion}
                    </Text>
                    
                    <View style={styles.modalBotones}>
                      <Button 
                        title="Ver detalles del clima" 
                        color="#e74c3c"
                        onPress={mostrarDetallesClima}
                      />
                      <View style={styles.espacioBoton} />
                      <Button 
                        title="Cerrar" 
                        color="#3498db"
                        onPress={() => setModalVisible(false)}
                      />
                    </View>
                  </>
                )}
              </View>
            </View>
          </Modal>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)',
  },
  header: {
    backgroundColor: 'rgba(26, 26, 46, 0.95)',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#3498db',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#64dfdf',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 14,
    color: '#8186A0',
    textAlign: 'center',
    marginBottom: 5,
  },
  galeriaLista: {
    flex: 1,
  },
  lista: {
    padding: 10,
    paddingBottom: 30,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    backgroundColor: '#2c3e50',
    maxWidth: (width / 2) - 15,
  },
  imagen: {
    width: '100%',
    height: 150,
    backgroundColor: '#34495e',
  },
  overlayTexto: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 10,
  },
  imagenTitulo: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  imagenCategoria: {
    color: '#3498db',
    fontSize: 11,
    fontStyle: 'italic',
  },
  vacioContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  vacioTexto: {
    fontSize: 18,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.95)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    maxHeight: '85%',
  },
  imagenModal: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 15,
  },
  modalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    flex: 1,
  },
  categoriaModalBadge: {
    backgroundColor: '#3498db',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  categoriaModalTexto: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  modalDescripcion: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 20,
    lineHeight: 22,
    textAlign: 'justify',
  },
  modalBotones: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  espacioBoton: {
    height: 10,
  },
});