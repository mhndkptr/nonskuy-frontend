import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ data }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="w-full bg-[#fac54e] rounded overflow-hidden shadow-lg cursor-pointer relative"
        onClick={() => {
          console.log("tes");
        }}
        key={data.id}
      >
        <img className="w-full h-auto object-cover" src={data.poster} alt={data.title} />

        <div className="absolute bottom-0 right-0 left-0 p-2 bg-gradient-to-t from-black to-transparent pt-10">
          <h2 className="font-bold text-sm text-white">{data.title}</h2>
          {data.releaseDate && (
            <div className="flex flex-row text-sm gap-2 justify-start items-center mt-1">
              <FaCalendarAlt className="text-gray-300" />

              <h4 className="text-gray-300 font-bold">{data.releaseDate.split("-")[0]}</h4>
            </div>
          )}
        </div>

        <button
          onClick={() => {
            navigate(`/movie/${data.id}`);
          }}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity"
        >
          <span className="text-white font-bold text-sm">See Detail</span>
        </button>
      </div>
    </>
  );
}
