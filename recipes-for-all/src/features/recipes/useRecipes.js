import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getRecipes } from "../../services/apiSpoonacular";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { useSettings } from "../settings/useSettings";

export function useRecipes() {
  const { query } = useParams();
  const { settings } = useSettings();
  console.log(settings?.number);
  const queryClient = useQueryClient();

  const { data: recipes, isLoading } = useQuery({
    queryFn: () => getRecipes(query),
    queryKey: ["recipes"],
  });

  const { mutate: searchRecipe, isPending } = useMutation({
    mutationFn: () => getRecipes(query),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
      toast.success("Recipes fetched!");
    },
    onError: () => toast.error("Error fetching recipes. Please try again."),
  });

  return { recipes, searchRecipe, isPending, isLoading };
}
