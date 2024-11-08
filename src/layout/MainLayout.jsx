import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="xl:px-24 lg:px-20 md:px-10 sm:px-6 px-3">
        <Outlet />
      </div>
    </>
  );
}
