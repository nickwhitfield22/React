import ProfileOperations from "../features/user/ProfileOperations";
import Search from "../features/recipes/Search";

function Header() {
  return (
    <header className=" col-span-3 flex justify-between border-b border-slate-100 bg-slate-200 px-4 py-5">
      <p>Recipes for all</p>
      <Search />
      <ProfileOperations />
    </header>
  );
}

export default Header;
