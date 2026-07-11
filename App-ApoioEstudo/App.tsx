import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './src/routes/TabRoutes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <TabRoutes />
    </NavigationContainer>
  );
}
