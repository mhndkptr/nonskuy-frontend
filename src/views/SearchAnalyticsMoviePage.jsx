export default function SearchAnalyticsMoviePage() {
  return (
    <div className="bg-blue-950 min-h-screen">
      <section className="pb-28 lg:pt-28 pt-24 max-w-screen-xl px-4 mx-auto">
        <div className="lg:mt-44 md:mt-36 sm:mt-32 mt-24 flex justify-center items-center flex-col gap-7">
          <h1 className="font-bold md:text-3xl text-2xl text-left text-white">Search Your Movie And Get the Analytics</h1>
          <form className="lg:w-[800px] md:w-[650px] sm:w-[500px] w-full mx-auto" method="GET" action="/movie/search-analytics/result">
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
                required
              />
              <button
                type="submit"
                className="text-gray-800 hover:text-gray-700 absolute end-2.5 bottom-2.5 bg-[#fac54e] hover:bg-[#d6a940] focus:ring-2 focus:outline-none focus:ring-[#ffce5c] font-medium rounded-lg text-sm px-4 py-2 transition"
              >
                Search
              </button>
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="input-size" className="mb-2 font-semibold md:text-xl text-lg text-left text-white">
                Input Size
              </label>
              <input
                type="number"
                id="input-size"
                name="input_size"
                className="block max-w-44 px-4 py-3 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Input size limit..."
                required
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
