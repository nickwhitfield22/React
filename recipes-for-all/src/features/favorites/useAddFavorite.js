import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { addFavorite as addFavoriteApi } from "../../services/apiFavorites";

export function useAddFavorite() {
  const queryClient = useQueryClient();

  const { mutate: addFavorite, isPending } = useMutation({
    mutationFn: addFavoriteApi,
    onSuccess: () => {
      toast.success("Favorite successfully added.");
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
    onError: () =>
      toast.info("This recipe has already been added to your favorites!"),
  });
  return { addFavorite, isPending };
}
