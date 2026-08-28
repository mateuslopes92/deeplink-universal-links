import Link from "next/link";

const movies = [
  { id: "1", title: "The Matrix", year: 1999, poster: "https://picsum.photos/seed/matrix/300/450" },
  { id: "2", title: "Inception", year: 2010, poster: "https://picsum.photos/seed/inception/300/450" },
  { id: "3", title: "Interstellar", year: 2014, poster: "https://picsum.photos/seed/interstellar/300/450" },
  { id: "4", title: "The Dark Knight", year: 2008, poster: "https://picsum.photos/seed/darkknight/300/450" },
  { id: "5", title: "Pulp Fiction", year: 1994, poster: "https://picsum.photos/seed/pulpfiction/300/450" },
  { id: "6", title: "Fight Club", year: 1999, poster: "https://picsum.photos/seed/fightclub/300/450" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-6 bg-gray-800">
        <h1 className="text-3xl font-bold">MovieBox</h1>
        <p className="text-gray-400">Discover your next favorite film</p>
      </header>
      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Popular Movies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <Link
              key={movie.id}
              href={`/movie/${movie.id}`}
              className="group block"
            >
              <div className="aspect-[2/3] bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="mt-2 font-medium">{movie.title}</h3>
              <p className="text-gray-400 text-sm">{movie.year}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
