import { Link, useParams } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import NotFound from "./NotFound";
import { formatDate } from "../utils/formatDate";
import MovieCard from "../components/card/MovieCard";
import { useEffect, useState } from "react";
import request from "../utils/request";

export default function DetailMoviePage() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const id = params.id;

  useEffect(() => {
    setIsLoading(true);

    request
      .get(`movie/show/${id}`)
      .then((response) => {
        if (response.data?.statusCode === 200 || response.data?.statusCode === 201) {
          if (response.data.data.movie) {
            setData(response.data.data.movie);
          } else {
            setData({});
          }
        } else {
          setData({});
        }
      })
      .catch((error) => {
        console.error(error);
        setData({});
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (!id) return <NotFound />;

  return (
    <>
      <div className="bg-blue-950 min-h-screen">
        {isLoading ? (
          <>
            <div className="w-full h-screen flex justify-center items-center">
              <div className="w-8 h-8 bg-[#fac54e] rounded-full animate-bounce"></div>
              <p className="ml-3 text-white text-xl">Loading...</p>
            </div>
          </>
        ) : (
          <div className="pb-28 lg:pt-28 pt-24 max-w-screen-xl px-4 mx-auto">
            {!data && <h1 className="font-medium text-2xl text-left text-white">Data not found.</h1>}
            <section className="flex md:flex-row flex-col gap-10">
              <img className="max-w-72 h-full rounded-lg" src={data.poster} alt={data.title} />

              <div className="flex flex-col w-full justify-center">
                <h1 className="font-bold md:text-3xl text-2xl text-left text-white mt-1">{data.title}</h1>

                <div className="mt-10">
                  <div className="flex flex-row flex-wrap gap-3">
                    {data.genres.map((genre, index) => {
                      return (
                        <div key={index} className="bg-[#fac54e] py-1 px-4 rounded-xl w-max">
                          <h3 className="text-gray-800 md:text-base text-sm font-normal">{genre}</h3>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-row gap-3 mt-3">
                    <div className="flex flex-row gap-1 text-white sm:text-base text-sm justify-center items-center">
                      <FaCalendarAlt />
                      <h4>{data.releaseDate ? formatDate(data.releaseDate) : "-"}</h4>
                    </div>
                    <div className="flex flex-row gap-1 text-white sm:text-base text-sm justify-center items-center">
                      <FaStar />
                      <h4>{data.vote ? data.vote.toFixed(1) : "-"}</h4>
                    </div>
                  </div>

                  <p className="text-white mt-8 text-sm md:text-base">{data.overview ? data.overview : "No overview data"}</p>

                  <div className="mt-10">
                    <Link
                      target="_blank"
                      to={data.trailerLink ? data.trailerLink : "https://www.youtube.com/"}
                      className="text-gray-800 px-5 py-3 bg-[#fac54e] hover:bg-[#d6a940] hover:text-gray-700 transition font-medium rounded-lg md:text-base text-sm"
                    >
                      Watch Trailer
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-14">
              <h1 className="font-medium text-2xl text-left text-white">Related Movies</h1>

              <div className="grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4 place-items-baseline mt-5 ">
                {data.relatedMovies.map((movie) => {
                  return <MovieCard key={movie.id} data={movie} />;
                })}
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
}
