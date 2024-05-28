// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/pages/login/Login';
import UserProfile from './src/pages/profile/TelaInicial';
import CameraScreen from './src/pages/camera/CameraScreen';
import Home from './src/pages/Tela Pagamento/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="User" component={UserProfile} options={{ title: 'Perfil do Usuário' }} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ title: 'Câmera' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Tela de Pagamento' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
