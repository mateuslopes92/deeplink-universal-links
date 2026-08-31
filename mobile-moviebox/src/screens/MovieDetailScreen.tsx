import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../App';
import { getMovieById } from '../api';

type RouteProps = RouteProp<RootStackParamList, 'MovieDetail'>;

export default function MovieDetailScreen() {
  const route = useRoute<RouteProps>();
  const movie = getMovieById(route.params.id);

  if (!movie) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.errorText}>Movie not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movie.backdrop_path }} style={styles.backdrop} />
      <View style={styles.content}>
        <View style={styles.posterRow}>
          <Image source={{ uri: movie.poster_path }} style={styles.poster} />
          <View style={styles.info}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>
              {new Date(movie.release_date).getFullYear()} · {movie.runtime} min
            </Text>
            <View style={styles.genresContainer}>
              {movie.genres.map((genre) => (
                <View key={genre.id} style={styles.genreBadge}>
                  <Text style={styles.genreText}>{genre.name}</Text>
                </View>
              ))}
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.star}>★</Text>
              <Text style={styles.rating}>{movie.vote_average.toFixed(1)}</Text>
              <Text style={styles.votes}>({movie.vote_count.toLocaleString()})</Text>
            </View>
          </View>
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
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    width: '100%',
    height: 200,
    backgroundColor: '#374151',
  },
  content: {
    padding: 16,
  },
  posterRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: -60,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 8,
    backgroundColor: '#374151',
  },
  info: {
    flex: 1,
    paddingTop: 64,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  year: {
    fontSize: 16,
    color: '#9CA3AF',
    marginTop: 4,
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 8,
  },
  genreBadge: {
    backgroundColor: '#374151',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  genreText: {
    color: '#D1D5DB',
    fontSize: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  star: {
    fontSize: 20,
    color: '#FBBF24',
    marginRight: 6,
  },
  rating: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  votes: {
    fontSize: 14,
    color: '#9CA3AF',
    marginLeft: 6,
  },
  overview: {
    fontSize: 16,
    color: '#D1D5DB',
    lineHeight: 24,
    marginTop: 24,
  },
  errorText: {
    color: '#EF4444',
    fontSize: 16,
  },
});
