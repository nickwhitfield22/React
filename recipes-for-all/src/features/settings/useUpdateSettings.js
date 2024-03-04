import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSettings } from "../../services/apiSettings";
import { toast } from "sonner";

export function useUpdateSettings() {
  const queryClient = useQueryClient();
  const { mutate: update, isPending } = useMutation({
    mutationFn: updateSettings,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["settings"] });
      toast.success("Settings successfully updated!");
    },
    onError: () => toast.error("Could not update settings 😔"),
  });
  return { update, isPending };
}
