import { useGetFavorites } from "../features/favorites/useGetFavorites";
import Recipe from "../features/recipes/Recipe";
import Spinner from "../ui/Spinner";

function Favorites() {
  const { favorites, isLoading } = useGetFavorites();
  console.log(favorites);

  if (!favorites) return <Spinner />;
  if (isLoading) return <Spinner />;
  return (
    <div className="gap-6 sm:grid sm:grid-cols-2">
      {favorites?.map((fav) => (
        <Recipe key={fav.id} recipe={fav} del />
      ))}
    </div>
  );
}

export default Favorites;
