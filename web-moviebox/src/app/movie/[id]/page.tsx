import Link from "next/link";
import { getMovieById } from "@/lib/api";

export default async function MoviePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const movie = getMovieById(id);

  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Movie Not Found</h1>
          <Link href="/" className="text-blue-400 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-6 bg-gray-800">
        <Link href="/" className="text-blue-400 hover:underline">
          &larr; Back to Home
        </Link>
      </header>
      <main>
        <div className="relative h-64 md:h-96">
          <img
            src={movie.backdrop_path}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        </div>
        <div className="p-6 max-w-4xl mx-auto -mt-32 relative z-10">
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src={movie.poster_path}
              alt={movie.title}
              className="w-full md:w-80 rounded-lg shadow-lg"
            />
            <div>
              <h1 className="text-4xl font-bold">{movie.title}</h1>
              <p className="text-gray-400 text-xl mt-2">
                {new Date(movie.release_date).getFullYear()} · {movie.runtime} min
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-yellow-400 text-2xl">★</span>
                <span className="text-2xl font-bold">{movie.vote_average.toFixed(1)}</span>
                <span className="text-gray-400">({movie.vote_count.toLocaleString()} votes)</span>
              </div>
              <p className="mt-6 text-lg leading-relaxed">{movie.overview}</p>
              <div className="mt-8">
                <a
                  href={`moviebox://movie/${movie.id}`}
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium inline-block"
                >
                  Open in Mobile App
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
