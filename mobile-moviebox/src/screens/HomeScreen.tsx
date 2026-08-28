import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const movies = [
  { id: '1', title: 'The Matrix', year: 1999, poster: 'https://picsum.photos/seed/matrix/300/450' },
  { id: '2', title: 'Inception', year: 2010, poster: 'https://picsum.photos/seed/inception/300/450' },
  { id: '3', title: 'Interstellar', year: 2014, poster: 'https://picsum.photos/seed/interstellar/300/450' },
  { id: '4', title: 'The Dark Knight', year: 2008, poster: 'https://picsum.photos/seed/darkknight/300/450' },
  { id: '5', title: 'Pulp Fiction', year: 1994, poster: 'https://picsum.photos/seed/pulpfiction/300/450' },
  { id: '6', title: 'Fight Club', year: 1999, poster: 'https://picsum.photos/seed/fightclub/300/450' },
];

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>MovieBox</Text>
      <Text style={styles.subtitle}>Discover your next favorite film</Text>
      <FlatList
        data={movies}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.movieCard}
            onPress={() => navigation.navigate('MovieDetail', { id: item.id })}
          >
            <Image source={{ uri: item.poster }} style={styles.poster} />
            <Text style={styles.movieTitle}>{item.title}</Text>
            <Text style={styles.movieYear}>{item.year}</Text>
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
