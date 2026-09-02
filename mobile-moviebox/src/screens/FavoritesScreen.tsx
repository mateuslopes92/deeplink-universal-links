import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
import { getPopularMovies } from '../api';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Favorites'>;

const favoriteIds = [238, 680, 27205];

export default function FavoritesScreen() {
  const navigation = useNavigation<NavigationProp>();
  const allMovies = getPopularMovies();
  const favorites = allMovies.filter(m => favoriteIds.includes(m.id));

  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
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
              <Text style={styles.movieYear}>{new Date(item.release_date).getFullYear()}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View style={styles.center}>
          <Text style={styles.emptyText}>No favorites yet</Text>
          <Text style={styles.hint}>Movies you like will appear here</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  hint: {
    color: '#6B7280',
    fontSize: 14,
    marginTop: 8,
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
