import { FaCalendarAlt } from "react-icons/fa";

export default function HomePage() {
  return (
    <>
      <div className="w-full h-[2000px]">
        <div className="h-screen">
          <img className="h-screen w-screen absolute top-0 left-0 ring-0 bottom-0 object-cover object-center -z-50" src="https://image.tmdb.org/t/p/original/b9UCfDzwiWw7mIFsIQR9ZJUeh7q.jpg" alt="Ghosted Img" />
          <div className="absolute top-0 left-0 w-full h-full bg-[#0f2f3a] opacity-60 -z-10"></div>

          <div>
            <h1>Ghosted</h1>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
