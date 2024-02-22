import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useRecipes } from "../features/recipes/useRecipes";
import Spinner from "../ui/Spinner";
import Results from "../ui/Results";
import { useAddFavorite } from "../features/favorites/useAddFavorite";

function RecipeDetails() {
  const { recipes, isLoading } = useRecipes();
  const { addFavorite } = useAddFavorite();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  console.log(recipes);

  if (isLoading) return <Spinner />;
  return (
    <>
      <Results>{recipes?.results.length} result(s) found</Results>
      <div className="gap-6 sm:grid sm:grid-cols-2">
        {recipes?.results.map((item) => (
          <div className="mx-auto mt-10" key={item.id}>
            <p className="mb-2 text-lg font-medium">{item.title}</p>
            <img
              className="cursor-pointer rounded-lg shadow-lg"
              src={item.image}
              onClick={() => {
                searchParams.set("recipeId", item.id);
                navigate(`/recipes/${item.id}`);
              }}
            />
            <button
              onClick={() => addFavorite(item)}
              className="mt-4 rounded-lg bg-yellow-100 px-2 py-1 text-xs text-yellow-600"
            >
              Add Favorite
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default RecipeDetails;
