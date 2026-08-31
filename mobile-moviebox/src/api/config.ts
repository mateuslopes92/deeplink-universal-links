export const TMDB_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
  API_KEY: '',  // Set your TMDB API key here or use react-native-config
  POSTER_SIZES: {
    small: 'w342',
    medium: 'w500',
    large: 'w780',
    original: 'original',
  },
  BACKDROP_SIZES: {
    small: 'w780',
    medium: 'w1280',
    large: 'original',
  },
} as const;

export function getPosterUrl(path: string, size: keyof typeof TMDB_CONFIG.POSTER_SIZES = 'medium'): string {
  return `${TMDB_CONFIG.IMAGE_BASE_URL}/${TMDB_CONFIG.POSTER_SIZES[size]}${path}`;
}

export function getBackdropUrl(path: string, size: keyof typeof TMDB_CONFIG.BACKDROP_SIZES = 'medium'): string {
  return `${TMDB_CONFIG.IMAGE_BASE_URL}/${TMDB_CONFIG.BACKDROP_SIZES[size]}${path}`;
}
