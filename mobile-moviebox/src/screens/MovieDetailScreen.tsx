import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../App';

type RouteProps = RouteProp<RootStackParamList, 'MovieDetail'>;

const moviesData: Record<string, { title: string; year: number; poster: string; overview: string; rating: number }> = {
  '1': { title: 'The Matrix', year: 1999, poster: 'https://picsum.photos/seed/matrix/600/900', overview: 'A computer programmer discovers that reality as he knows it is a simulation created by machines.', rating: 8.7 },
  '2': { title: 'Inception', year: 2010, poster: 'https://picsum.photos/seed/inception/600/900', overview: 'A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea.', rating: 8.8 },
  '3': { title: 'Interstellar', year: 2014, poster: 'https://picsum.photos/seed/interstellar/600/900', overview: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.', rating: 8.6 },
  '4': { title: 'The Dark Knight', year: 2008, poster: 'https://picsum.photos/seed/darkknight/600/900', overview: 'Batman raises the stakes in his war on crime with the help of Lt. Jim Gordon and District Attorney Harvey Dent.', rating: 9.0 },
  '5': { title: 'Pulp Fiction', year: 1994, poster: 'https://picsum.photos/seed/pulpfiction/600/900', overview: 'The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine in four tales of violence and redemption.', rating: 8.9 },
  '6': { title: 'Fight Club', year: 1999, poster: 'https://picsum.photos/seed/fightclub/600/900', overview: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club.', rating: 8.8 },
};

export default function MovieDetailScreen() {
  const route = useRoute<RouteProps>();
  const movie = moviesData[route.params.id];

  if (!movie) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Movie not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movie.poster }} style={styles.poster} />
      <View style={styles.content}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.year}>{movie.year}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.star}>★</Text>
          <Text style={styles.rating}>{movie.rating}</Text>
        </View>
        <Text style={styles.overview}>{movie.overview}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  poster: {
    width: '100%',
    aspectRatio: 2 / 3,
    backgroundColor: '#374151',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  year: {
    fontSize: 18,
    color: '#9CA3AF',
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  star: {
    fontSize: 24,
    color: '#FBBF24',
    marginRight: 8,
  },
  rating: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  overview: {
    fontSize: 16,
    color: '#D1D5DB',
    lineHeight: 24,
    marginTop: 16,
  },
  errorText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
});
