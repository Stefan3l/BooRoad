import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <div className=" ">
      <Header />
      <main className="flex flex-1  ">
        <NavBar />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
