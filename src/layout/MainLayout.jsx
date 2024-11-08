import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4">
        <Outlet />
      </div>
    </>
  );
}
