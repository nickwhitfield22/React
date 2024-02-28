import { useQuery } from "@tanstack/react-query";
import { fetchFavorites } from "../../services/apiFavorites";
import { useUser } from "../authentication/useUser";

export function useGetFavorites() {
  const {
    user: { id },
  } = useUser();

  const { data: favorites, isLoading } = useQuery({
    queryFn: () => fetchFavorites(id),
    queryKey: ["favorites"],
  });
  return { favorites, isLoading };
}
