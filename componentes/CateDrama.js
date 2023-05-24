// Importa los componentes y las funciones necesarias
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import { getPelisDrama } from '../Api/Services';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';


const CateDrama = () => {
    const [PelisDrama, setPelisDrama] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const PelisDramaData = await getPelisDrama();
          setPelisDrama(PelisDramaData);
          

        } catch (error) {
          console.error("Error:", error);
        }
      }
  
      fetchData();
    }, []);
  
    const renderMovieItem = ({ item }) => (
      <View style={styles.slide}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    );
  
    return (
      <View>
        <Text style={styles.Text}>Drama</Text>
        <Carousel
        
          style={styles.carousel}
          data={PelisDrama}
          renderItem={renderMovieItem}
          sliderWidth={360}
          itemWidth={130}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          activeSlideAlignment="start"
        />
      </View>
    );
  };
  
  // Estilos y exportación del componente
  const styles = StyleSheet.create({
    carousel: {
      // Estilos para el carrusel
      marginBottom: 20
    },
    slide: {
      // Estilos para cada elemento del carrusel
      
  
   
    },
    image: {
      width: 'auto',
      height: 200,
      zIndex: 0,
      marginTop: 20,
      marginLeft: 15,
      borderRadius: 12
    },
  
    
    Text: { 
      color: '#cfcfcf',
      fontSize: 25,
      marginLeft: 20,
      marginTop: 10,
      zIndex: 10
    },
  });
  
  export default CateDrama;
  