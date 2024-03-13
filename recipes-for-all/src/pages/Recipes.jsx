import { useRecipes } from "../features/recipes/useRecipes";
import Spinner from "../ui/Spinner";
import Results from "../ui/Results";

import Recipe from "../features/recipes/Recipe";
import { useSettings } from "../features/settings/useSettings";

function RecipeDetails() {
  const { recipes, isLoading } = useRecipes();
  const { settings: { number } = {} } = useSettings();
  recipes?.results.splice(number);

  if (!recipes) return <Spinner />;
  // if (isLoading) return <Spinner />;
  return (
    <>
      <Results>{recipes?.results?.length} result(s) found</Results>
      <div className="gap-6 sm:grid sm:grid-cols-2">
        {recipes?.results.map((item) => (
          <Recipe key={item.id} recipe={item} add />
        ))}
      </div>
    </>
  );
}

export default RecipeDetails;
