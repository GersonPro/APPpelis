import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text,FlatList,ScrollView  } from 'react-native';
import { getBuscarPeliculas } from '../Api/Services';

const Busqueda = () => {
  const [id, setId] = useState('');
  const [resultado, setResultado] = useState(null);

  const buscarPeli = async () => {
    try {
      const data = await getBuscarPeliculas(id);
      setResultado(data);
    } catch (error) {
      console.error(error);
    }
  };
  const renderMovieItem = ({ item }) => (
    <View style={styles.container}> 
 
    {resultado && (
        <><Text style={styles.title}>a {JSON.stringify(item.title)}</Text>
        <Text style={styles.text}> {JSON.stringify(item.name)}</Text></>
      )}
   
  </View>
  );

  return (
    <View style={styles.container}>
        
       <TextInput
      style={styles.input}
      value={id}
      onChangeText={setId}
      placeholder="Buscar"
      placeholderTextColor="rgba(255, 255, 255, 0.5)"
    />
    <Button style={styles.butom} title="Buscar" onPress={buscarPeli} />
    <FlatList
    style={styles.flat}
      data={resultado}
      renderItem={renderMovieItem}
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 5,
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    
  
},
  butom: {
    



  },
  flat: { 
    backgroundColor: "#fff",
    position: "relative",
    top: 55,
    height: "100%"
  }
});

export default Busqueda;