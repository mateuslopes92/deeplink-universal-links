import Link from "next/link";

const moviesData: Record<string, { title: string; year: number; poster: string; overview: string; rating: number }> = {
  "1": { title: "The Matrix", year: 1999, poster: "https://picsum.photos/seed/matrix/600/900", overview: "A computer programmer discovers that reality as he knows it is a simulation created by machines.", rating: 8.7 },
  "2": { title: "Inception", year: 2010, poster: "https://picsum.photos/seed/inception/600/900", overview: "A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea.", rating: 8.8 },
  "3": { title: "Interstellar", year: 2014, poster: "https://picsum.photos/seed/interstellar/600/900", overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", rating: 8.6 },
  "4": { title: "The Dark Knight", year: 2008, poster: "https://picsum.photos/seed/darkknight/600/900", overview: "Batman raises the stakes in his war on crime with the help of Lt. Jim Gordon and District Attorney Harvey Dent.", rating: 9.0 },
  "5": { title: "Pulp Fiction", year: 1994, poster: "https://picsum.photos/seed/pulpfiction/600/900", overview: "The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine in four tales of violence and redemption.", rating: 8.9 },
  "6": { title: "Fight Club", year: 1999, poster: "https://picsum.photos/seed/fightclub/600/900", overview: "An insomniac office worker and a devil-may-care soap maker form an underground fight club.", rating: 8.8 },
};

export default async function MoviePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const movie = moviesData[id];

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
      <main className="p-6 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full md:w-80 rounded-lg shadow-lg"
          />
          <div>
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <p className="text-gray-400 text-xl mt-2">{movie.year}</p>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-yellow-400 text-2xl">★</span>
              <span className="text-2xl font-bold">{movie.rating}</span>
            </div>
            <p className="mt-6 text-lg leading-relaxed">{movie.overview}</p>
            <div className="mt-8">
              <a
                href={`moviebox://movie/${id}`}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium inline-block"
              >
                Open in Mobile App
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
