import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckoutOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} has been checked out.`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: (data) =>
      toast.error(`Something went wrong checking out booking #${data.id}`),
  });
  return { checkout, isCheckoutOut };
}
