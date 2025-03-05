import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-gray-800 text-white p-4 hidden md:block w-[10%] ">
      <ul>
        <li className="p-2 hover:bg-gray-700 cursor-pointer">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold border-b-2 border-white"
                : "text-gray-400 hover:text-white"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="p-2 hover:bg-gray-700 cursor-pointer">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold border-b-2 border-white"
                : "text-gray-400 hover:text-white"
            }
          >
            Chi siamo
          </NavLink>
        </li>
        <li className="p-2 hover:bg-gray-700 cursor-pointer">
          <NavLink
            to="/utenti"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold border-b-2 border-white"
                : "text-gray-400 hover:text-white"
            }
          >
            Lista Utenti
          </NavLink>
        </li>
        <li className="p-2 hover:bg-gray-700 cursor-pointer">
          <NavLink
            to="/trips"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold border-b-2 border-white"
                : "text-gray-400 hover:text-white"
            }
          >
            Contatti
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
