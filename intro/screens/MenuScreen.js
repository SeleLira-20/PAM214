import { Text, StyleSheet, View, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';

// Importar todas las pantallas según tus archivos
import BotonesScreens from './BotonesScreens';        // Buttons & Switch
import AlertScreens from './AlertScreens';           // Text Input & Alert
import SlapshScreens from './SlapshScreens';         // ImageBackground & SplashScreen
import ScrollViewScreens from './ScrollViewScreens'; // ScrollView
import ActivityIndicator from './ActivityIndicator'; // ActivityIndicator
import FlatListScreens from './FlatListScreens';     // FlatList & SectionList
import ModalScreens from './ModalScreens';           // Modal
import BottomSheetScreens from './BottomSheetScreens'; // Bottom Sheet
import ContadorScreens from './ContadorScreens';     // Contador (opcional si quieres)

export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch(screen) {
        case 'Buttons':
            return <BotonesScreens />;
        case 'TextInputAlert':
            return <AlertScreens />;
        case 'ImageBackground':
            return <SlapshScreens />;
        case 'ScrollView':
            return <ScrollViewScreens />;
        case 'ActivityIndicator':
            return <ActivityIndicator />;
        case 'FlatSectionList':
            return <FlatListScreens />;
        case 'Modal':
            return <ModalScreens />;
        case 'BottomSheet':
            return <BottomSheetScreens />;
        case 'Contador':
            return <ContadorScreens />;
        case 'menu':
        default:
            return (
                <ScrollView contentContainerStyle={styles.container}>
                    <Text style={styles.title}>Menu Practicas</Text>

                    <Button onPress={() => setScreen('Buttons')} title='Buttons & Switch: Rogelio Ivan' />
                    <Button onPress={() => setScreen('TextInputAlert')} title='Text Input & Alert: Santiago Antonio' />
                    <Button onPress={() => setScreen('ImageBackground')} title='ImageBackground & SplashScreen: Karla Sofia' />
                    <Button onPress={() => setScreen('ScrollView')} title='ScrollView: Isaac Alvarez' />
                    <Button onPress={() => setScreen('ActivityIndicator')} title='ActivityIndicator: Israel Esau' />
                    <Button onPress={() => setScreen('FlatSectionList')} title='FlatList & Section List: Carlos Chavez' />
                    <Button onPress={() => setScreen('Modal')} title='Modal: Yael Alejandro' />
                    <Button onPress={() => setScreen('BottomSheet')} title='Bottom Sheet: Valeria, Isabella' />
                    <Button onPress={() => setScreen('Contador')} title='Contador (opcional)' />
                </ScrollView>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});
