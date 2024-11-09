import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`${isScrolled ? "bg-blue-950/60 backdrop-blur-md" : "bg-transparent"} transition-all fixed z-50 top-0 left-0 right-0`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-6">
          <div className="flex flex-row gap-20">
            <a href="/" className="flex items-center">
              <span className="self-center text-2xl whitespace-nowrap text-[#fac54e] font-bold">CWATCH</span>
            </a>

            <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-search">
              <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
              </div>
              <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-14 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li>
                  <a href="/" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 font-medium" aria-current="page">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/movie" className="block py-2 px-3 text-gray-300 rounded md:hover:bg-transparent transition md:hover:text-[#fac54e] md:p-0">
                    Movie
                  </a>
                </li>
                <li>
                  <a href="/movie/trending" className="block py-2 px-3 text-gray-300 rounded md:hover:bg-transparent transition md:hover:text-[#fac54e] md:p-0 ">
                    Trending
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1"
            >
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <form
              method="get"
              onSubmit={(e) => {
                e.preventDefault();
                if (query.length > 0) {
                  navigate(`/movie/search?query=${encodeURIComponent(query)}`);
                }
              }}
              className="relative hidden md:block"
            >
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-300 focus:border-none border-gray-300 rounded-lg focus:outline-none bg-transparent placeholder:text-gray-300"
                value={query}
                placeholder="Search for movies..."
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
            </form>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-200"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
