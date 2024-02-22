import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../../services/apiSpoonacular";

export function useRecipes() {
  const { data: recipes, isLoading } = useQuery({
    queryFn: getRecipes,
    queryKey: ["recipes"],
  });
  return { recipes, isLoading };
}
