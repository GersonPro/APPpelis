import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ResultadosBusqueda = ({ resultados }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultados de búsqueda:</Text>
      {resultados && resultados.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.text}>{item.name}</Text>
          
        </View>
      ))}

      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
      );
    };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
      
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    itemContainer: {
      marginBottom: 5,
    },
    text: {
      fontSize: 16,
    },
  });
  
  export default ResultadosBusqueda;