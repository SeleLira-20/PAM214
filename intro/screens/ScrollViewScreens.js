import { Text, StyleSheet, View, Pressable, TouchableOpacity, RefreshControl } from 'react-native';
import { useState } from "react";
import { Switch, TouchableWithoutFeedback, ScrollView} from 'react-native';

export default function BotonesScreen(){
  const [accion, setAccion] = useState('nada');
  const [isDisabled, setDisabled] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      stickyHeaderIndices={[0]}
    >
      <View style={styles.header}>
        <Text>Activado</Text>
        <Switch
          onValueChange={() => setDisabled(!isDisabled)}
          value={isDisabled}
        />
        <Text>{accion}</Text>
      </View>

      <View style={styles.content}>
        {/* Tarjeta 1 */}
        <Pressable
          disabled={isDisabled}
          onPressIn={() => setAccion('Pressable In')}
          onPressOut={() => setAccion('Pressable Out')}
          onLongPress={() => setAccion('Pressable Long')}
        >
          {({ pressed }) => (
            <View style={[styles.card, !pressed && styles.shadow]}>
              <View style={styles.mockImage}></View>
              <Text>
                {pressed ? 'Tarjeta presionada.' : 'Tarjeta no presionada'}
              </Text>
            </View>
          )}
        </Pressable>

        {/* Tarjeta 2 */}
        <TouchableOpacity
          disabled={isDisabled}
          activeOpacity={0.1}
          onPress={() => setAccion('Opacity')}
        >
          <View style={[styles.card, styles.shadow]}>
            <View style={styles.mockImage}/>
            <Text>Esta es una tarjeta.</Text>
          </View>
        </TouchableOpacity>

        {/* Tarjeta 3 */}
        <TouchableWithoutFeedback
          disabled={isDisabled}
          onPress={() => setAccion('Without Feedback')}
        >
          <View style={[styles.card, styles.shadow]}>
            <View style={styles.mockImage}/>
            <Text>Esta es una tarjeta.</Text>
          </View>
        </TouchableWithoutFeedback>

        {/* Tarjeta 4 */}
        <TouchableOpacity
          disabled={isDisabled}
          onPress={() => setAccion('Tarjeta 4 presionada')}
        >
          <View style={[styles.card, styles.shadow]}>
            <View style={styles.mockImage}/>
            <Text>Tarjeta número 4.</Text>
          </View>
        </TouchableOpacity>

        {/* Tarjeta 5 */}
        <TouchableOpacity
          disabled={isDisabled}
          onPress={() => setAccion('Tarjeta 5 presionada')}
        >
          <View style={[styles.card, styles.shadow]}>
            <View style={styles.mockImage}/>
            <Text>Tarjeta número 5.</Text>
          </View>
        </TouchableOpacity>

        {/* Tarjeta 6 */}
        <TouchableOpacity
          disabled={isDisabled}
          onPress={() => setAccion('Tarjeta 6 presionada')}
        >
          <View style={[styles.card, styles.shadow]}>
            <View style={styles.mockImage}/>
            <Text>Tarjeta número 6.</Text>
          </View>
        </TouchableOpacity>

        {/* Tarjeta 7 */}
        <TouchableOpacity
          disabled={isDisabled}
          onPress={() => setAccion('Tarjeta 7 presionada')}
        >
          <View style={[styles.card, styles.shadow]}>
            <View style={styles.mockImage}/>
            <Text>Tarjeta número 7.</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f7f7f7',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  content: {
    alignItems: 'center',
    backgroundColor: '#cbd2d0ff',
    paddingTop: 10,
  },
  card: {
    width: 200,
    height: 250,
    backgroundColor: 'white',
    padding: 20,
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