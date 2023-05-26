import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { getPelisInfoId } from '../Api/Services';
import { useNavigation } from '@react-navigation/native';

const DetallePeli = ({ route }) => {
  const navigation = useNavigation();
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { id } = route.params;
        const data = await getPelisInfoId(id);
        setResultado(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [route.params]);

  const closeModal = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {resultado && (
        <>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${resultado.poster_path}` }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{resultado.title}</Text>
            <Text style={styles.overview}>{resultado.overview}</Text>
          </View>
        </>
      )}
      <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    
    backgroundColor: '#272727',
    
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  tinyLogo: {
    width: 100,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    
  },
  overview: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
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
  },
  image: {
    width: '100%',
    height: 600,
    marginTop: -300,
  },
});

export default DetallePeli;
