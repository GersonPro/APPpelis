import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home"
import { LinearGradient } from 'expo-linear-gradient';
import Busqueda from './componentes/Busqueda';
import ResultadosBusqueda from './screens/ResultadosBusqueda';
import DetallePeli from './screens/DetallePeli';

const Stack = createStackNavigator();

function MyStack() {
  const LogoTitle = () => (
    <View style={styles.logoContainer}>
      <Image
        source={require('./assets/Logo.png')}
        style={styles.logo}
      />
    </View>
  );

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: () => (
          <LinearGradient
            colors={['rgba(0,0,0,8.8)', 'transparent']}
            style={{ flex: 1 }}
          />
        ),
        headerStyle: {
          height: 90
        },
        headerTitleAlign: 'center',
        headerTitle: props => <LogoTitle {...props} />,
        headerRight: () => <Busqueda/>,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        
      />
      <Stack.Screen name="Busqueda" component={Busqueda} />
      <Stack.Screen name="ResultadosBusqueda" component={ResultadosBusqueda} />
      <Stack.Screen name="Detalle" component={DetallePeli} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="light" backgroundColor="#000" />
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202634',
  },
  logoContainer: {
    flex: 1,
    width: "100%",
    right: 140,
    marginTop: 8,
    
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 50,
    resizeMode: 'contain',
    alignItems: 'flex-start', // Justificar a la izquierda
    
    
  },
  
});
