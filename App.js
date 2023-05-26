import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home"
import { LinearGradient } from 'expo-linear-gradient';
import Busqueda from './componentes/Busqueda';
import ResultadosBusqueda from './screens/ResultadosBusqueda';
import DetallePeli from './screens/DetallePeli';

const Stack = createStackNavigator();

function MyStack() {

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
      headerTitleStyle: {
        color: '#cfcfcf',
        fontSize: 25,
        
        marginBottom: 20
      },
    }}
  >
    
    <Stack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => ({
        title: 'Home',
        headerRight: () => <Busqueda/>,
      })}
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
      <Text>
      <StatusBar style="light" backgroundColor="#000" /> {'#fff'}
      </Text>
    <MyStack />
    </NavigationContainer>
    

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  header : {
  
  }
});
