import { useNavigate } from "react-router-dom";
import TrendingMovieCard from "../../card/TrendingMovieCard";

const trendingMovies = [
  {
    id: 695721,
    title: "The Hunger Games: The Ballad of Songbirds & Snakes",
    genres: ["Action & Adventure", "Action & Adventure", "Sci-Fi & Fantasy"],
    overview: "Years before he becomes the tyrannical president of Panem, 18-year-old Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
    releaseDate: "2023-11-15",
    poster: "https://image.tmdb.org/t/p/original/jFXj9rh8EoSAHcYTBJYv1ir6X3A.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/yj2SVz5I2HuQD84g633W2tijtKi.jpg",
  },
  {
    id: 820525,
    title: "After Everything",
    genres: ["Romance", "Drama"],
    overview: "The sequel to 'After Ever Happy' (2022), which was based on the 2015 novel of same title by Anna Todd, wherein Hardin and Tessa are separated.",
    releaseDate: "2023-09-13",
    poster: "https://image.tmdb.org/t/p/original/d0qw9hiNwhRmfw4yAc44pep6vhz.jpg",
    backdrop: "https://image.tmdb.org/t/p/originalnull",
  },
  {
    id: 799258,
    title: "السرب",
    genres: ["Action & Adventure", "War", "Thriller"],
    overview:
      "Based on actual events and the efforts of the Egyptian National Security Authorities against terrorist organizations through the incident of the massacre of 21 Egyptians in Libya and the army’s expanding operations in order to confront these terrorist groups.",
    releaseDate: "2023-06-28",
    poster: "https://image.tmdb.org/t/p/original/yQ3UAsUD9OsG6aA4jIE50dTg7CU.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/bW3ZAOAM08KeAQkXd4BmM7Typn.jpg",
  },
];

export default function HomeTrendingSection() {
  const navigate = useNavigate();

  return (
    <>
      <section className="bg-blue-950 py-32 px-4 flex flex-col justify-center items-center gap-12">
        <h1 className="font-extrabold text-3xl text-center text-white">Trending Movies</h1>

        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10 place-items-center justify-items-center">
            {trendingMovies.map((movie) => {
              return <TrendingMovieCard key={movie.id} data={movie} />;
            })}
          </div>
        </div>

        <button
          onClick={() => {
            navigate("/movie/trending");
          }}
          className="text-gray-800 px-5 py-2 bg-[#fac54e] hover:bg-[#d6a940] hover:text-white transition font-medium rounded-lg"
        >
          See More
        </button>
      </section>
    </>
  );
}
