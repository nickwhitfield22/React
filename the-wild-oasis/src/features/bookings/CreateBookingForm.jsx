import { useForm } from "react-hook-form";
import { useCabins } from "../cabins/useCabins";
import { useCreateBooking } from "./useCreateBooking";
import { useGuests } from "../../hooks/useGuests";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import Textarea from "../../ui/Textarea";
import styled from "styled-components";

const status = [
  { id: 0, value: "unconfirmed" },
  { id: 1, value: "checked-in" },
  { id: 2, value: "checked-out" },
];

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

function CreateBookingForm({ onCloseModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createBooking, isCreating } = useCreateBooking();
  const { cabins, isLoading: isLoadingCabins } = useCabins();
  const { guests, isLoading: isLoadingGuests } = useGuests();

  function onSubmit(data) {
    createBooking(data, {
      onSuccess: onCloseModal?.(),
    });
  }

  if (isCreating || isLoadingCabins || isLoadingGuests) return <Spinner />;

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Guest" error={errors?.guestId?.message}>
        <StyledSelect
          id="guestId"
          {...register("guestId", {
            required: "A value must be selected.",
          })}
        >
          <option value={null}>Select a guest...</option>
          {guests.map((guest) => (
            <option key={guest.id} value={guest.id}>
              {guest.fullName}
            </option>
          ))}
        </StyledSelect>
      </FormRow>
      <FormRow label="Cabin Name" error={errors?.cabinId?.message}>
        <StyledSelect
          id="cabinId"
          {...register("cabinId", {
            required: "A value must be selected.",
          })}
        >
          <option value={null}>Select a cabin...</option>
          {cabins.map((cabin) => (
            <option key={cabin.id} value={cabin.id}>
              {cabin.name}
            </option>
          ))}
        </StyledSelect>
      </FormRow>
      <FormRow label="Start Date" error={errors?.startDate?.message}>
        <Input
          id="startDate"
          type="date"
          {...register("startDate", {
            required: "This field must be filled out.",
          })}
        />
      </FormRow>
      <FormRow label="End Date" error={errors?.endDate?.message}>
        <Input
          id="endDate"
          type="date"
          {...register("endDate", {
            required: "This field must be filled out.",
          })}
        />
      </FormRow>
      <FormRow label="Price of cabin" error={errors?.cabinPrice?.message}>
        <Input
          id="cabinPrice"
          type="number"
          {...register("cabinPrice", {
            required: "This field must be filled out.",
          })}
        />
      </FormRow>
      <FormRow label="Total Price" error={errors?.totalPrice?.message}>
        <Input
          id="totalPrice"
          type="number"
          {...register("totalPrice", {
            required: "This field must be filled out.",
          })}
        />
      </FormRow>
      <FormRow label="Status" error={errors?.status?.message}>
        <StyledSelect
          id="status"
          {...register("status", {
            required: "A value must be selected.",
          })}
        >
          <option value={null}>Select a status...</option>
          {status.map((status) => (
            <option key={status.id} value={status.value}>
              {status.value}
            </option>
          ))}
        </StyledSelect>
      </FormRow>
      <FormRow label="Observations" error={errors?.observations?.message}>
        <Textarea
          id="observations"
          {...register("observations", {
            required: "Please fill out this field",
          })}
        />
      </FormRow>
      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isCreating}>Add</Button>
      </FormRow>
    </Form>
  );
}

export default CreateBookingForm;
