import { useSearchParams } from "react-router-dom";
import NotFound from "./NotFound";
import MovieCard from "../components/card/MovieCard";
import { useEffect, useState } from "react";
import request from "../utils/request";
import Collapse from "../components/Collapse";
import AnalyticsChart from "../components/AnalyticsChart";

export default function SearchAnalyticsMoviePageResult() {
  const [resultMovies, setResultMovies] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [queryParameters] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  //   const query = queryParameters.get("query");
  //   const inputSize = queryParameters.get("input_size");
  const [finishQuery, setFinishQuery] = useState("");
  const [query, setQuery] = useState(queryParameters.get("query"));
  const [inputSize, setInputSize] = useState(queryParameters.get("input_size"));

  useEffect(() => {
    if (query && query.length > 0 && inputSize && inputSize > 0) {
      setIsLoading(true);
      request
        .post(`movie/search`, {
          query: query,
          totalRecordUse: parseInt(inputSize),
        })
        .then((response) => {
          if (response.data?.statusCode === 200 || response.data?.statusCode === 201) {
            if (response.data.data.movies.length > 0) {
              setResultMovies(response.data.data.movies);
            } else {
              setResultMovies([]);
            }
            setAnalytics(response.data.data.analytics);
          } else {
            setResultMovies([]);
          }
        })
        .catch((error) => {
          console.error(error);
          setResultMovies([]);
        })
        .finally(() => {
          setIsLoading(false);
          setFinishQuery(query);
        });
    }
  }, []);

  //   if (!query) return <NotFound />;
  //   if (!inputSize) return <NotFound />;

  return (
    <>
      <div className="bg-blue-950 min-h-screen">
        {isLoading ? (
          <div className="w-full h-screen flex justify-center items-center">
            <div className="w-8 h-8 bg-[#fac54e] rounded-full animate-bounce"></div>
            <p className="ml-3 text-white text-xl">Loading...</p>
          </div>
        ) : (
          <section className="pb-28 lg:pt-28 pt-24 max-w-screen-xl px-4 mx-auto">
            <div className="flex items-center md:gap-5 gap-2">
              <form className="w-full flex md:flex-row flex-col md:items-center md:gap-5 gap-2" method="GET" action="/movie/search-analytics/result">
                <div className="flex md:items-center items-start gap-2 md:gap-5 md:flex-row flex-col">
                  <h1 className="font-bold md:text-2xl text-xl text-left text-white">SEARCH</h1>
                  <div className="lg:w-[600px] md:w-[500px] sm:w-[400px]">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        name="query"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search movie..."
                        value={query}
                        required
                        onChange={(e) => setQuery(e.target.value)}
                      />
                      <button
                        type="submit"
                        className="text-gray-800 hover:text-gray-700 absolute end-2.5 bottom-2.5 bg-[#fac54e] hover:bg-[#d6a940] focus:ring-2 focus:outline-none focus:ring-[#ffce5c] font-medium rounded-lg text-sm px-4 py-2 transition"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex md:items-center items-start gap-2 md:gap-5 md:flex-row flex-col">
                  <h1 className="font-bold md:text-xl text-lg text-left text-white">Input Size</h1>
                  <div className="flex flex-col items-center">
                    <input
                      type="number"
                      id="input-size"
                      name="input_size"
                      className="block max-w-44 px-4 py-3 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Input size limit..."
                      required
                      value={inputSize}
                      onChange={(e) => setInputSize(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </div>

            <Collapse title={"View Analytics"}>
              <div className="w-full mx-auto">
                <AnalyticsChart analytics={analytics} />
              </div>

              <div className="mt-3">
                <h1 className="text-blue-950 lg:text-3xl sm:text-2xl text-xl font-bold">Algorithm</h1>

                <div className="grid lg:grid-cols-2 mt-3 gap-3">
                  {analytics.results.map((item, index) => {
                    return (
                      <div key={index} className="relative lg:col-span-1 w-full flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg">
                        <div className="mb-0 border-b border-slate-200 py-3 px-4">
                          <h1 className="font-semibold md:text-xl text-lg text-blue-950 capitalize">{item.algorithm} Search</h1>
                        </div>

                        <div className="bg-transparent rounded-xl p-0">
                          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-1">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                              <tbody className="w-full">
                                <tr className="border-b border-gray-200 grid grid-cols-7 w-full">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-white col-span-3">
                                    Class Complexity
                                  </th>
                                  <td className="px-6 py-4 bg-white col-span-4 capitalize">{item.iterative.complexityClass}</td>
                                </tr>
                                <tr className="border-b border-gray-200 grid grid-cols-7 w-full">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-white col-span-3">
                                    Total Record Found
                                  </th>
                                  <td className="px-6 py-4 bg-white col-span-4">{item.iterative.totalRecord}</td>
                                </tr>
                                <tr className="border-b border-gray-200 grid grid-cols-7 w-full">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-white col-span-3">
                                    Iterative Execution Time
                                  </th>
                                  <td className="px-6 py-4 bg-white col-span-4">{item.iterative.executionTime}</td>
                                </tr>
                                <tr className="grid grid-cols-7 w-full">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-white col-span-3">
                                    Recursive Execution Time
                                  </th>
                                  <td className="px-6 py-4 bg-white col-span-4">{item.recursive.executionTime}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Collapse>

            <h1 className="font-medium text-2xl text-left text-white mt-8">Search result for &quot;{decodeURIComponent(finishQuery)}&quot;</h1>

            {resultMovies.length == 0 ? (
              <h1 className="font-medium text-2xl text-left text-white">No movies found.</h1>
            ) : (
              <div className="w-full mt-8">
                <div className="grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4 place-items-baseline">
                  {resultMovies.map((movie) => {
                    return <MovieCard key={movie.id} data={movie} />;
                  })}
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </>
  );
}
