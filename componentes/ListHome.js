import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { getPelisInfo } from '../Api/Services';

const Home = () => {
  const [pelisList, setPelisList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchData() {
      const pelisData = await getPelisInfo();
      setPelisList(pelisData);
    }

    fetchData();
  }, []);

  const handleMoviePress = (id) => {
    navigation.navigate('Detalle', { id });
  };

  const renderMovieItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleMoviePress(item.id)}>
        <View style={styles.slide}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
            style={styles.image}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 8, 8)']}
            style={styles.titleBackground}
            resizeMode="cover"
          >
            <Text style={styles.Text} resizeMode="cover">{item.title}</Text>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Carousel
        style={styles.carousel}
        data={pelisList}
        renderItem={renderMovieItem}
        sliderWidth={360}
        itemWidth={360}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    // Estilos para el carrusel
  },
  slide: {
    // Estilos para cada elemento del carrusel
  },
  image: {
    width: 'auto',
    height: 600,
    marginTop: -200,
    zIndex: 0
  },
  Text: {
    color: '#cfcfcf',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 30,
    zIndex: 10
  },
  titleBackground: {
    position: 'absolute',
    top: 300,
    left: 0,
    right: 0,
    height: 100,
  }
});

export default Home;
