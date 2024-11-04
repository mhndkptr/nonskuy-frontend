import { useNavigate } from "react-router-dom";
import serverErrorImg from "../assets/error.png";

export default function InternalServerError() {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen flex m-auto justify-center items-center flex-col">
        <img className="xl:max-w-96 lg:max-w-80 sm:max-w-72 max-w-64 h-full" src={serverErrorImg} alt="Internal Server Error" />
        <div className="flex flex-col items-center justify-center gap-1.5">
          <h3 className="font-bold xl:text-xl md:text-lg sm:text-base text-sm text-[#174959]">Internal Server Error</h3>
          <span className="md:text-base sm:text-sm text-xs text-[#174959]">
            Back to{" "}
            <button
              onClick={() => {
                navigate("/");
              }}
              className="p-2 bg-[#98d4df] rounded-md text-[#588f9c] font-bold md:text-base sm:text-sm text-xs hover:bg-[#82cbd6] transition"
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
