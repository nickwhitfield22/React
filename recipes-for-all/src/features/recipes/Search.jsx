import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecipes } from "./useRecipes";
import Spinner from "../../ui/Spinner";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function Search() {
  const [search, setSearch] = useLocalStorage("", "search");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { searchRecipe, isPending } = useRecipes();

  // useEffect(() => {
  //   searchRecipe;
  //   console.log(searchResults);
  // }, [searchRecipe, searchResults]);

  if (isPending) return <Spinner />;
  return (
    <input
      placeholder="Search Recipes..."
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        searchParams.set("query", search);
        navigate(`recipes/${search}`);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          searchRecipe;
        }
      }}
      className="rounded-full px-3 py-2 ring-[#ff8080] transition-all duration-300 placeholder:text-stone-300 focus:outline-none focus:ring-4 sm:w-[10rem] md:w-[18rem] md:focus:w-[20rem]"
    />
  );
}

export default Search;
