import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import Home from './screens/home';
import Profile from './screens/profile';
import Settings from './screens/settings';
import Detalle from './screens/Detalle';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="ProfileMain" 
                component={Profile}
                options={{
                    title: 'Perfil de usuario',
                    headerStyle: {
                        backgroundColor: '#f8f8f8',
                    },
                    headerTintColor: '#000',
                }}
            />
            <Stack.Screen 
                name="Detalle" 
                component={Detalle}
                options={{
                    title: 'Details',
                    headerStyle: {
                        backgroundColor: '#f8f8f8',
                    },
                    headerTintColor: '#000',
                }}
            />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = 'home';
                        } else if (route.name === 'Profile') {
                            iconName = 'person';
                        } else if (route.name === 'Settings') {
                            iconName = 'settings';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#007AFF',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                        paddingBottom: 5,
                        height: 60,
                    },
                    headerStyle: {
                        backgroundColor: '#f8f8f8',
                    },
                    headerTintColor: '#000',
                })}
            >
                <Tab.Screen 
                    name="Home" 
                    component={Home}
                    options={{ title: 'Home' }}
                />
                <Tab.Screen 
                    name="Profile" 
                    component={ProfileStack}
                    options={{ 
                        title: 'Profile',
                        headerShown: false
                    }}
                />
                <Tab.Screen 
                    name="Settings" 
                    component={Settings}
                    options={{ title: 'Settings' }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}