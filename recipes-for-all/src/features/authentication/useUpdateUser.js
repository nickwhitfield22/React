import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../../services/apiAuth";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: updateUser,
    error,
    isPending: isUpdating,
  } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: (user) => {
      queryClient.setQueriesData(["user-updated"], user.user);
      toast.success("User information successfully updated!");
      navigate("/home", { replace: true });
    },
    onError: (error) => {
      toast.error(error);
    },
  });
  return { updateUser, isUpdating };
}
