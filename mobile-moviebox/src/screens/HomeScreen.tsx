import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
import { getPopularMovies } from '../api';
import type { Movie } from '../api';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const movies = getPopularMovies();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>MovieBox</Text>
      <Text style={styles.subtitle}>Discover your next favorite film</Text>
      <FlatList
        data={movies}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.movieCard}
            onPress={() => navigation.navigate('MovieDetail', { id: item.id.toString() })}
          >
            <Image source={{ uri: item.poster_path }} style={styles.poster} />
            <Text style={styles.movieTitle} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.movieYear}>
              {new Date(item.release_date).getFullYear()}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    padding: 16,
    paddingBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#9CA3AF',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  list: {
    padding: 8,
  },
  movieCard: {
    flex: 1,
    margin: 8,
    maxWidth: '45%',
  },
  poster: {
    width: '100%',
    aspectRatio: 2 / 3,
    borderRadius: 8,
    backgroundColor: '#374151',
  },
  movieTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
  },
  movieYear: {
    color: '#9CA3AF',
    fontSize: 12,
  },
});
