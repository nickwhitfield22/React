import { useQuery } from "@tanstack/react-query";
import { getRecipeInstructions } from "../../services/apiSpoonacular";
import { useParams } from "react-router-dom";

export function useGetRecipeInstructions() {
  const { recipeId } = useParams();

  const { data: instructions, isLoading } = useQuery({
    queryKey: ["instructions"],
    queryFn: () => getRecipeInstructions(recipeId),
  });
  return { instructions, isLoading };
}
