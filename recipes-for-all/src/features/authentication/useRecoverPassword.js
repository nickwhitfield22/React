import { useMutation } from "@tanstack/react-query";
import { recoverPassword } from "../../services/apiAuth";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export function useRecoverPassword() {
  const navigate = useNavigate();

  const {
    mutate: recover,
    error,
    isPending,
  } = useMutation({
    mutationFn: recoverPassword,
    onSuccess: () => {
      toast.success("Password recovery email sent!");
      navigate("/updateuser");
    },
    onError: (error) => {
      toast.error(error);
    },
  });
  return { recover, isPending };
}
