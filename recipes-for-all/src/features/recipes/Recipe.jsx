import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useAddFavorite } from "../favorites/useAddFavorite";
import { useUser } from "../authentication/useUser";
import { useDeleteFavorite } from "../favorites/useDeleteFavorite";

function Recipe({ recipe, add, del }) {
  const [searchParams] = useSearchParams();
  const { query } = useParams();
  const navigate = useNavigate();
  const { addFavorite } = useAddFavorite();
  const { deleteFavorite } = useDeleteFavorite();
  const {
    user: { id: userId },
  } = useUser();

  return (
    <div className="mx-auto mt-10">
      <p className="text-md mb-2 font-medium">{recipe.title}</p>
      <img
        className="cursor-pointer rounded-lg shadow-lg"
        src={recipe.image}
        onClick={() => {
          searchParams.set("recipeId", recipe.id);
          navigate(`/recipes/${query}/${recipe.id}`);
        }}
      />
      <div className="flex flex-row justify-end">
        {add && (
          <button
            onClick={() => addFavorite({ ...recipe, userId })}
            className="mt-4 rounded-lg bg-yellow-100 px-2 py-1 text-xs text-yellow-600"
          >
            Add Favorite
          </button>
        )}
        {del && (
          <button
            onClick={() => deleteFavorite(recipe.id)}
            className="mt-4 rounded-lg bg-red-100 px-2 py-1 text-xs text-red-600"
          >
            Delete Favorite
          </button>
        )}
      </div>
    </div>
  );
}

export default Recipe;
