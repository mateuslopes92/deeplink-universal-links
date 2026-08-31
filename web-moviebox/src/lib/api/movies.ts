export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genres: { id: number; name: string }[];
  runtime: number;
}

const POSTER_BASE = 'https://image.tmdb.org/t/p/w500';
const BACKDROP_BASE = 'https://image.tmdb.org/t/p/w1280';

export const movies: Movie[] = [
  {
    id: 238,
    title: 'The Godfather',
    overview: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family.',
    poster_path: `${POSTER_BASE}/3bhkrj58Vtu7enYsRolD1fZdja1.jpg`,
    backdrop_path: `${BACKDROP_BASE}/tmU7GeKVybMWFButWEGl2M4GeiP.jpg`,
    release_date: '1972-03-14',
    vote_average: 8.7,
    vote_count: 19000,
    genres: [{ id: 18, name: 'Drama' }, { id: 80, name: 'Crime' }],
    runtime: 175,
  },
  {
    id: 680,
    title: 'Pulp Fiction',
    overview: 'A burger-loving hitman, his philosophical partner, a drug-addled gangster\'s moll and a washed-up boxer converge in this sprawling, comedic crime caper.',
    poster_path: `${POSTER_BASE}/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg`,
    backdrop_path: `${BACKDROP_BASE}/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg`,
    release_date: '1994-09-10',
    vote_average: 8.5,
    vote_count: 26000,
    genres: [{ id: 80, name: 'Crime' }, { id: 18, name: 'Drama' }],
    runtime: 154,
  },
  {
    id: 13,
    title: 'Forrest Gump',
    overview: 'A man with a low IQ has accomplished great things in his life and been present during significant historic events.',
    poster_path: `${POSTER_BASE}/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg`,
    backdrop_path: `${BACKDROP_BASE}/7c9UVPPiTPltouxRVY6N9uugaVA.jpg`,
    release_date: '1994-07-06',
    vote_average: 8.5,
    vote_count: 25000,
    genres: [{ id: 35, name: 'Comedy' }, { id: 18, name: 'Drama' }, { id: 10749, name: 'Romance' }],
    runtime: 142,
  },
  {
    id: 27205,
    title: 'Inception',
    overview: 'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life.',
    poster_path: `${POSTER_BASE}/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg`,
    backdrop_path: `${BACKDROP_BASE}/s3TBrRGB1iav7gFOCNx3H31MoES.jpg`,
    release_date: '2010-07-15',
    vote_average: 8.4,
    vote_count: 34000,
    genres: [{ id: 28, name: 'Action' }, { id: 878, name: 'Science Fiction' }, { id: 12, name: 'Adventure' }],
    runtime: 148,
  },
  {
    id: 603,
    title: 'The Matrix',
    overview: 'Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.',
    poster_path: `${POSTER_BASE}/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg`,
    backdrop_path: `${BACKDROP_BASE}/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg`,
    release_date: '1999-03-30',
    vote_average: 8.2,
    vote_count: 24000,
    genres: [{ id: 28, name: 'Action' }, { id: 878, name: 'Science Fiction' }],
    runtime: 136,
  },
  {
    id: 550,
    title: 'Fight Club',
    overview: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
    poster_path: `${POSTER_BASE}/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg`,
    backdrop_path: `${BACKDROP_BASE}/hZkgoQYus5dXo3H8T7Uef6DNknx.jpg`,
    release_date: '1999-10-15',
    vote_average: 8.4,
    vote_count: 28000,
    genres: [{ id: 18, name: 'Drama' }],
    runtime: 139,
  },
  {
    id: 278,
    title: 'The Shawshank Redemption',
    overview: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison.',
    poster_path: `${POSTER_BASE}/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg`,
    backdrop_path: `${BACKDROP_BASE}/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg`,
    release_date: '1994-09-23',
    vote_average: 8.7,
    vote_count: 25000,
    genres: [{ id: 18, name: 'Drama' }, { id: 80, name: 'Crime' }],
    runtime: 142,
  },
  {
    id: 155,
    title: 'The Dark Knight',
    overview: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations.',
    poster_path: `${POSTER_BASE}/qJ2tW6WMUDux911r6m7haRef0WH.jpg`,
    backdrop_path: `${BACKDROP_BASE}/nMKdUUepR0i5zn0y1T4CsSB5ez.jpg`,
    release_date: '2008-07-16',
    vote_average: 8.5,
    vote_count: 30000,
    genres: [{ id: 28, name: 'Action' }, { id: 80, name: 'Crime' }, { id: 18, name: 'Drama' }],
    runtime: 152,
  },
  {
    id: 120,
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    overview: 'Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator.',
    poster_path: `${POSTER_BASE}/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg`,
    backdrop_path: `${BACKDROP_BASE}/pIUvQ9Ed35wlWhY2oU6OmwEgzx.jpg`,
    release_date: '2001-12-18',
    vote_average: 8.3,
    vote_count: 23000,
    genres: [{ id: 12, name: 'Adventure' }, { id: 14, name: 'Fantasy' }, { id: 28, name: 'Action' }],
    runtime: 178,
  },
];

export function getMovieById(id: string): Movie | undefined {
  return movies.find(m => m.id === Number(id));
}

export function getPopularMovies(): Movie[] {
  return movies;
}
