import React, { useEffect } from 'react';
import { View, Text,TextInput,Button, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ListHome from '../componentes/ListHome';
import CateEstrenos from '../componentes/CateEstrenos';
import CateAccion from '../componentes/CateAccion';
import CateComedia from '../componentes/CateComedia';
import CateDrama from '../componentes/CateDrama';
import Busqueda from '../componentes/Busqueda';


const Home = () => {

  return (
    <View style={styles.container}>
        <ScrollView>
          
    <ListHome/>
   
    <CateEstrenos/>
   
    <CateAccion/>
    <CateComedia/>
    <CateDrama/>
   
    </ScrollView>

    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginVertical: -90,
      marginBottom: 0,
      paddingBottom: 10,
      backgroundColor: "#272727"
     
     
    },
  });

export default Home;
