import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../../services/apiSpoonacular";
import { useParams } from "react-router-dom";

export function useRecipes() {
  const { query } = useParams();

  const { data: recipes, isLoading } = useQuery({
    queryFn: () => getRecipes(query),
    queryKey: ["recipes"],
  });

  return { recipes, isLoading };
}
