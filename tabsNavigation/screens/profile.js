import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Profile({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Ionicons name="person-circle-outline" size={80} color="green" />
                <Text style={styles.title}>Perfil de usuario</Text>
                
                <TouchableOpacity 
                    style={styles.detailButton}
                    onPress={() => navigation.navigate('Detalle')}
                >
                    <Text style={styles.detailButtonText}>Detalles de usuario</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        color: 'green',
    },
    detailButton: {
        backgroundColor: 'green',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 25,
        marginTop: 20,
    },
    detailButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});