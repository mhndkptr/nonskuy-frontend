import { useNavigate } from "react-router-dom";
import TrendingMovieCard from "../../card/TrendingMovieCard";

export default function HomeTrendingSection({ trendingMovies }) {
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
          className="text-gray-800 px-5 py-2 bg-[#fac54e] hover:bg-[#d6a940] hover:text-gray-700 transition font-medium rounded-lg"
        >
          See More
        </button>
      </section>
    </>
  );
}
