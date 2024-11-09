import { useNavigate } from "react-router-dom";
import serverErrorImg from "../assets/error.png";

export default function InternalServerError() {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen flex m-auto justify-center items-center flex-col bg-blue-950">
        <img className="xl:max-w-96 lg:max-w-80 sm:max-w-72 max-w-64 h-full" src={serverErrorImg} alt="Internal Server Error" />
        <div className="flex flex-col items-center justify-center gap-1.5">
          <h3 className="font-bold xl:text-xl md:text-lg sm:text-base text-sm text-[#174959]">Internal Server Error</h3>
          <span className="md:text-base sm:text-sm text-xs text-gray-300">
            Back to{" "}
            <button
              onClick={() => {
                navigate("/");
              }}
              className="p-2 ml-1 bg-[#fac54e] rounded-md text-gray-800 font-bold md:text-base sm:text-sm text-xs hover:bg-[#d6a940] hover:text-gray-700 transition"
            >
              {" "}
              Home page
            </button>
          </span>
        </div>
      </div>
    </>
  );
}
