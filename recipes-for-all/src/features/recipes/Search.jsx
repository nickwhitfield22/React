import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useRecipes } from "./useRecipes";
import Spinner from "../../ui/Spinner";

function Search() {
  const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { searchRecipe, isPending } = useRecipes();

  // useEffect(() => {
  //   searchRecipe;
  //   console.log(searchResults);
  // }, [searchRecipe, searchResults]);

  if (isPending) return <Spinner />;
  return (
    <form onSubmit={searchRecipe}>
      <input
        placeholder="Search Recipes..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchParams.set("query", search);
            navigate(`recipes/${search}`);
          }
        }}
        className="rounded-full px-3 py-2 ring-[#ff8080] transition-all duration-300 placeholder:text-stone-300 focus:outline-none focus:ring-4 sm:w-[10rem] md:w-[18rem] md:focus:w-[20rem]"
      />
    </form>
  );
}

export default Search;
