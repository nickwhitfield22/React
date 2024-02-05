import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCreateBooking() {
  const queryClient = useQueryClient();

  const { mutate: createBooking, isCreating } = useMutation({
    mutationFn: addBooking,
    onSuccess: () => {
      toast.success("Booking successfully created!");
      queryClient.invalidateQueries({
        queryKey: ["created-booking"],
      });
    },
    onError: () => toast.error("Booking could not be created."),
  });

  return { createBooking, isCreating };
}
