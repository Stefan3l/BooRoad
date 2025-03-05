import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-gray-800 text-white p-4 hidden md:block w-[10%] ">
      <ul>
        <li className="p-2 hover:bg-gray-700 cursor-pointer">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="p-2 hover:bg-gray-700 cursor-pointer">
          <NavLink to="#">Chi siamo</NavLink>
        </li>
        <li className="p-2 hover:bg-gray-700 cursor-pointer">
          <NavLink to="/trip">Lista Utenti</NavLink>
        </li>
        <li className="p-2 hover:bg-gray-700 cursor-pointer">
          <NavLink to="#">Contatti</NavLink>
        </li>
      </ul>
    </nav>
  );
}
