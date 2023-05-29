import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { getPelisInfoId } from '../Api/Services';
import { useNavigation } from '@react-navigation/native';




const DetallePeli = ({ route }) => {
  const [productionCompanies, setProductionCompanies] = useState([]);
  const [Idioma, setIdioma] = useState([]);

  const navigation = useNavigation();
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { id } = route.params;
        const data = await getPelisInfoId(id);
        setResultado(data);
        setProductionCompanies(data.genres);
        setIdioma(data.spoken_languages);

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
          <ScrollView>

            <Text style={styles.title}>{resultado.title}</Text>
            <Text style={styles.overview}>{resultado.overview}</Text>
            <Text style={styles.Idioma}>Popularidad: </Text>
            <Text style={styles.overview}>{resultado.popularity}</Text>
            
            <Text style={styles.Idioma}>Idioma</Text>
            <FlatList
    style={styles.flat}
      data={Idioma}
      renderItem={({ item }) => (
        <View style={styles.productionCompanyContainer}>
  
          
          <Text style={styles.overview}>{item.name}a</Text>
        </View>
      )}      
      sliderWidth={400}
      itemWidth={200}
      layout="default"
      loop={true}
      autoplay={true}
      autoplayDelay={1000}
      autoplayInterval={3000}
    />
    

          <Text style={styles.Genero}>Genero</Text>
          <FlatList
    style={styles.flat}
      data={productionCompanies}
      renderItem={({ item }) => (
        <View style={styles.productionCompanyContainer}>
  
          
          <Text style={styles.overview}>{item.name}a</Text>
        </View>
      )}      
      sliderWidth={400}
      itemWidth={200}
      layout="default"
      loop={true}
      autoplay={true}
      autoplayDelay={1000}
      autoplayInterval={3000}
    />
    

    </ScrollView>

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
    backgroundColor: '#202634',
  },
  contentContainer: {
    flex: 1,
    padding: 10,
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 600,
    marginTop: -300,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    marginTop: 0,
    marginLeft: 20,
  },
  overview: {
    fontSize: 16,
    color: '#fff',
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
  flat1: {
    paddingLeft: 20,
    paddingVertical: 10,
    color: "#fff",


  }, Genero: {
    paddingLeft: 20,
    color: "#fff",
    fontSize:25,
  


  },Idioma : {
    paddingLeft: 20,
        color: "#fff",
        fontSize:25,
        paddingTop: 10


  }
});

export default DetallePeli;
