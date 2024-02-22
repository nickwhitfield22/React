import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { addFavorite as addFavoriteApi } from "../../services/apiFavorites";

export function useAddFavorite() {
  const queryClient = useQueryClient();

  const {
    mutate: addFavorite,
    isPending,
    error,
  } = useMutation({
    mutationFn: addFavoriteApi,
    onSuccess: () => {
      toast.success("Favorite successfully added.");
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
    onError: (err) => toast.error(err.message),
  });
  console.log(error);
  return { addFavorite, isPending };
}
