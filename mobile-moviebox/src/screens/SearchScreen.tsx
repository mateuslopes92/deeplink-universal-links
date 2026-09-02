import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
import { getPopularMovies } from '../api';
import type { Movie } from '../api';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Search'>;

export default function SearchScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [query, setQuery] = useState('');
  const allMovies = getPopularMovies();

  const filteredMovies = query.length > 0
    ? allMovies.filter(m => m.title.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search movies..."
        placeholderTextColor="#6B7280"
        value={query}
        onChangeText={setQuery}
        autoFocus
      />
      {filteredMovies.length > 0 ? (
        <FlatList
          data={filteredMovies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.movieItem}
              onPress={() => navigation.navigate('MovieDetail', { id: item.id.toString() })}
            >
              <Image source={{ uri: item.poster_path }} style={styles.poster} />
              <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.year}>{new Date(item.release_date).getFullYear()}</Text>
                <Text style={styles.rating}>★ {item.vote_average.toFixed(1)}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : query.length > 0 ? (
        <View style={styles.center}>
          <Text style={styles.emptyText}>No movies found for "{query}"</Text>
        </View>
      ) : (
        <View style={styles.center}>
          <Text style={styles.hint}>Type to search movies</Text>
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
  input: {
    backgroundColor: '#1F2937',
    color: 'white',
    padding: 16,
    fontSize: 16,
    margin: 16,
    borderRadius: 8,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hint: {
    color: '#6B7280',
    fontSize: 16,
  },
  emptyText: {
    color: '#6B7280',
    fontSize: 16,
  },
  movieItem: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1F2937',
  },
  poster: {
    width: 50,
    height: 75,
    borderRadius: 4,
    backgroundColor: '#374151',
  },
  info: {
    marginLeft: 12,
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  year: {
    color: '#9CA3AF',
    fontSize: 14,
    marginTop: 2,
  },
  rating: {
    color: '#FBBF24',
    fontSize: 14,
    marginTop: 4,
  },
});
