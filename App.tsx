// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/pages/login/Login';
import UserProfile from './src/pages/profile/TelaInicial';
import CameraScreen from './src/pages/camera/CameraScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="User" component={UserProfile} options={{ title: 'Perfil do Usuário' }} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ title: 'Câmera' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
