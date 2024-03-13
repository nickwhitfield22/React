import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Search() {
  const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  function handleSubmit() {
    searchParams.set("qeury", search);
    navigate(`recipes/${search}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Recipes..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="rounded-full px-3 py-2 ring-[#ff8080] transition-all duration-300 placeholder:text-stone-300 focus:outline-none focus:ring-4 sm:w-[10rem] md:w-[18rem] md:focus:w-[20rem]"
      />
    </form>
  );
}

export default Search;
