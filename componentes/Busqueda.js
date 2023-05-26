import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, Button, StyleSheet, Text, FlatList, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { getBuscarPeliculas } from '../Api/Services';
import { useNavigation } from '@react-navigation/native';



const Busqueda = () => {
  const navigation = useNavigation();
  const [id, setId] = useState('');
  const [resultado, setResultado] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const buscarPeli = async () => {
    try {
      const data = await getBuscarPeliculas(id);
      setResultado(data);
      setModalVisible(true);
    } catch (error) {
      console.error(error);
    }
  };
  const renderMovieItem = ({ item }) => (
    <View style={styles.container}>
    {resultado && (
      <>
        
       
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
            style={styles.tinyLogo}
            resizeMode="cover"
          />
              <View style={styles.Row}>
       <Text style={styles.Text} resizeMode="cover" >{item.title}</Text>
       <Text style={styles.description} resizeMode="cover" >{item.overview}</Text>
       </View>
      </>
      
    )}
  </View>
  );

  useEffect(() => {
   // buscarPeli();
  }, [id]);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={id}
        onChangeText={setId}
        placeholder="Buscar"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
      />

      <TouchableOpacity title="Buscar" onPress={buscarPeli} >
      <Image
            source={{ uri: `https://www.pngplay.com/wp-content/uploads/9/Loupe-Background-PNG.png` }}
            style={styles.search}
            resizeMode="cover"
          />
          </TouchableOpacity>
     
      <Modal  visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Resultados de la búsqueda</Text>
        <ScrollView>
            
         
          <View style={styles.container}>
        
    
    <FlatList
    style={styles.flat}
      data={resultado}
      renderItem={renderMovieItem}
      keyExtractor={(item) => item.id.toString()}
    />
    
  </View>
         
        
          </ScrollView>
        </View>
      </Modal>
      
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
  modalContainer: {
    flex: 1,
    backgroundColor: '#272727',
    position: "relative",
    top:5,
    paddingHorizontal: 10,
    paddingTop: 10,
    marginTop: -8,

    
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 45,
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
  },
  closeButton: {
    alignSelf: 'center',
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    top: 0,
    left: 0,
  },
  tinyLogo: {
    width: 100,
    height: 150,
    borderRadius: 10,
    marginRight: 15,
  },
  Text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold',
    width:240,
    
  },
  description: {
    position: "relative",
    color: "#fff",
    width:240,
    marginBottom: 10,
  },
  search:
  {
    width: 30,
    height: 30,
    borderRadius: 10,
    marginRight: 15,
  }
});

export default Busqueda;
