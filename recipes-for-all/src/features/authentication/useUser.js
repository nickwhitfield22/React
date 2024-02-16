import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";

export function useUser() {
  const {
    data: user,
    isLoading,
    fetchStatus,
  } = useQuery({
    queryFn: getUser,
    queryKey: ["user"],
  });
  return {
    user,
    isLoading,
    fetchStatus,
    isAuthenticated: user?.role === "authenticated",
  };
}
