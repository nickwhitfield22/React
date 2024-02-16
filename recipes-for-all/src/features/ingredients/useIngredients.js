import { useQuery } from "@tanstack/react-query";
import { getIngredients } from "../../services/apiSpoonacular";
import { toast } from "sonner";

export function useIngredients() {
  const { data, error, isLoading } = useQuery({
    queryFn: getIngredients,
    queryKey: ["ingredients"],
  });
  if (error) toast.error(error);
  return { data, isLoading };
}
