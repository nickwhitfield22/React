import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav>
      <ul className="mt-5 flex flex-col items-center gap-5 text-2xl font-semibold text-black">
        <li className="py-3">
          <NavLink
            className="rounded-lg px-28 py-4 transition-all duration-200 hover:bg-orange-200 aria-[current=page]:bg-[#ffcf96] aria-[current=page]:text-white"
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li className="py-3">
          <NavLink
            className="rounded-lg px-28 py-4 transition-all duration-200 hover:bg-orange-200 aria-[current=page]:bg-[#ffcf96] aria-[current=page]:text-white"
            to="/recipes"
          >
            Recipes
          </NavLink>
        </li>
        <li className="py-3">
          <NavLink
            className="rounded-lg px-28 py-4 transition-all duration-200 hover:bg-orange-200 aria-[current=page]:bg-[#ffcf96] aria-[current=page]:text-white"
            to="/ingredients"
          >
            Ingredients
          </NavLink>
        </li>
        <li className="py-3">
          <NavLink
            className="rounded-lg px-28 py-4 transition-all duration-200 hover:bg-orange-200 aria-[current=page]:bg-[#ffcf96] aria-[current=page]:text-white"
            to="/favorites"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
