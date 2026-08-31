export const TMDB_CONFIG = {
  IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
} as const;

export function getPosterUrl(path: string, size: 'w342' | 'w500' | 'w780' = 'w500'): string {
  return `${TMDB_CONFIG.IMAGE_BASE_URL}/${size}${path}`;
}

export function getBackdropUrl(path: string, size: 'w780' | 'w1280' = 'w1280'): string {
  return `${TMDB_CONFIG.IMAGE_BASE_URL}/${size}${path}`;
}
