import { useEffect, useState } from "react";
import HomeHeroSection from "../components/section/home/HomeHeroSection";
import HomeTrendingSection from "../components/section/home/HomeTrendingSection";
import request from "../utils/request";

const tempHighlightMovie = {
  id: 868759,
  title: "Ghosted",
  genres: ["Action & Adventure", "Comedy", "Romance"],
  overview:
    "Salt-of-the-earth Cole falls head over heels for enigmatic Sadie — but then makes the shocking discovery that she’s a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.",
  releaseDate: "2023-04-18",
  poster: "https://image.tmdb.org/t/p/original/liLN69YgoovHVgmlHJ876PKi5Yi.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/b9UCfDzwiWw7mIFsIQR9ZJUeh7q.jpg",
};

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [highlightMovie, setHighlightMovie] = useState(null);

  useEffect(() => {
    request
      .get("movie/trending")
      .then((response) => {
        if (response.data?.statusCode === 200 || response.data?.statusCode === 201) {
          if (response.data.data.movies.length > 0) {
            setHighlightMovie(response.data.data.movies[0]);
            setTrendingMovies(response.data.data.movies.slice(1, 4));
          } else {
            setHighlightMovie(tempHighlightMovie);
          }
        } else {
          setHighlightMovie(tempHighlightMovie);
        }
      })
      .catch((error) => {
        console.error(error);
        setHighlightMovie(tempHighlightMovie);
      });
  }, []);

  return (
    <>
      {highlightMovie ? (
        <div className="w-full min-h-screen">
          <HomeHeroSection highlightMovie={highlightMovie} />
          <HomeTrendingSection trendingMovies={trendingMovies} />
        </div>
      ) : (
        <div className="min-h-screen bg-blue-950 flex justify-center items-center">
          <div className="w-8 h-8 bg-[#fac54e] rounded-full animate-bounce"></div>
          <p className="ml-3 text-white text-xl">Loading...</p>
        </div>
      )}
    </>
  );
}
