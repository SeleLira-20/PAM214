import { Text, StyleSheet, View, Pressable, TouchableOpacity, TouchableNativeFeedback, Switch } from 'react-native';
import { useState } from 'react';

export default function BotonesScreens() {
  const [Accion, setAccion] = useState('nada');
  const [isDisabled, setIsDisable] = useState (false);

  return (
    <View style={styles.container}>
      <Text>
        Activado
      </Text>
      <Switch
      onValueChange={(valor) => setIsDisable(!isDisabled)}
      value={!isDisabled}
      />

      <Text>{Accion}</Text>


      <View style={styles.buttonsContainer}>
        <Pressable
          onPressIn={() => setAccion('Pressable In')}
          onPressOut={() => setAccion('Pressable Out')}
          onLongPress={() => setAccion('Pressable Long')}
          disabled={isDisabled}
        >
          {({ pressed }) => (
            <View style={[styles.card, !pressed && styles.shadow]}>
              <View style={styles.mockImage} />
              <Text>
                {pressed ? 'Tarjeta presionada.' : 'Tarjeta no presionada'}
              </Text>
            </View>
          )}
        </Pressable>

        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => setAccion('Opacity')}
          disabled={isDisabled}
        >
          <View style={[styles.card, styles.shadow]}>
            <View style={[styles.mockImage]} />
            <Text>Esta es una tarjeta</Text>
          </View>
        </TouchableOpacity>

        <TouchableNativeFeedback
          onPress={() => setAccion('Without Feedback')}
          disabled={isDisabled}
        >
          <View style={[styles.card, styles.shadow]}>
            <View style={[styles.mockImage]} />
            <Text>Esta es una tarjeta</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // 🔹 Nuevo estilo para centrar los botones
  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 200,
    height: 250,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 8,
    margin: 15,
  },
  mockImage: {
    flex: 1,
    backgroundColor: 'gray',
    marginBottom: 8,
    borderRadius: 8,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 10,
  },
});
