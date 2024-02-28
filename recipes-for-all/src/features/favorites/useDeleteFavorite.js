import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFavorite as deleteFavoriteApi } from "../../services/apiFavorites";
import { toast } from "sonner";

export function useDeleteFavorite() {
  const queryClient = useQueryClient();

  const { mutate: deleteFavorite, isPending } = useMutation({
    mutationFn: deleteFavoriteApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["favorites"]),
        toast.success("Favorite successfully removed!");
    },
    onError: () => toast.error("Favorite could not be removed."),
  });
  return { deleteFavorite, isPending };
}
