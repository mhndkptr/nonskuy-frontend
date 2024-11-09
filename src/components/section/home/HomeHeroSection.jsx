import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import defaultErrorBackdrop from "../../../assets/default-error-backdrop.jpg";

export default function HomeHeroSection({ highlightMovie }) {
  const navigate = useNavigate();

  return (
    <>
      <section className="h-screen">
        <div className="h-full">
          <img
            className="h-full w-screen absolute top-0 object-cover object-center -z-50"
            src={highlightMovie.backdrop}
            alt={highlightMovie.title}
            onError={(error) => {
              error.target.src = defaultErrorBackdrop;
            }}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#0f2f3a] opacity-60 -z-40"></div>

          <div className="max-w-screen-xl mx-auto px-4 -translate-y-1/2 relative top-1/2">
            <div className="max-w-xl flex flex-col items-start gap-3 justify-center">
              <h1 className="text-white font-extrabold text-5xl">{highlightMovie.title}</h1>
              {highlightMovie.releaseDate && (
                <div>
                  <div className="flex flex-row gap-2 justify-start items-center">
                    <FaCalendarAlt className="text-gray-300" />
                    <h4 className="text-gray-200">
                      <span className="text-gray-300">Year: </span>
                      {highlightMovie.releaseDate.split("-")[0]}
                    </h4>
                  </div>
                </div>
              )}

              <p className="text-gray-300">{highlightMovie.overview}</p>
              <button
                onClick={() => {
                  navigate(`/movie/${highlightMovie.id}`);
                }}
                className="text-gray-800 px-5 py-2 bg-[#fac54e] hover:bg-[#d6a940] hover:text-white transition font-medium rounded-lg"
              >
                See Detail
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
