import { useFieldArray, useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useUpdateCabin";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    name: z.string().min(1, { message: "This field is required." }),
    maxCapacity: z.coerce
      .number({
        required_error: "This field is required.",
        invalid_type_error: "This field should be an integer.",
      })
      .int()
      .min(1, { message: "Capacity should be at least 1." }),
    regularPrice: z.coerce
      .number()
      .int({
        required_error: "This field is required.",
        invalid_type_error: "This field should be an integer.",
      })
      .min(1, { message: "This price should be greater than 0." }),
    discount: z.coerce.number().int({
      required_error: "This field is required.",
      invalid_type_error: "This field should be an integer.",
    }),
    description: z.string().min(1, { message: "This field is required." }),
    image: z.any({ required_error: "This field is required." }),
  })
  .refine((data) => data.regularPrice > data.discount, {
    message: "Discount should be less than the regular price.",
  });

const DEFAULT_VALUES = {
  name: "",
  maxCapacity: 0,
  regularPrice: 0,
  discount: 0,
  description: "",
  image: "",
};

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, updateCabin } = useEditCabin();
  const isWorking = isCreating || isEditing;

  const isEditSession = Boolean(cabinToEdit);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? cabinToEdit : DEFAULT_VALUES,
    resolver: zodResolver(schema),
  });
  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      updateCabin(
        { newCabinData: { ...data, image }, id: cabinToEdit?.id },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name")}
        />
      </FormRow>

      <FormRow label="Maximum Capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity")}
        />
      </FormRow>

      <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice")}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          {...register("discount")}
        />
      </FormRow>

      <FormRow
        label="Description for Website"
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          disabled={isWorking}
          {...register("description")}
        />
      </FormRow>

      <FormRow label="Cabin Photo">
        <FileInput id="image" accept="image/*" {...register("image")} />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button
          variation="secondary"
          type="button"
          onClick={() => reset(DEFAULT_VALUES, { keepErrors: true })}
        >
          Reset
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit Cabin" : "Create New Cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
