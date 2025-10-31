import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Switch,
  ImageBackground,
  StyleSheet,
  Alert,
  SafeAreaView,
  Platform,
  Modal,
  TouchableOpacity,
} from "react-native";

export default function Repaso() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const showAlert = (title, message) => {
    if (Platform.OS === "web") {
      window.alert(`${title}\n\n${message}`);
      return;
    }
    // En iOS/Android usar Alert nativo
    Alert.alert(title, message, [{ text: "OK" }], { cancelable: false });
  };

  const showModalFallback = (title, message) => {
    setModalText(`${title}\n\n${message}`);
    setModalVisible(true);
  };

  const registrar = () => {
    console.log("registrar llamado", { nombre, correo, aceptaTerminos });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre.trim() === "") {
      showAlert("Error", "Por favor coloca el nombre.");
      return;
    }
    if (correo.trim() === "") {
      showAlert("Error", "Por favor coloca el correo.");
      return;
    }
    if (!emailRegex.test(correo)) {
      showAlert("Error", "Por favor coloca el correo de manera correcta.");
      return;
    }
    if (!aceptaTerminos) {
      showAlert("Error", "Debes aceptar los términos y condiciones.");
      return;
    }

    showAlert(
      "Registro exitoso",
      `Hola ${nombre}, tu registro fue completado.\nCorreo: ${correo}`
    );

    setNombre("");
    setCorreo("");
    setAceptaTerminos(false);
  };

  if (showSplash) {
    return (
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=80",
        }}
        style={styles.splashContainer}
      >
        <Text style={styles.splashText}>¡Bienvenido a la App!</Text>
      </ImageBackground>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: "https://wallpapercave.com/wp/wp3850825.jpg",
        }}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Registro de Usuario</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            placeholderTextColor="#999"
            value={nombre}
            onChangeText={setNombre}
          />

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={correo}
            onChangeText={setCorreo}
          />

          <View style={styles.switchContainer}>
            <Text style={{ color: "#fff" }}>Aceptar términos:</Text>
            <Switch
              value={aceptaTerminos}
              onValueChange={setAceptaTerminos}
              thumbColor={aceptaTerminos ? "#00c853" : "#ccc"}
            />
          </View>

          <Button title="Registrar" color="#6200ee" onPress={registrar} />
        </View>

        {/* Modal fallback opcional */}
        <Modal
          visible={modalVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalBox}>
              <Text style={{ marginBottom: 15 }}>{modalText}</Text>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.modalButton}
              >
                <Text style={{ color: "#fff" }}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  splashText: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 15,
    borderRadius: 10,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 20,
    borderRadius: 15,
    width: "90%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalButton: {
    backgroundColor: "#6200ee",
    padding: 10,
    borderRadius: 8,
    alignSelf: "flex-end",
  },
});
