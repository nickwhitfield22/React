import { useQuery } from "@tanstack/react-query";
import { getIngredientById } from "../../services/apiSpoonacular";
import { useParams } from "react-router-dom";

export function useIngredientId() {
  const { recipeId } = useParams();
  console.log(recipeId);

  const { data: ingredient, isLoading } = useQuery({
    queryKey: ["ingredient-id"],
    queryFn: () => getIngredientById(recipeId),
  });
  return { ingredient, isLoading };
}
