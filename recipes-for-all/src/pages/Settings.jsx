import { useForm } from "react-hook-form";
import { useSettings } from "../features/settings/useSettings";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Spinner from "../ui/Spinner";
import { useUpdateSettings } from "../features/settings/useUpdateSettings";

const trueOrFalse = [
  { id: 0, value: true, title: "TRUE" },
  { id: 1, value: false, title: "FALSE" },
];

function Settings() {
  const {
    settings: {
      addRecipeInformation,
      addRecipeNutrition,
      maxCalories,
      maxSugar,
      minCalories,
      minSugar,
      number,
    } = {},
    isLoading,
  } = useSettings();
  const { update, isPending } = useUpdateSettings();

  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    update(data);
  }

  if (isLoading) return <Spinner />;
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="mb-3 text-center text-2xl font-bold text-black">
        Settings
      </h2>
      <FormRow label="Number of Results">
        <input
          className="w-[16rem] rounded-lg px-2 py-3 ring-[#ff8080] focus:outline-none focus:ring-2"
          defaultValue={number}
          {...register("number")}
        />
      </FormRow>
      <FormRow label="Mininum Calories">
        <input
          className="w-[16rem] rounded-lg px-2 py-3 ring-[#ff8080] focus:outline-none focus:ring-2"
          defaultValue={minCalories}
          {...register("minCalories")}
        />
      </FormRow>
      <FormRow label="Maximum Calories">
        <input
          className="w-[16rem] rounded-lg px-2 py-3 ring-[#ff8080] focus:outline-none focus:ring-2"
          defaultValue={maxCalories}
          {...register("maxCalories")}
        />
      </FormRow>
      <FormRow label="Minimum Sugar">
        <input
          className="w-[16rem] rounded-lg px-2 py-3 ring-[#ff8080] focus:outline-none focus:ring-2"
          defaultValue={minSugar}
          {...register("minSugar")}
        />
      </FormRow>
      <FormRow label="Maximum Sugar">
        <input
          className="w-[16rem] rounded-lg px-2 py-3 ring-[#ff8080] focus:outline-none focus:ring-2"
          defaultValue={maxSugar}
          {...register("maxSugar")}
        />
      </FormRow>
      <FormRow label="Add Recipe Information">
        <select
          className="w-[16rem] rounded-lg px-2 py-3 ring-[#ff8080] focus:outline-none focus:ring-2"
          defaultValue={addRecipeInformation}
          {...register("addRecipeInformation")}
        >
          {trueOrFalse.map((opt) => (
            <option key={opt.id} value={opt.value}>
              {opt.title}
            </option>
          ))}
        </select>
      </FormRow>
      <FormRow label="Add Recipe Nutrition">
        <select
          className="w-[16rem] rounded-lg px-2 py-3 ring-[#ff8080] focus:outline-none focus:ring-2"
          defaultValue={addRecipeNutrition}
          {...register("addRecipeNutrition")}
        >
          {trueOrFalse.map((opt) => (
            <option key={opt.id} value={opt.value}>
              {opt.title}
            </option>
          ))}
        </select>
      </FormRow>
      <div className="flex flex-row justify-end">
        <button className="hover:bg-[#ff9580 mt-2 w-[16rem] rounded-lg bg-[#ff8080] py-2 text-center font-semibold text-white">
          {isPending ? "Saving..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default Settings;
