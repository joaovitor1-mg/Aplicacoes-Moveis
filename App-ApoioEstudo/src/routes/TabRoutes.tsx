import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import InicioScreen from '../screens/InicioScreen';
import HorariosScreen from '../screens/HorariosScreen';
import AjudaScreen from '../screens/AjudaScreen';
import { cores } from '../theme/cores';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: cores.branco,
        tabBarInactiveTintColor: cores.cinzaClaro,
        tabBarStyle: {
          backgroundColor: cores.azulInstitucional,
          height: 64,
        },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={InicioScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" size={28} color={color} />,
        }}
      />
      <Tab.Screen
        name="Horarios"
        component={HorariosScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="calendar" size={28} color={color} />,
        }}
      />
      <Tab.Screen
        name="Ajuda"
        component={AjudaScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="help-circle" size={28} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
